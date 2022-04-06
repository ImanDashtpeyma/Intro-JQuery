// $(() => {
//   $("#btn1").on("click", () => {
//     $("#result").text(() => {
//       return $("#items").text();
//     });
//   });
// });
function extractText() {
  var items = document.getElementById("items").innerText;
  document.getElementById("result").innerHTML = items;
}
