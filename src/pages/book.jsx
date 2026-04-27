import { styles } from "../utils/styles";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";

const Book = () => {
  return (
    <div className="py-20">

      {/* HERO */}
      <section className={`${styles.container} text-center`}>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Transform Your Nursing Career Beyond Limits
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Discover how to build leadership capacity, unlock opportunities,
          and create a financially stable and impactful future as a nurse or midwife.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

  {/* Selar */}
  <a
  href="https://selar.com/96gr718795"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.primaryButton}
>
  Buy on Selar
</a>




  {/* Amazon */}
  <a
    href="https://www.amazon.com/YOUR-BOOK-LINK"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.lightButton}
  >
    Buy on Amazon
  </a>

</div>
      </section>



<form
  action="https://gmail.us3.list-manage.com/subscribe/post?u=04a4f2cfd10fd3ee31a488bf6&id=6284d5d235"
  method="POST"
  target="_blank"
  className="flex flex-col md:flex-row gap-4 justify-center"
>
  <input
    type="email"
    name="EMAIL"
    placeholder="Enter your email"
    required
    className="border px-4 py-2 rounded-lg w-full md:w-80"
  />

  {/* hidden bot protection */}
  <input
    type="text"
    name="b_04a4f2cfd10fd3ee31a488bf6_6284d5d235"
    style={{ display: "none" }}
  />

  <button
    type="submit"
    className={styles.primaryButton}
  >
    Get Access
  </button>
</form>

      {/* VALUE SECTION */}
      <section className={`${styles.container} mt-20`}>
        <h2 className={styles.heading}>
          What You Will Gain
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className={styles.card}>
            <h3 className="font-bold mb-2">Career Clarity</h3>
            <p className="text-sm text-gray-600">
              Understand the different pathways available beyond traditional nursing roles.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className="font-bold mb-2">Leadership Growth</h3>
            <p className="text-sm text-gray-600">
              Build the mindset and skills required to lead and influence.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className="font-bold mb-2">Financial Growth</h3>
            <p className="text-sm text-gray-600">
              Learn strategies to create wealth alongside your nursing career.
            </p>
          </div>

        </div>
      </section>

      {/* POST-PURCHASE CTA */}
      <section className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">
          Already Purchased the Book?
        </h2>

        <p className="text-gray-600 mb-6">
          Unlock your mentorship access and join the Operation Think Again community.
        </p>

        <Link to="/unlock" className={styles.primaryButton}>
          Unlock Mentorship Access
        </Link>

<div className="mt-10 bg-blue-50 p-6 rounded-lg max-w-xl mx-auto">

  <p className="text-sm text-gray-700">
    ✅ After purchasing, return here to unlock your mentorship access and bonus resources.
  </p>
<Testimonials />
  <a
    href="/unlock"
    className="block mt-4 text-blue-600 font-semibold"
  >
    Already purchased? Click here to unlock →
  </a>

</div>


      </section>
        
    </div>
  );
};

export default Book;
