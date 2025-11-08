async function askAI() {
  const userQuestion = document.getElementById("userInput").value;
  const responseBox = document.getElementById("responseBox");

  responseBox.innerHTML = "Thinking...";

  // Initialize SDK
  const ra = new RunAnywhere(RapidAPI); // replace with your real key

  try {
    const answer = await ra.chat(userQuestion);
    responseBox.innerHTML = '<strong>AI Assistant:</strong> ${answer}';
  } catch (error) {
    responseBox.innerHTML = "Error: Unable to get response.";
    console.error(error);
  }
}
