## Gemini JS Chat

This JavaScript project connects to the Google Gemini API to create a simple command-line chat interface, allowing users to interact with Gemini and receive AI-generated responses.

**Features:**

- **Gemini chat integration:** Utilizes Google's Gemini model for AI-generated responses.
- **Command-line interface (CLI):** Chat with the Gemini model directly from your terminal.
- **Typing animation:** Simulated typing effect for Gemini's responses, enhancing immersion.

### Prerequisites

- **Node.js and npm:** Ensure that Node.js and npm are installed on your machine.
- **Google Cloud Project:** You need a project with the Gemini API enabled.
- **API Key:** Get your Gemini API key from your Google Cloud project.
- **.env file:**
    - Create a `.env` file in the project's root directory.
    - Add your API key like this:

    ```bash
    GENAI_API_KEY="YOUR_ACTUAL_API_KEY_HERE"
    ```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/gemini-chatbot-cli.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd gemini-chatbot-cli
   ```

3. **Install dependencies:**
   ```bash
   npm install @google/generativeai
   ```

### Running the Project

1. **Run the chat script:**
   ```bash
   node gemini.js
   ```

2. **Start chatting:** Enter your prompts, and Gemini will respond in the terminal.