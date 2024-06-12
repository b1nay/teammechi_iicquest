


const imageUrl = {
    hap: "https://imgs.search.brave.com/n1dyIfNd9kiO4hE5Et4UhuKq-g0aOS19qxBqdoJC4pk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yNC80Ni9l/bW9qaS1zbWlsaW5n/LWhhcHB5LXZlY3Rv/ci00MzYzMjQ0Ni5q/cGc",
    ang: "https://imgs.search.brave.com/fPMetrRL1ktYow9XBi4KKBCEXg6D_0xJ8L0huTZY4QY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzgyLzU3LzQx/LzM2MF9GXzc4MjU3/NDE5NV9YOEZtTWli/aTBxV2lER0ZSVXVM/bmthbnpsUE9CYTR3/bS5qcGc",
    sad: "https://imgs.search.brave.com/SzcLOJPKjS9oLEkJ_0MN7cRQSlfPfJgM_IsC-3fwAAI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg2LzE4LzI1/LzM2MF9GXzg2MTgy/NTQ2X0d5OTNoeW9D/RlhtSzBKbFhZbk9l/a3YwNXY2Nk1VbWZi/LmpwZw",
    neu: "https://imgs.search.brave.com/SzcLOJPKjS9oLEkJ_0MN7cRQSlfPfJgM_IsC-3fwAAI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg2LzE4LzI1/LzM2MF9GXzg2MTgy/NTQ2X0d5OTNoeW9D/RlhtSzBKbFhZbk9l/a3YwNXY2Nk1VbWZi/LmpwZw",
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
    return [{ emotion: predicted_emotion, level: "Unknown" }];
  }

  const level = getEmotionLevel(predictedEmotionScore);
  return [{emotion:  emotionLabels[predicted_emotion] || predicted_emotion, level, score: predictedEmotionScore, imgurl: imageUrl[predicted_emotion]}];
}




  


const getEmotionLevel = (score) => {
  if (score >= 0.8) {
    return ["Extremely",""];
  } else if (score >= 0.6) {
    return "Very";
  } else if (score >= 0.4) {
    return "Moderately";
  } else {
    return "Slightly";
  }
};
