/** @format */
// JSON-Daten, die die Excel-Tabelle enthalten
var data = [
  { name: "Item 1", checked: true },
  { name: "Item 2", checked: false },
  { name: "Item 3", checked: true },
  // ...
];

// Erstellen Sie eine Tabelle im HTML-Dokument
var table = document.createElement("table");

// Fügen Sie jede Zeile der Tabelle hinzu
data.forEach(function (rowData) {
  var row = document.createElement("tr");

  // Fügen Sie jede Zelle der Zeile hinzu
  var nameCell = document.createElement("td");
  nameCell.innerHTML = rowData.name;
  row.appendChild(nameCell);

  var checkboxCell = document.createElement("td");
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = rowData.checked;
  checkboxCell.appendChild(checkbox);
  row.appendChild(checkboxCell);

  table.appendChild(row);
});

// Fügen Sie die Tabelle zu Ihrer Webseite hinzu
document.body.appendChild(table);
