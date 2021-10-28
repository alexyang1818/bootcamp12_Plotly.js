d3.json('samples.json').then(data => console.log('hello'))

d3.json('samples.json').then(function(data) {
    console.log('hello');
});

d3.json('samples.json').then(data => console.log(data))

d3.json('samples.json').then(function(data) {
    wfreq = data.metadata.map(person => person.wfreq).sort((a, b) => b - a); // get wfreq and sort in descending order
    filteredWfreq = wfreq.filter(element => element != null); // remove null elements
    console.log(filteredWfreq);
});

// researcher1 = {
//     name: 'Roza',
//     age: 34,
//     hobby: 'Hiking',
//     misc: {title: 'engineer', height: '5.7'}
// };

// console.log(Object.entries(researcher1))
// console.log(Object.entries(researcher1.misc))

d3.json('samples.json').then(function(data){
    firstPerson = data.metadata[0];
    console.log(Object.entries(firstPerson)); // return to an array of key-value pairs using Object.entries()
})

d3.json('samples.json').then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>  // map key-value pairs inside the array using forEach()
        {console.log(key + ': ' + value);}
    )
})

