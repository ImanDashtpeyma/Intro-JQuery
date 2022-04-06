function initializeTable() {

  addRow("Sweden", "Stockholm");
  addRow("Germany", "Berlin");
  addRow("France", "Partis");
  
  $("#createLink").on("click", () => {
    let country = $("#newCountryText").val();
    let capital = $("#newCapitalText").val();
    addRow(country, capital);
  });

  function addRow(country, capital) {
    let row = $("<tr>")
      .append($("<td>").text(country))
      .append($("<td>").text(capital))
      .append(
        $("<td>")
          .append($("<a href='#'>[Up]</a>").click(up))      
          .append($("<a href='#'>[Down]</a>").click(down))        
          .append($("<a href='#'>[Delete]</a>").click(del))
      );

    $("#countriesTable").append(row);
  }
  function up() {
    let row = $(this).parent().parent();
    row.insertBefore(row.prev());
  }
  function down() {
    let row = $(this).parent().parent();
    row.insertAfter(row.next());
  }
  function del() {
    let row = $(this).parent().parent();
    row.remove();
  }
}
