import React, { useState } from "react";
import './MoodSelector.css'

const moods = [
  { emoji: "😀", label: "Happy", message: "Keep spreading your joy! The world needs your smile. 😊" },
  { emoji: "😔", label: "Sad", message: "It's okay to feel down sometimes. You are stronger than you think. 💙" },
  { emoji: "😠", label: "Angry", message: "Take a deep breath. Everything will be okay. You're in control. ✨" },
  { emoji: "😌", label: "Calm", message: "Enjoy the peace. Stay mindful and cherish the moment. 🌿" },
  { emoji: "😢", label: "Emotional", message: "Your feelings are valid. Let it out, and take care of yourself. ❤️" },
];

const MoodSelector = ({ onMoodSelect }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [message, setMessage] = useState("");
  const handleMoodSelect = (mood) => {
    setSelectedMood(mood.label);
    setMessage(mood.message);
    onMoodSelect(mood.label);
  };

  return (
    <div className="mood">
      <h2>How are you feeling today ?</h2>
      <div className="mood-scale">
        {moods.map((mood) => (
          <button key={mood.label} className="select-btn"
            onClick={() => handleMoodSelect(mood)}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
      {selectedMood && (
        <div className="mood-message">
          <p>You are feeling: {selectedMood}</p>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default MoodSelector;
