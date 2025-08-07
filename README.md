#  ReAct AI Agent from Scratch (TypeScript + Gemini)

This is a simple ReAct-style AI Agent built **from scratch** in **TypeScript**, using the **Gemini API** to reason and act with tools like `lookup()`.

>  Inspired by ReAct: *Reasoning + Acting*

---

##  Features

- Built in TypeScript — safe, modern, fast
- Integrates with [Google Gemini API](https://ai.google.dev)
- Follows the ReAct agent pattern (reason → act → observe → repeat)
- Tool usage support (currently includes `lookup`)
- Memory buffer to track reasoning steps
- Easy to extend with new tools

---

##  Demo

```bash
$ npx tsx index.ts

Gemini: lookup("capital of Germany")

Gemini: finish("Berlin")

 Final Answer: Berlin
