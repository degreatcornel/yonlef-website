import { useState } from "react";
import { styles } from "../utils/styles";
import { useNavigate } from "react-router-dom";

export default function Unlock() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQS_ZZ6Yiz0MhocJWz5_BIK3p-H6hwlo6-CdTMXFk_WZpPVGaXFmCVSWiLi4EhQI_-i2mwxsXHgabHU/pub?output=csv";

  const handleUnlock = async () => {
    setStatus("Checking access...");

    try {
      const res = await fetch(GOOGLE_SHEET_URL);
      const text = await res.text();

      const emails = text
        .split(/\r?\n/)
        .map((e) => e.trim().toLowerCase())
        .filter((e) => e && e.includes("@"));

      const normalized = email.trim().toLowerCase();

      if (emails.includes(normalized)) {
        setStatus("Access granted!");
        localStorage.setItem("yonlef_access", "true");
        // Redirect after 2 seconds
        setTimeout(() => {
          navigate("/mentorship");
        }, 2000);
      } else {
        setStatus("Email not found. Please purchase the book first.");
      }
    } catch (err) {
      setStatus("Error verifying access. Try again.");
    }
  };

  return (
    <div className="py-20 text-center">
      <div className={styles.container}>
        <h1 className="text-3xl font-bold mb-6">Unlock Your Access</h1>

        <p className="text-gray-600 mb-8">
          Enter the email you used to purchase the book.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="border px-4 py-2 rounded-lg w-full max-w-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="mt-6">
          <button onClick={handleUnlock} className={styles.primaryButton}>
            Unlock
          </button>
        </div>

        {status && <p className="mt-6 text-sm text-gray-700">{status}</p>}
      </div>
    </div>
  );
}
