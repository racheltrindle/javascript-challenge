// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key,value]) =>{
        var cell = row.append("td");
        cell.text(value)
    });
});

var button = d3.select("button");
button.on("click", function(){
    var inputElement = d3.select("#datetime");
    var inputValue= inputElement.property("value");


var results = d3.select("tbody")
results.html("")

var filteredData = tableData.filter(search=> search.datetime === inputValue);
    console.log(filteredData)

filteredData.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key,value]) =>{
        var cell = row.append("td");
        cell.text(value)
     });
 });
})