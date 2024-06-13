const imageUrl = {
  hap: "/happy.png",
  ang: "/angry.png",
  sad: "/sad.png",
  neu: "/neutral.png",
};

const emotionLabels = {
  hap: "Happy",
  neu: "Neutral",
  sad: "Sad",
  ang: "Angry",
  // Add more emotion labels and their corresponding full names here
};

export default function generateEmotionList(data) {
  const { predicted_emotion, top_5_predictions } = data;
  const predictedEmotionScore = top_5_predictions.find(
    (prediction) => prediction.label === predicted_emotion
  )?.score;

  if (!predictedEmotionScore) {
    console.log("nto foudnfdofd");
    return [{ emotion: predicted_emotion, level: "Unknown" }];
  }

  const level = getEmotionLevel(predictedEmotionScore);
  return [
    {
      emotion: emotionLabels[predicted_emotion] || predicted_emotion,
      level,
      score: predictedEmotionScore,
      imgurl: imageUrl[predicted_emotion],
      top_5_predictions: top_5_predictions.map((prediction) => ({
        ...prediction,
        label: emotionLabels[prediction.label] || prediction.label,
      })),
    },
  ];
}

const getEmotionLevel = (score) => {
  if (score >= 0.8) {
    return ["Extremely", ""];
  } else if (score >= 0.6) {
    return "Very";
  } else if (score >= 0.4) {
    return "Moderately";
  } else {
    return "Slightly";
  }
};
