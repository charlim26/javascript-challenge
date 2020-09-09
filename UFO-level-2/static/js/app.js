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

// Complete the event handler function for the form
function runEnter() {
// 
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var inputElement = d3.select("#City");
  var inputElement = d3.select("#State");
  var inputElement = d3.select("#Country");
  var inputElement = d3.select("#Shape");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

tbody.html("");

  console.log(inputValue);
  console.log(tableData);
// 
  
  var filteredData = tableData.filter(dates => dates.datetime === inputValue);
  var filteredData = tableData.filter(City => City.City === inputValue);
  var filteredData = tableData.filter(State => State.State === inputValue);
  var filteredData = tableData.filter(Country => Country.Country === inputValue);
  var filteredData = tableData.filter(Shape => Shape.Shape === inputValue);




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
