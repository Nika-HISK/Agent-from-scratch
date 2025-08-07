export function lookup(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("capital") && q.includes("france")) {
    return "The capital of France is Paris.";
  }
  if (q.includes("capital") && q.includes("germany")) {
    return "The capital of Germany is Berlin.";
  }

  return "I don't know the answer.";
}

