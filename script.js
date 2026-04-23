document.addEventListener("DOMContentLoaded", function () {

  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");

  const guestElement = document.getElementById("guestName");

  console.log("URL:", window.location.href);
  console.log("Extracted Name:", name);

  if (guestElement) {
    if (name) {
      guestElement.textContent = "✨ " + name + " ✨";
    } else {
      guestElement.textContent = "✨ Dear Guest ✨";
    }
  } else {
    console.error("guestName element NOT found");
  }

}); 