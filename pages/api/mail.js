import { SMTPClient } from "emailjs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);

    const client = new SMTPClient({
      user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
      password: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      host: process.env.NEXT_PUBLIC_EMAIL_SMPT_SERVER,
      port: process.env.NEXT_PUBLIC_EMAIL_SMPT_PORT,
      ssl: true,
    });

    client.sendAsync(
      {
        from: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
        to: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
        subject: data.subject,
        text: data.message,
        html: `<p>${data.message}</p>`,
      },
      (err, message) => {
        console.log(err || message);
        return res.status(400).json({ message: message });
      },
    );

    return res.status(200).json({ message: "Email sent successfully" });
  }
}
