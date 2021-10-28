var numbers = [0, 2, 4, 6, 8];
var plusFive = numbers.map(number => number + 5);
console.log(plusFive);

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

var cityPopulation = cities.map(city => city.population);
console.log(cityPopulation);

var numbers = [1, 2, 3, 4, 5];
var larger = numbers.filter(num => num > 1);
console.log(larger);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var startWithS = words.filter(name => name.charAt(0) == 's');
console.log(startWithS);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice1 = words.slice(0, 3);
console.log(slice1);