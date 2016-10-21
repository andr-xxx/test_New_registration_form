app.factory('googleGraph', [googleGraph]);

function googleGraph() {
   var select = {};
   return select = {
      create: create,
      click: click
   };
   function create(arr, id, scope) {
      google.charts.load("current", {packages: ["corechart"]});


      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
         var data = google.visualization.arrayToDataTable(arr);

         var options = {
            title: ''
            // is3D: true
         };

         var chart = new google.visualization.PieChart(document.getElementById(id));
         google.visualization.events.addListener(chart, 'select', selectHandler);

         function selectHandler() {
            temp = chart.getSelection()[0];
            if (temp) {
               scope.selected = data.getFormattedValue(temp.row, 0)
            }
         }

         chart.draw(data, options);
      }
   }
   function click() {

   }

}
