import { styles } from "../utils/styles";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "../utils/animations";

const Programs = () => {
  return (
    <div className="py-20">

      {/* 🔹 PAGE HEADER */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Our Programs
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          We design impactful programs that equip student nurses, practicing nurses,
          and midwives with the skills, leadership capacity, and career direction
          needed to build meaningful, successful, and globally relevant careers.

        </p>
      </section>

      {/* 🔥 FEATURED PROGRAM */}
      <section className={`${styles.container} mb-20`}>
        <div className={`${styles.card} border-l-4 border-blue-600`}>
          
          <h2 className="text-2xl font-bold mb-3">
            Operation Think Again
          </h2>

        
          <p className="text-gray-600 mb-4">
            A flagship quarterly event designed for practicing nurses and midwives seeking
            to advance their careers and expand their impact. This program challenges
            conventional career limitations by exposing professionals to evolving
            opportunities within and beyond the healthcare system.
          </p>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Insights into current and emerging trends in the healthcare labor market</li>
            <li>Sessions led by experienced professionals and industry experts</li>
            <li>Career advancement and transition strategies</li>
            <li>Leadership development and mindset transformation</li>
          </ul>

        </div>
      </section>

      {/* 🔥 FEATURED PROGRAM */}
      <section className={`${styles.container} mb-20`}>
        <div className={`${styles.card} border-l-4 border-blue-600`}>
          
          <h2 className="text-2xl font-bold mb-3">
            Operation Think Again
          </h2>

          <p className="text-gray-600 mb-4">
            A flagship yearly event designed for final-year nursing students in
            colleges and universities. This program challenges the traditional
            one-way mindset about the labor market and exposes students to
            real-world opportunities beyond conventional paths.
          </p>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Exposure to real labor market realities</li>
            <li>Sessions from diverse expert speakers</li>
            <li>Career strategy and transition guidance</li>
            <li>Leadership mindset transformation</li>
          </ul>
          </div>
          </section>





      {/* 🚀 CORE PROGRAMS */}
      <section className={styles.container}>
        <h2 className={styles.heading}>
          Core Initiatives
        </h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 gap-8"
        >

          {/* Mentorship */}
          <motion.div variants={fadeIn} className={styles.card}>
            <h3 className="font-bold mb-2">Mentorship Program</h3>
            <p className="text-sm text-gray-600">
              We connect young nurses with experienced nursing leaders who guide,
              support, and nurture their professional and personal growth.
            </p>
          </motion.div>

          {/* Leadership Training */}
          <motion.div variants={fadeIn} className={styles.card}>
            <h3 className="font-bold mb-2">Leadership Development</h3>
            <p className="text-sm text-gray-600">
              Structured training programs that equip young nurses with leadership
              skills, confidence, and strategic thinking.
            </p>
          </motion.div>

          {/* Career Pathways */}
          <motion.div variants={fadeIn} className={styles.card}>
            <h3 className="font-bold mb-2">Career Pathway Support</h3>
            <p className="text-sm text-gray-600">
              Providing clear, structured career guidance and support systems to
              help nurses navigate their journey successfully.
            </p>
          </motion.div>

          {/* Employment Support */}
          <motion.div variants={fadeIn} className={styles.card}>
            <h3 className="font-bold mb-2">Employment & Experience System</h3>
            <p className="text-sm text-gray-600">
              Creating pathways for newly qualified nurses to gain valuable
              experience and become highly employable in the labor market.
            </p>
          </motion.div>

        </motion.div>
      </section>

      {/* 💼 ECONOMIC EMPOWERMENT */}
      <section className="bg-gray-100 py-20 mt-20">
        <div className={styles.container}>
          <h2 className={styles.heading}>
            Economic & Personal Growth Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className={styles.card}>
              <h3 className="font-bold mb-2">Entrepreneurship Training</h3>
              <p className="text-sm text-gray-600">
                Training nurses to become business owners and build successful
                ventures alongside their professional careers.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className="font-bold mb-2">Financial Empowerment</h3>
              <p className="text-sm text-gray-600">
                Providing access to funding opportunities, financial education,
                and investment strategies tailored for nurses.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className="font-bold mb-2">Scholarships & Awards</h3>
              <p className="text-sm text-gray-600">
                Recognizing and rewarding outstanding student nurses through
                scholarships, awards, and career opportunities.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className="font-bold mb-2">Investment Support</h3>
              <p className="text-sm text-gray-600">
                Helping nurses invest wisely despite their busy schedules through
                structured and accessible investment plans.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 🌍 COLLABORATION */}
      <section className="py-20">
        <div className={`${styles.container} text-center`}>
          <h2 className={styles.heading}>
            Partnerships & Collaboration
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600">
            YONLEF actively collaborates with nursing leaders, organizations,
            government bodies, and international partners to expand opportunities
            and impact across Africa.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Programs;