import { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send("service_p040ezq", "template_65sggeg", templateParams, "2BE3VndFDEV20XoUd")
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <Section id="contact" className="overflow-hidden">
      <div className="container relative z-2">
        <Heading
          title="Get in Touch"
          text="We are here to help you with any questions or concerns."
        />
        <form onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-4 border border-n-6 rounded bg-color-7"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 border border-n-6 rounded bg-color-7"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-4 border border-n-6 rounded bg-color-7"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-color-2 text-black py-2 rounded hover:bg-color-2 transition"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4">{status}</p>}
        <p className="mt-4 text-center">
          If you'd like to email us directly, you can contact us at:  
          <a href="mailto:support@cibaro.com" className="text-blue-400 hover:text-blue-300">
            support@cibaro.com
          </a>
        </p>
      </div>
    </Section>
  );
};

export default Contact; 