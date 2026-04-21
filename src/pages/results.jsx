import { resultDetails } from "./resultlogic";
import { styles } from "../utils/styles";

const Result = ({ result }) => {
  const data = resultDetails[result];

  return (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">
        {data.title}
      </h2>

      <p className="max-w-xl mx-auto text-gray-600 mb-6">
        {data.description}
      </p>

      <button
        onClick={() => window.location.reload()}
        className={styles.primaryButton}
      >
        Retake Assessment
      </button>
    </div>
  );
};

export default Result;