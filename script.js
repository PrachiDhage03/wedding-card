document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name")?.trim();

  const guestElement = document.getElementById("guestName");

  console.log("URL:", window.location.href);
  console.log("Extracted Name:", name || "No name found");

  if (!guestElement) {
    console.error("guestName element NOT found");
    return;
  }

  if (name && name.length > 0) {
    // Clean and capitalize name
    const formattedName = name
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    guestElement.textContent = formattedName;
    console.log("Guest name set:", formattedName);
  } else {
    guestElement.textContent = " संजय तुकाराम धागे";
    console.log("No guest name - using default");
  }
});
