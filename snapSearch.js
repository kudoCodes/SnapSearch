// Add a listener for the mouseup event
document.addEventListener("mouseup", () => {
  try {
    const selectedText = window.getSelection().toString().trim();

    if (selectedText) {
      console.log("[Highlight Logger] Highlighted text:", selectedText);
    } else {
      console.log("[Highlight Logger] No text selected.");
    }
  } catch (error) {
    console.error("[Highlight Logger] Error:", error);
  }
});

// currently only works for one website and that's chatgpt
