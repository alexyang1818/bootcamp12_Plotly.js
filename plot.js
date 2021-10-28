var cities = cityGrowths;
console.log(cities);

// Sort the cities in descending order of population growth.
let sortedCities = cities.sort((a, b) => b.Increase_from_2016 - a.Increase_from_2016)
console.log(sortedCities)

// Select only the top five cities in terms of growth.
let topFiveCities = sortedCities.slice(0, 5)
console.log(topFiveCities)

// Create separate arrays for the city names and their population growths.
let cityNames = topFiveCities.map(a => a.City)
let cityPopulations = topFiveCities.map(a => parseInt(a.Increase_from_2016)) //parseInt converts to integers

// Use Plotly to create a bar chart with these arrays.
let trace = {
    x: cityNames,
    y: cityPopulations,
    type: 'bar'
}

let data = [trace]

let layout = {
    title: 'Population growth of top 5 fast growing cities',
    xaxis: {title: 'Cities'},
    yaxis: {title: 'Population Growth, 2016-2017'}
}

Plotly.newPlot('bar-plot', data, layout)