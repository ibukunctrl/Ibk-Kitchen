const foodList = [
  { name: "Egusi Soup", url: "egusi.html" },
  { name: "Oha Soup", url: "oha.html" },
  { name: "Ogbono Soup", url: "ogbono.html" },
  { name: "Nsala Soup", url: "nsala.html" },
  { name: "Okra Soup", url: "okra.html" },
  { name: "Ofada Rice", url: "ofada.html" },
  { name: "Jollof Rice", url: "jollof.html" },
  { name: "Moi Moi", url: "moimoi.html" },
  { name: "Yam Porridge", url: "yam.html" },
  { name: "Bitterleaf Soup", url: "bitterleaf.html" },
];

const fuse = new Fuse(foodList, {
  keys: ['name'],
  threshold: 0.4,
  includeScore: true,
});

function handleSearch() {
  const input = document.getElementById("searchInput").value.trim();
  const suggestionBox = document.getElementById("suggestions");
  suggestionBox.innerHTML = "";

  if (input === "") return;

  const results = fuse.search(input);

  if (results.length === 0) {
    // Show fallback message
    const message = document.createElement("li");
    message.innerHTML = `<strong>Oops!</strong> We don’t have that food.<br>Would you like to try something similar?`;
    suggestionBox.appendChild(message);

    // Suggest top 3 fuzzy alternatives
    const fallback = fuse.search(input).slice(0, 3);
    fallback.forEach(result => {
      const li = document.createElement("li");
      li.textContent = `Try: ${result.item.name}`;
      li.style.cursor = "pointer";
      li.onclick = () => {
        window.location.href = result.item.url;
      };
      suggestionBox.appendChild(li);
    });
  } else {
    // Show valid suggestions
    results.slice(0, 5).forEach(result => {
      const li = document.createElement("li");
      li.textContent = result.item.name;
      li.style.cursor = "pointer";
      li.onclick = () => {
        window.location.href = result.item.url;
      };
      suggestionBox.appendChild(li);
    });
  }
}
