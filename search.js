// Get the search bar and search button elements.
const searchBar = document.querySelector("#search-bar");
const searchButton = document.querySelector("#search-button");

// Add an event listener to the search button.
searchButton.addEventListener("click", function() {
  // Get the search term.
  const searchTerm = searchBar.value;

  // Filter the span elements on the page based on the search term.
  const spans = document.querySelectorAll("span");
  spans.forEach(function(span) {
    if (span.textContent.includes(searchTerm)) {
      span.style.display = "block";
    } else {
      span.style.display = "none";
    }
  });
});
