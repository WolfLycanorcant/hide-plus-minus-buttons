Hooks.once("ready", () => {
  if (!game.user.isGM) {
    // Create a MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          // Target the plus and minus buttons by their class
          document.querySelectorAll(".adjustment-button").forEach((button) => {
            button.style.display = "none"; // Hide the buttons
          });
        }
      });
    });

    // Observe changes to the body or any part of the application
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
});
