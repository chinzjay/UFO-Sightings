//import datafrom data.js
const tableData=data;
//Reference the HTML table using D3
var tbody=d3.select('tbody');
//Define a function to build a table
function buildTable(data){
    //Clear existing data
    tbody.html("");
    //Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row=tbody.append("tr");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).foreach((val) =>{
           let cell=row.append("td");
           cell.text(val); 
        }
        );
    });
}