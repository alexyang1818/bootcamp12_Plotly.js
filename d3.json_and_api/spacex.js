const url = 'https://api.spacexdata.com/v2/launchpads';

// d3.json().then() method ensures that the data is received before executing the arrow function.
// a JavaScript promise in this case waits for the data retrieval to finish before moving on to the next code.
d3.json(url).then(receivedData => console.log(receivedData));

// JavaScript is an asynchronous language, meaning that a code statement doesn't 
// necessarily wait for the previous statement to finish executing. 
// When a statement involves a task that can take a relatively long time to complete, 
// such as reading large files or retrieving data from an API, 
// the next statement of code can begin executing before the previous task finishes. 
// Using a promise with the then() method ensures that all the data requested from the API 
// is received before executing the next part of code.

d3.json(url).then(receivedData => console.log(receivedData[4]));


d3.json(url).then(receivedData => receivedData.map(pad => console.log(pad.location.latitude, pad.location.longitude)));
