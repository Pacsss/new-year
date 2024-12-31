// Target date: January 1, 2025 at 00:00:00
const targetDate = new Date("January 1, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const interval = setInterval(function () {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  // Calculate days, hours, minutes, and seconds remaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("timer").textContent = `${days}:${hours}:${minutes}:${seconds}`;

  // If countdown reaches zero, redirect to fireworks.html
  if (timeRemaining <= 0) {
    clearInterval(interval);
    window.location.href = "fireworks.html"; // Redirect to fireworks.html when the countdown ends
  }
}, 1000);
