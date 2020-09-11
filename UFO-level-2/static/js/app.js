// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

tableData.forEach((ufoData) => {
  var row = tbody.append("tr");
  Object.entries(ufoData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

d3.selectAll("input").on("change", runEnter);

var data = {}

// Complete the event handler function for the form
function runEnter() {
  // 
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select(this);
  var inputID =  inputElement.attr("id")
  console.log("id", inputElement.attr("id"))
        
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
 
  tbody.html("");

  console.log(inputValue);
  console.log(tableData);
  // 
  data[inputID] = inputValue;
  console.log("input data",data)
  var filteredData = tableData.filter(dates => dates.datetime === inputValue);



  console.log(filteredData);

  filteredData.forEach(function (datafiltered) {

    console.log(datafiltered);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(datafiltered).forEach(function ([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
