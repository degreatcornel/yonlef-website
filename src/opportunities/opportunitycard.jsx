import { styles } from "../utils/styles";

const OpportunityCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <h3 className="font-bold text-lg mb-1">{item.title}</h3>

      <p className="text-sm text-gray-500 mb-2">
        {item.organization} • {item.location}
      </p>

      <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded mb-3">
        {item.type}
      </span>

      <p className="text-sm text-gray-600 mb-4">
        {item.description}
      </p>

      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.primaryButton}
      >
        Apply Now
      </a>
    </div>
  );
};

export default OpportunityCard;