import { Link } from "react-router-dom";
import { styles } from "../utils/styles";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "../utils/animations";
import HeroCarousel from "../components/herocarousel";

const Home = () => {
  return (
    <div>

      {/* 🌟 HERO */}

<section className="relative h-screen flex items-center justify-center text-white text-center">

  {/* Background Carousel */}
  <HeroCarousel />

  {/* Content */}
  <div className="relative z-10 px-6">
    <h1 className="text-3xl md:text-6xl font-bold mb-6">
      Empowering Nursing Leaders of Tomorrow
    </h1>

    <p className="max-w-2xl mx-auto">
      Discover your leadership potential and unlock opportunities across Africa.
    </p>
    
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <Link to="/assessment" className={styles.lightButton}>
        Take Assessment
      </Link>

      <Link to="/programs" className={styles.secondaryButton}>
        Explore Programs
      </Link>
    </div>
  </div>

</section>

      {/* 🧭 MISSION */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Our Mission</h2>

          <p className="text-center max-w-3xl mx-auto text-gray-600">
            We bridge the gap between nursing leaders and student nurses by building
            leadership capacity and creating real opportunities for growth.
          </p>
        </div>
      </section>

      {/* 🚀 IMPACT */}
      <section className="bg-gray-100 py-20">
        <div className={styles.container}>
          <h2 className={styles.heading}>What We Do</h2>

          <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                className="grid grid-cols-1 md:grid-cols-3"
                >
                <motion.div variants={fadeIn} className={styles.card}>
                    <h3 className="font-bold mb-2">Leadership Development</h3>
                    <p className="text-sm text-gray-600">
                    Building confident leaders in the nursing profession.
                    </p>
                </motion.div>

                <motion.div variants={fadeIn} className={styles.card}>
                    <h3 className="font-bold mb-2">Mentorship</h3>
                    <p className="text-sm text-gray-600">
                    Connecting young nurses with experienced professionals.
                    </p>
                </motion.div>

                <motion.div variants={fadeIn} className={styles.card}>
                    <h3 className="font-bold mb-2">Career Growth</h3>
                    <p className="text-sm text-gray-600">
                    Structured pathways for success.
                    </p>
                </motion.div>
                </motion.div>
          </div>
      </section>

      {/* 🎓 PROGRAM */}
      <section className={styles.section}>
        <div className={`${styles.container} text-center`}>
          <h2 className={styles.heading}>Featured Program</h2>

          <h3 className="text-xl font-semibold mb-3">
            Operation Think Again
          </h3>

          <p className="max-w-2xl mx-auto text-gray-600 mb-6">
            A powerful yearly event designed to reshape how final-year nursing
            students approach their careers and opportunities.
          </p>

          <Link to="/programs" className={styles.primaryButton}>
            Learn More
          </Link>
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className={`${styles.gradientBg} py-30 text-center`}>
        <div className={styles.container}>
          <h2 className="text-3xl font-bold mb-4">
            Start Your Leadership Journey Today
          </h2>

          <p className="mb-6">
            Discover your strengths and unlock your full potential.
          </p>

          <Link to="/assessment" className={styles.lightButton}>
            Take Assessment
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;