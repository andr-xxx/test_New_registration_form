/**
 * Created by Andr on 20.10.2016.
 */
app.factory('googleGraph', [googleGraph]);

function googleGraph() {
   return function (arr, id) {
      console.log (arr)
      console.log (id)
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
         console.log (arr)
         var data = google.visualization.arrayToDataTable(arr);
         //    [
         //
         //    ['Task', 'Hours per Day'],
         //    ['Work',     11],
         //    ['Eat',      2],
         //    ['Commute',  2],
         //    ['Watch TV', 2],
         //    ['Sleep',    7]
         // ]);

         var options = {
            title: '',
            is3D: true
         };

         var chart = new google.visualization.PieChart(document.getElementById('company-location-graph'));
         chart.draw(data, options);
      }
   }


}
