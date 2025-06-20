function myFunction() {
  var input = document.getElementById("myInput");
  var filter = input.value.toUpperCase();
  var table = document.getElementById("myTable");
  var tr = table.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      var txtValue = td.textContent || td.innerText;
      tr[i].style.display = txtValue.toUpperCase().includes(filter) ? "" : "none";
    }
  } 
}
