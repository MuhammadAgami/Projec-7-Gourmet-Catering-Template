addEventListener("load", function () {
  // Get the current date and time
  let now = new Date();

  // Adjust the time by adding 3 hours to match Egypt's timezone (GMT+3)
  now.setHours(now.getHours() + 3);

  // Set the value of the datetime-local input field to the adjusted time
  document.getElementById("data-local").value = now.toISOString().slice(0, 19);
});
