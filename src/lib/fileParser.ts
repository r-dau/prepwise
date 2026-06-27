export async function extractTextFromFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("/api/parse-file", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const { error } = await response.json();
    throw new Error(error || "Datei konnte nicht verarbeitet werden.");
  }

  const { text } = await response.json();
  return text;
}
