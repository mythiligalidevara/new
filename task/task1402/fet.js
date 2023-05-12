fetch("https://dummyjson.com/products").then((res) => {
  res.json().then((res) => {
    console.log(res);

    const data1 = res.products;
    console.log(data1);
    console.log(data1.length);
    if (data1.length > 0) {
      var temp = "";

      data1.forEach((itemData) => {
        temp += `<tr id=${itemData.id}>`;
        temp += "<td>" + itemData.id + "</td>";
        temp += "<td>" + itemData.title + "</td>";
        temp += "<td>" + itemData.description + "</td>";
        temp += "<td>" + itemData.price + "</td>";
        temp += "<td>" + itemData.discountPercentage + "</td>";
        temp += "<td>" + itemData.rating + "</td>";
        temp += "<td>" + itemData.stock + "</td>";
        temp += "<td>" + itemData.brand + "</td>";
        temp += "<td>" + itemData.category + "</td>";
        temp += "<td> <img src=" + itemData.thumbnail + ">  </td>";
        // temp += "<td> <img src="+itemData.images[0]+ ">  </td></tr>";
        temp += `<td> <button onClick=deleteTable(${itemData.id})>Delete</button></td></tr>`;
      });

      document.getElementById("data").innerHTML = temp;
    }
  });
});
function myFunction() {
  var input1, filter1, table1, tr1, td1, i, txtValue;
  input1 = document.getElementById("myInput");
  filter1 = input1.value.toUpperCase();
  table1 = document.getElementById("myTable");
  tr1 = table1.getElementsByTagName("tr");
  for (i = 0; i < tr1.length; i++) {
    td1 = tr1[i].getElementsByTagName("td")[1];

    if (td1) {
      txtValue = td1.textContent || td1.innerText;
      if (txtValue.toUpperCase().indexOf(filter1) !== -1) {
        tr1[i].style.display = "";
      } else {
        tr1[i].style.display = "none";
      }
    }
  }
}

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("td")[1];
      y = rows[i + 1].getElementsByTagName("td")[1];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortTable1() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("td")[1];
      y = rows[i + 1].getElementsByTagName("td")[1];
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function deleteTable(valu) {
  let table = document.getElementById("myTable");
  let row = document.getElementById(valu);
  console.log(valu);
  table.deleteRow(row);
}
