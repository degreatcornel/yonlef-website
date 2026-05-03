import { useState } from "react";
import { styles } from "../utils/styles";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-20">
      <div className={`${styles.container} max-w-2xl`}>

        <h2 className={styles.heading}>
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Have questions, suggestions, or want to collaborate? Reach out to us.
        </p>

        <form
          action="https://formspree.io/f/xgodobdv"
          method="POST"
          onSubmit={() => alert("✅ Message sent successfully! We will get back to you shortly.")}
          className="space-y-6 bg-white p-8 rounded-xl shadow"
        >
      
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border p-3 rounded"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className={`${styles.primaryButton} w-full`}
          >
            Send Message
          </button>


            <a
            href="https://api.whatsapp.com/send?phone=2348108818656&text=Hello%20YONLEF%2C%20I%20would%20like%20to%20make%20an%20enquiry"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (window.fbq) {
                window.fbq('track', 'Contact');
              }
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              💬 Chat with us on WhatsApp
            </a>
        </form>

      </div>
    </div>
  );
};

export default Contact;