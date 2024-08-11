// Assuming store is an object with a reset method
const store = {
  items: [1, 2, 3],
  reset() {
    this.items = [];
    console.log("Store has been reset.");
  },
};

// Reset the store if it exists
if (store) {
  store.reset();
}
