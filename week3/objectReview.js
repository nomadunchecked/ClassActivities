// Object Activity 1
// Below is an object called currentWeather
const currentWeather = {
  weather: "Rain",
  temp: 50,
  sky: "Overcast",
  // eslint-disable-next-line prettier/prettier
  details: ["Moderate Rain", 45, "Not Severe"],
};

// Print a string that references weather, temp and sky
console.log(
  `Currently, it is ${currentWeather.temp}, the sky is ${currentWeather.sky} with some ${currentWeather.weather}.`
);

// Create a variable called weatherDetails and assign it to the string below
let weatherDetails = "These are the weather details: ";

// Using a for...of loop, iterate through the array stored in "details". Each iteration of the loop should concatenate the value of the item AND a blank space to the end of the "weatherDetails" string.
// After the for...of loop, print out "weatherDetails"
for (let detail of currentWeather.details) {
  weatherDetails += `${detail} `;
}
console.log(weatherDetails);

// The exact output for this should be as shown bellow
// These are the weather details: Moderate Rain 45 Not Severe
