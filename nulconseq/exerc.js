// Utility function to get a value from an options object or fallback to a default
function get$1(option, context, defaultValue) {
    return (option !== undefined) ? option : defaultValue;
}

// Placeholder for options, it could be user-defined settings
const opt = {
    titleBand: 0.8    // This could be any value or could be undefined
};

// Placeholder for some context, like a layout or axis definition
const Row = {
    // ... some properties or methods
};

// Get the title band value, defaulting to 0.5 if not set
const band = get$1(opt.titleBand, Row, 0.5);

console.log(band);  // Output will be 0.8 in this case, or 0.5 if opt.titleBand was undefined
