# ReAct AI Agent from Scratch (TypeScript + Gemini)

This is a simple ReAct-style AI Agent built **from scratch** in **TypeScript**, using the **Gemini API** to reason and act with tools like `lookup()`.

> Inspired by ReAct: *Reasoning + Acting*

---

## Features

- Built in TypeScript — safe, modern, fast
- Integrates with [Google Gemini API](https://ai.google.dev)
- Follows the ReAct agent pattern (reason → act → observe → repeat)
- Tool usage support (currently includes `lookup`)
- Memory buffer to track reasoning steps
- Easy to extend with new tools

---

## Demo

```bash
$ npx tsx index.ts

Gemini: lookup("capital of Germany")

Gemini: finish("Berlin")

 Final Answer: Berlin
```

---

## Setup

### 1. Clone the repo

```bash
git clone https://github.com/Nika-HISK/Agent-from-scratch.git
cd react-ai-agent
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your Gemini API key

Create a `.env` file in the root:

```env
GEMINI_API_KEY=your_google_gemini_api_key_here
```

You can get a free key from: https://ai.google.dev

---

## File Structure

```txt
.
├── .env                 # Environment variables (Gemini API key)
├── index.ts             # Main agent loop (ReAct logic)
├── tools/
│   └── lookup.ts        # Tool to simulate a search
└── package.json         # Project config
```

---

## How It Works

The agent follows the [ReAct](https://arxiv.org/abs/2210.03629) pattern:

1. **Task is defined**
2. Gemini is prompted with current memory
3. Gemini chooses what to do:
   - Call a tool: `lookup("some query")`
   - Finish the task: `finish()`
4. The agent executes the tool and saves the result
5. Memory is updated → loop continues

---

## Example Tool

### `lookup.ts`

```ts
export function lookup(query: string): string {
  if (query.toLowerCase().includes("capital of france")) {
    return "The capital of France is Paris.";
  }
  return "I don't know.";
}
```

You can add your own tools, like:

- Web search
- Math calculator
- Database fetch
- APIs

---

## Scripts

```bash
npx tsx index.ts    # Run the agent
```

---

## Requirements

- Node.js 18+
- Free Gemini API key

---

## Extend It

Want to add more tools or smarter memory?

- Add new tools in `tools/`
- Modify `memory` format
- Swap `Gemini` with OpenAI or Claude
- Add history saving or logging

---

## References

- [ReAct: Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629)
- [Google Gemini API](https://ai.google.dev)
