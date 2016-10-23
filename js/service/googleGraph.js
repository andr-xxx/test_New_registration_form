app.factory('googleGraph', [googleGraph]);

function googleGraph() {
    function create(arr, id, selectCallback) {
        google.charts.load("current", {packages: ["corechart"]});

        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = google.visualization.arrayToDataTable(arr);

            var options = {
                title: '',
                is3D: true
            };

            function selectHandler() {
                temp = chart.getSelection()[0];
                if (temp) {
                    selectCallback(data.getFormattedValue(temp.row, 0));
                }
            }

            var chart = new google.visualization.PieChart(document.getElementById(id));
            google.visualization.events.addListener(chart, 'select', selectHandler);

            chart.draw(data, options);
        }
    }

    return {
        create: create
    }

}
