import { config } from "dotenv";
config();

import { GoogleGenerativeAI } from "@google/generative-ai";
import { lookup } from "./tools/lookup";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

let memory = `
Task: Find the capital of Germany.
You can use actions like:
- lookup("capital of Germany")
- finish("your final answer here") when the task is complete
`;

async function runAgent() {
  let done = false;

  while (!done) {
    const prompt = memory + "\n\nWhat should I do next?";
    const result = await model.generateContent(prompt);
    const reply = result.response.text().trim();
    console.log("\nGemini:", reply);

    const lookupMatch = reply.match(/lookup\(["']?(.+?)["']?\)/i);
    const finishMatch = reply.match(/finish\(["']?(.+?)["']?\)/i);

    let observation = "";

    if (lookupMatch) {
      const query = lookupMatch[1];
      observation = lookup(query);
    } else if (finishMatch) {
      const answer = finishMatch[1];
      console.log("\n Final Answer:", answer);
      done = true;
      break;
    } else {
      observation = "Unknown action.";
    }

    memory += `\nAssistant: ${reply}\nObservation: ${observation}`;
  }
}

runAgent();
