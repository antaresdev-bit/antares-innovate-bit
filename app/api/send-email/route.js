import sendEmail from "@/services/sendMail";

export async function POST(request) {
  try {
    const { to, subject, text, html } = await request.json();
    await sendEmail({ subject, text, to, html });
    return new Response(JSON.stringify({ message: 'Email sent!' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Something went wrong!' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 503,
    });
  }
}