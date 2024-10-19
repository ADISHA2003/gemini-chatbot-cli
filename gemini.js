const { GoogleGenerativeAI } = require("@google/generative-ai");
const readline = require('readline');
const { setTimeout } = require("timers");
require('dotenv').config();

// API keys
const genAiApiKey = process.env.GENAI_API_KEY;

const genAI = new GoogleGenerativeAI(genAiApiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function runInteractiveStory() {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  let continueStory = true;
  let userInput = "Hi"; // Starting prompt

  // Function to print text with a typing animation effect
  async function typeEffect(text) {
    for (let i = 0; i < text.length; i++) {
      process.stdout.write(text[i]);
      await new Promise(resolve => setTimeout(resolve, Math.random() * 1)); // Adjust delay as needed
    }
    console.log();
  }

  while (continueStory) {
    const result = await chatSession.sendMessage(userInput);
    const generatedText = await result.response.text();

    await typeEffect("Gemini: " + generatedText);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    await new Promise((resolve) => {
      rl.question('You: ', async (input) => {
        if (input.toLowerCase() === 'exit') {
          continueStory = false;
          rl.close();
          resolve();
        } else {
          userInput = input;
          rl.close();
          resolve();
        }
      });
    });
  }
}

runInteractiveStory().then(() => {
  console.log("Chat session ended.");
}).catch((err) => {
  console.error("Error:", err);
});
