function init() {
    var selector = d3.select('#selDataset');

    d3.json('samples.json').then((data) => {
        
        var sampleNames = data.names;

        sampleNames.forEach((sample) => {
            selector
                .append('option')
                .text(sample)
                .property('value', sample);
        });

    buildMetadata(sampleNames[0]);
    })

};

init();

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
}

function buildMetadata(sample) {
    d3.json('samples.json').then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        var PANEL = d3.select('#sample-metadata');

        PANEL.html('');
        Object.entries(result).forEach(entry => {
            PANEL.append('h6').text(`${entry[0].toUpperCase()}: ${entry[1]}`);
        })
    })
}

function buildCharts(sample) {

}