import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, email, mobile, message } = req.body;

    // Create the email content
    const emailContent = `
      <h3>Contact Form Submission</h3>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    // Nodemailer transporter configuration
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can use other services like 'hotmail', 'yahoo', etc.
      auth: {
        user: process.env.EMAIL_USER, // The email account you're using to send messages
        pass: process.env.EMAIL_PASS, // App password or normal email account password
      },
    });

    try {
      // Sending email with nodemailer
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "info@raidotaxi.com", // The recipient email address
        subject: "Contact Form Submission",
        html: emailContent, // Email content in HTML
      });

      // Respond with success if email is sent
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email: ", error);
      // Respond with an error message if something goes wrong
      res
        .status(500)
        .json({ success: false, message: "Failed to send message" });
    }
  } else {
    // Respond with a 405 Method Not Allowed if it's not a POST request
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
