import { useState } from "react";
import { styles } from "../utils/styles";
import { careerSteps } from "../features/data";
import { motion, AnimatePresence } from "framer-motion";

const CareerPath = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleStep = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="py-20">
      <div className={styles.container}>

        <h2 className={styles.heading}>
          Nursing Career Pathway
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Explore the journey from student nurse to global leader. Click each stage
          to learn what it takes to grow and succeed.
        </p>

        <div className="relative max-w-3xl mx-auto">

          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-200"></div>

          <div className="space-y-6">

            {careerSteps.map((step, index) => (
              <div key={index} className="relative pl-12">

                {/* Circle indicator */}
                <div
                  className={`absolute left-0 top-2 w-8 h-8 rounded-full flex items-center justify-center text-white ${
                    activeIndex === index
                      ? "bg-blue-600"
                      : "bg-blue-400"
                  }`}
                >
                  {index + 1}
                </div>

                {/* Card */}
                <div
                  onClick={() => toggleStep(index)}
                  className={`${styles.card} cursor-pointer hover:shadow-xl transition`}
                >
                  <h3 className="font-bold">{step.title}</h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>

                  {/* Expandable content */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 list-disc pl-5 text-sm text-gray-600"
                      >
                        {step.details?.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default CareerPath;