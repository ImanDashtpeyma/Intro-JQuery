function attachEvents() {
  $(".button:contains('Malmö')").on("click", () => {
    $(".button:contains('Malmö')").toggleClass("selected");
  });
  $(".button:contains('Stockholm')").on("click", () => {
    $(".button:contains('Stockholm')").toggleClass("selected");
  });
  $(".button:contains('Göteborg')").on("click", () => {
    $(".button:contains('Göteborg')").toggleClass("selected");
  });

 


}
