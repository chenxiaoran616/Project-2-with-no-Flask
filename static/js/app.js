

function init() {
d3.json("Final_Table.json").then(function(wine_data) {
    // console.log(wine_data);
    var wine_score=[];
    for (var i=0;i< 30000;i++){
      wine_score.push(wine_data.score[i])};
    var wine_year=[];
    for (var i=0;i< 30000;i++){
      wine_year.push(wine_data.vintage[i])};

    
  //   var subject_id=[];

  // for (var i = 0; i < sampledata.length; i++) {
  //   subject_id.push(sampledata[i].id)};
  //   console.log(subject_id);
  //   function filtersamples(sampledata) {
  //       return sampledata.id === subject_id[0]};

  //   var filteredSample=sampledata.filter(filtersamples);
  //   console.log(filteredSample);
  //   var sortedSample=filteredSample.sort((a,b) => b.sample_values-a.sample_values);
  //   var value = sortedSample[0].sample_values.slice(0,10).reverse();
  //   console.log(value);
  //   var id= "OTU"+ sortedSample[0].otu_ids.slice(0,10).reverse();
  //   var otu_ids= sortedSample[0].otu_ids.slice(0,10).reverse();
  //   console.log(id); 
  //   var label=sortedSample[0].otu_labels.slice(0,10).reverse();
  //   console.log(label);
//plot bar chart
    var trace1 = {
      x: wine_year,
        y: wine_score,
        text:"test",
        mode:'markers',
        marker:{
            size: 5,
            // color:wine_color,

        },
        type:'scatter'};
      
  
  
    // Create the data array for the plot
    var data = [trace1];
  
    // Define the plot layout
    var layout = {
      title: "Top 10 Sample Value by OTU ID",
      xaxis: { title: "value" },
      yaxis: { title: "OTU ID" },
    };
  
    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("bar", data, layout);

})
};
init();

//     //plot scatter plot
//     var trace2 = {
//         x: otu_ids,
//         y: value,
//         text:label,
//         mode:'markers',
//         marker:{
//             size: value,
//             color:otu_ids,

//         },
//         type:'scatter'};
        


//       // Create the data array for the plot
//       var data2 = [trace2];
    
//       // Define the plot layout
//       var layout2 = {
//         title: "Sample Value vs OTU ID Scatter Plot",
//         xaxis: { title: "OTU ID" },
//         yaxis: { title: "Sample Value" },
//       };
    
//       // Plot the chart to a div tag with id "plot"
//       Plotly.newPlot("bubble", data2, layout2);

//       d3.selectAll("#selDataset").on("change", getData);

//       // Function called by DOM changes
//       function getData() {
//         var dropdownMenu = d3.select("#selDataset");
//         // Assign the value of the dropdown menu option to a variable
//         var dataset = dropdownMenu.property("value");
//         // Initialize an empty array for the country's data
//         for (subject_id in subject_id){
//           dataset===subject_id
//         };
            
      
//         if (dataset === subject_id[0]) {
//             data = us;
//         }
//         else if (dataset == 'uk') {
//             data = uk;
//         }
//         else if (dataset == 'canada') {
//             data = canada;
//         }
//         // Call function to update the chart
//         updatePlotly(data);
//       }
      
//       // Update the restyled plot's values
//       function updatePlotly(newdata) {
//         Plotly.restyle("pie", "values", [newdata]);
//       }
// });

// // On change to the DOM, call getData()

// }

// init();
// // // Call updatePlotly() when a change takes place to the DOM
// // d3.selectAll("#selDataset").on("change", updatePlotly);

// // function updatePlotly() {
// //   // Use D3 to select the dropdown menu
// //   var dropdownMenu = d3.select("#selDataset");
// //   // Assign the value of the dropdown menu option to a variable
// //   var dataset = dropdownMenu.property("value");

// //   // Initialize x and y arrays
// //   var subject_id=[];

// //   for (var i = 0; i < data.features.length; i++) {
// //     var places= data.features[i].geometry;

// //   if (dataset === 'dataset1') {
// //     x = [1, 2, 3, 4, 5];
// //     y = [1, 2, 4, 8, 16];
// //   }

// //   if (dataset === 'dataset2') {
// //     x = [10, 20, 30, 40, 50];
// //     y = [1, 10, 100, 1000, 10000];
// //   }

// //   // Note the extra brackets around 'x' and 'y'
// //   Plotly.restyle("plot", "x", [x]);
// //   Plotly.restyle("plot", "y", [y]);
// // }


// // init();
