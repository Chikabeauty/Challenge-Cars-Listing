// Define the array
let cars = ["toyota", "honda", "mazda", "mitsubishi", "tesla", "lexus"];

// Log the first and last item in the array
console.log(cars[0]); // First item (toyota)
console.log(cars[cars.length - 1]); // Last item using length property (lexus)

// Add an item 'mercedes-benz' to the array
cars.push("mercedes-benz");

// Log the newly added item
console.log(cars[cars.length - 1]); // Log 'mercedes-benz'

// Loop through the array and log each item
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
