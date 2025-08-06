const foodPages = {
  pizza: "pizza.html",
  burger: "burger.html",
  rice: "rice.html",
  shawarma: "shawarma.html",
  spaghetti: "spaghetti.html"
};

function searchFood() {
  const input = document.getElementById("foodSearch").value.toLowerCase().trim();

  if (foodPages[input]) {
    window.location.href = foodPages[input];
  } else {
    alert("Sorry, that food isn't on our menu yet!");
  }
}
