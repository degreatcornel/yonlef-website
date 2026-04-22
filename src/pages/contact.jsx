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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({
      name: "",
      email: "",
      message: "",
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
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-xl shadow"
        >
          <input type="hidden" name="form-name" value="contact" />
        
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

        </form>

      </div>
    </div>
  );
};

export default Contact;