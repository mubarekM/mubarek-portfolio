import { Pool } from "pg";


const pool =
  globalThis.__contactPool ??
  (globalThis.__contactPool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    max: 1,
  }));

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Spam trap: real visitors never see or fill this hidden field.
  if (body.website) {
    return Response.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 1 || name.length > 100) {
    return Response.json({ ok: false, error: "Please enter your name." }, { status: 400 });
  }
  if (!emailPattern.test(email) || email.length > 200) {
    return Response.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }
  if (message.length < 5 || message.length > 2000) {
    return Response.json(
      { ok: false, error: "Your message must be between 5 and 2000 characters." },
      { status: 400 },
    );
  }

  try {
    await pool.query(
      "insert into public.contact_messages (name, email, message) values ($1, $2, $3)",
      [name, email, message],
    );
    return Response.json({ ok: true });
  } catch (error) {
    console.error("contact insert failed:", error.message);
    return Response.json(
      { ok: false, error: "Could not send your message. Please try again later." },
      { status: 500 },
    );
  }
}
