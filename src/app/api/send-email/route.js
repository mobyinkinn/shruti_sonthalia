import nodemailer from "nodemailer";

export async function POST(request) {
  const data = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const emailContent = `
    New Contact Form Submission:

    Full Name: ${data.full_name}
    Profession: ${data.profession}
    Work Title: ${data.work_title}
    Organisation: ${data.organisation}
    Email: ${data.email}
    Phone: ${data.phone}
    Service: ${data.service}
    For Whom: ${data.for_whom}
    Start Time: ${data.start_time}
    Reason: ${data.reason}

  `;

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission",
      text: emailContent,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
