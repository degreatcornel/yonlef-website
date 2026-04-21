export const calculateResult = (answers) => {
  const scores = {
    strategic: 0,
    community: 0,
    innovator: 0,
  };

  answers.forEach((type) => {
    scores[type]++;
  });

  const max = Math.max(...Object.values(scores));

  return Object.keys(scores).find((key) => scores[key] === max);
};

export const resultDetails = {
  strategic: {
    title: "Strategic Leader",
    description:
      "You are a planner who thinks long-term and makes calculated decisions.",
  },
  community: {
    title: "Community Builder",
    description:
      "You thrive in helping others grow and building strong relationships.",
  },
  innovator: {
    title: "Innovator",
    description:
      "You are creative, bold, and love building new ideas and solutions.",
  },
};

export default calculateResult;