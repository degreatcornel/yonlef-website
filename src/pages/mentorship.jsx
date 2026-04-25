import { styles } from "../utils/styles";

const Mentorship = () => {
  return (
    <div className="py-20">

      <div className={`${styles.container} text-center`}>

        <h1 className="text-4xl font-bold mb-6">
          Operation Think Again Mentorship
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          A transformational community designed to help nurses and midwives
          break limitations, build leadership capacity, and create extraordinary careers.
        </p>

      </div>

      <div className={`${styles.container} grid md:grid-cols-3 gap-8`}>

        <div className={styles.card}>
          <h3 className="font-bold">Career Direction</h3>
          <p>Clear roadmap for growth</p>
        </div>

        <div className={styles.card}>
          <h3 className="font-bold">Mentorship</h3>
          <p>Guidance from experienced leaders</p>
        </div>

        <div className={styles.card}>
          <h3 className="font-bold">Opportunities</h3>
          <p>Access to jobs, training, and networks</p>
        </div>

      </div>

      <div className="text-center mt-16">
        <a
          href="https://chat.whatsapp.com/FtRCBM3MnAv0wlpEuOE22v?mode=gi_t"
          className={styles.primaryButton}
        >
          Join Now
        </a>
      </div>

    </div>
  );
};

export default Mentorship;
