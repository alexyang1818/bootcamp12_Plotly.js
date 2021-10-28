function init() {
    var selector = d3.select('#selDataset');

    d3.json('samples.json').then((data) => {
        console.log(data);
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            selector
                .append('option')
                .text(sample)
                .property('value', sample);
        });
})};

init();

d3.selectAll('#dropdownMenu').on('change', updatePlotly);

function updatePlotly() {
    var dropdownMenu = d3.select('#dropdownMenu');
    var dataset = dropdownMenu.property('value');

    var xData = [1, 2, 3, 4, 5];
    var yData = [];

    if (dataset === 'dataset1') {
        yData = [1, 2, 4, 8, 16];
    };

    if (dataset === 'dataset2') {
        yData = [1, 10, 100, 1000, 10000];
    };

    var trace = {
        x: [xData],
        y: [yData],
    };

    // var data = [trace]
    
    // The Plotly.restyle() method is used to re-render 
    // the page on the browser. This method is more efficient 
    // than calling the Plotly.newPlot() method,
    Plotly.restyle('plot', trace);
};
