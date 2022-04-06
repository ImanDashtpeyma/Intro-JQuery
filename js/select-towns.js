function attachEvents() {
  //   var citylist = $("li")
  //     .map(function (i, el) {
  //       return $(el);
  //     });

  //   for (var i = 0; i < citylist.length; i++) {
  //     console.log(citylist[i].text());
  //   }

  var citylist = [];

  var stockholm = $("li:contains('Stockholm')");
  $("li:contains('Stockholm')").on("click", () => {
    $("li:contains('Stockholm')").toggleClass("selected");
    if ($("li:contains('Stockholm')").attr("class"))
      citylist[0] = $("li:contains('Stockholm')").text() + ",";
    else citylist[0] = "";
  });
  $("li:contains('Göteborg')").on("click", () => {
    $("li:contains('Göteborg')").toggleClass("selected");
    if ($("li:contains('Göteborg')").attr("class"))
      citylist[1] = $("li:contains('Göteborg')").text() + ",";
    else citylist[1] = "";
  });
  $("li:contains('Malmö')").on("click", () => {
    $("li:contains('Malmö')").toggleClass("selected");
    if ($("li:contains('Malmö')").attr("class"))
      citylist[2] = $("li:contains('Malmö')").text() + ",";
    else citylist[2] = "";
  });
  $("li:contains('Uppsala')").on("click", () => {
    $("li:contains('Uppsala')").toggleClass("selected");
    if ($("li:contains('Uppsala')").attr("class"))
      citylist[3] = $("li:contains('Uppsala')").text() + ",";
    else citylist[3] = "";
  });
  $("li:contains('Umeå')").on("click", () => {
    $("li:contains('Umeå')").toggleClass("selected");
    if ($("li:contains('Umeå')").attr("class"))
      citylist[4] = $("li:contains('Umeå')").text();
    else citylist[4] = "";
  });

  $("#showTownsButton").on("click", () => {
    var str = "";
    citylist.forEach((item) => {
      str += item;
    });

    $("#selectedTowns").html(`<p>Selected Town is : ${str}  </p> `);
  });
}
