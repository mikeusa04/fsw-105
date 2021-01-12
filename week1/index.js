var shopper = {
    firstName: "Mike",
    lastName: "Saleh",
    age: 41,
    customer: true,
    worker: false,
    groceryCart: ["Fruit", "Drinks", "Chips"],
    address: {
        street: "111 street",
        city: "San Diego",
        state: "CA",
        country: "USA",
    },
    displayInfo: function() {
        return shopper.firstName + " " + shopper.lastName + " " + "Age" + " " + shopper.age + " " + "Customer:" + " " + shopper.customer + ", " + "Worker:" + " " + shopper.worker + ", " + "his cart included:" + " " + shopper.groceryCart;
    }
}
console.log("Shopper name:" + " " + shopper.displayInfo());
console.log("Address is: "+shopper.address.street+", "+shopper.address.city+", "+shopper.address.state+", "+shopper.address.country);