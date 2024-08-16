// Define a higher-order function that takes a mutator function
function projectionMutator(mutator) {
    // Create some state or context for the projection
    let projection = {}; 

    // Apply the mutator to the projection
    mutator(projection);

    // Return the modified projection
    return projection;
}

// Define a function that uses projectionMutator
function createCustomProjection() {
    return projectionMutator(function (proj) {
        // Inside this function, we can modify the projection as needed
        proj.type = "custom";
        proj.parameters = { scale: 1000, center: [0, 0] };
    });
}

// Use the function to create a custom projection
let myProjection = createCustomProjection();

console.log(myProjection);
// Output: { type: 'custom', parameters: { scale: 1000, center: [0, 0] } }
