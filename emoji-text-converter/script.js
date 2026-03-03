const emojiDictionary = {
    "😀": "grinning_face",
    "😂": "face_with_tears_of_joy",
    "😍": "smiling_face_with_heart_eyes",
    "🥰": "smiling_face_with_hearts",
    "😊": "smiling_face_with_smiling_eyes",
    "😎": "smiling_face_with_sunglasses",
    "😢": "crying_face",
    "😭": "loudly_crying_face",
    "😡": "angry_face",
    "❤️": "red_heart",
    "💔": "broken_heart",
    "👍": "thumbs_up",
    "👎": "thumbs_down",
    "🙏": "folded_hands",
    "🎉": "party_popper",
    "🔥": "fire",
    "✨": "sparkles",
    "🌟": "star",
    "💤": "zzz",
    "💧": "droplet",
    "☀️": "sun",
    "🌧️": "rain_cloud",
    "🌈": "rainbow",
    "🌹": "rose",
    "🍀": "four_leaf_clover",
    "🎃": "jack_o_lantern",
    "🤖": "robot",
    "👻": "ghost"
    // add more emojis as needed
  };
  
  const emojiInput = document.getElementById("emojiInput");
  const textOutput = document.getElementById("textOutput");
  const convertBtn = document.getElementById("convertBtn");
  const copyBtn = document.getElementById("copyBtn");
  
  convertBtn.addEventListener("click", () => {
      const input = emojiInput.value;
      let result = "";
  
      for (let char of input) {
          if (emojiDictionary[char]) {
              result += emojiDictionary[char] + " ";
          } else {
              result += char;
          }
      }
  
      textOutput.value = result.trim();
  });
  
  copyBtn.addEventListener("click", () => {
      textOutput.select();
      document.execCommand("copy");
      alert("Text copied to clipboard!");
  });