// Line chart

Plotly.newPlot("plotAreaLineChart", [{x: [1, 2, 3], y: [10, 20, 40]}]);

// bar chart

var trace = {
    x: ['burrito', 'pizza', 'chicken'],
    y: [10, 18, 5],
    type: 'bar'
};

var layout = {
    title: 'Luncheon Survey',
    xaxis: {title: 'Food Option'},
    yaxis: {title: 'Number of Respondents'}
};

Plotly.newPlot('plotAreaBarChart', [trace], layout);

// bar chart #2

var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", 
        "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", 
        "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'bar'
};

var data = [trace];

var layout = {
    title: "'Bar' Chart",
    xaxis: {title: 'Drinks'},
    yaxis: {title: '% of Drinks Ordered'}
};

Plotly.newPlot('plotAreaBarChart2', data, layout);

// pie chart: replace x, y with labels, values

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", 
        "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", 
        "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
};

var data = [trace];

var layout = {
    title: "'Pie' Chart",
};

Plotly.newPlot('plotAreaPieChart', data, layout);

// scatter plot

var trace1 = {
    x: [1, 2, 3],
    y: [10, 15, 35],
    mode: 'markers', // other modes: 'lines', 'lines+markers'
    name: 'team A',  // legend
    text: ['data#1', 'data#2', 'data#3'], //name for each data point
    type: 'scatter'
};

var trace2 = {
    x: [1, 2, 3],
    y: [10, 20, 30],
    mode: 'lines', // other modes: 'lines', 'lines+markers'
    name: 'team B',  // legend
    // text: ['data#1', 'data#2', 'data#3'], //name for each data point
    type: 'scatter'
};

var data = [trace1, trace2];

var layout = {
    title: 'Scatter chart',
    xaxis: {
        title: 'x-axis',
        range: [0, 4]
    },
    yaxis: {
        title: 'y-axis',
        range: [0, 50]
    }
};

Plotly.newPlot("plotAreaScatterChart", data, layout);