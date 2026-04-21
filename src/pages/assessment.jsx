import { useState } from "react";
import questions from "./questions";
import { calculateResult } from "./resultlogic";
import Result from "./results";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";
import { styles } from "../utils/styles";

const Assessment = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (type) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setResult(calculateResult(newAnswers));
    }
  };

  if (result) return <Result result={result} />;

  const current = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  return (
    <div className="py-20">
      <div className={`${styles.container} max-w-xl`}>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 rounded mb-6">
          <div
            className="bg-blue-600 h-2 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>

        <motion.div
          key={step}
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <h2 className="text-xl font-bold mb-4">
            {current.question}
          </h2>

          <div className="space-y-3">
            {current.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option.type)}
                className={`${styles.card} w-full text-left`}
              >
                {option.text}
              </button>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Assessment;