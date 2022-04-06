function search() {
  var input = document.getElementById("searchText").value;
  var list = [...document.getElementById("towns").getElementsByTagName("li")];
  let counter = 0;
  list.forEach((element) => {
    var str = element.innerText;
    var srch = str.includes(input);

    if (srch) {
      element.innerHTML = "<b>" + element.innerText + "</b>";
      counter++;
    }
  });

  document.getElementById("result").innerText = counter + " Mach found  ";
}
