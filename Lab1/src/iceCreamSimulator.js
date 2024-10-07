// Define types for the size and topping dictionaries
var sizes = { small: 10, large: 25 };
var toppingPrices = { chocolate: 5, caramel: 6, berries: 10 };
var marshmallowPrice = 5;
function calculateIceCreamCost(size, toppings, withMarshmallow) {
    // Verify if the size is valid
    var basePrice = sizes[size.toLowerCase()];
    if (basePrice === undefined) {
        throw new Error("Invalid size. Choose 'small' or 'large'.");
    }
    // Calculate the cost of toppings
    var toppingsCost = 0;
    for (var _i = 0, toppings_1 = toppings; _i < toppings_1.length; _i++) {
        var topping = toppings_1[_i];
        var toppingPrice = toppingPrices[topping.toLowerCase()];
        if (toppingPrice !== undefined) {
            toppingsCost += toppingPrice;
        }
        else {
            throw new Error("Invalid topping: ".concat(topping, "."));
        }
    }
    // Calculate the total cost
    var totalCost = basePrice + toppingsCost;
    if (withMarshmallow) {
        totalCost += marshmallowPrice;
    }
    return totalCost;
}
// Function to get user input
function getIceCreamOrder() {
    var size = prompt("Enter ice cream size (small or large):");
    var toppingsInput = prompt("Enter toppings separated by commas (chocolate, caramel, berries):");
    var withMarshmallow = confirm("Add marshmallow (OK for Yes, Cancel for No):");
    if (size && toppingsInput) {
        var toppings = toppingsInput.split(",").map(function (topping) { return topping.trim(); });
        try {
            var cost = calculateIceCreamCost(size, toppings, withMarshmallow);
            alert("The total cost of your ice cream is ".concat(cost, " UAH."));
        }
        catch (error) {
            // Type the error as an Error to access .message
            if (error instanceof Error) {
                alert(error.message);
            }
            else {
                alert("An unknown error occurred.");
            }
        }
    }
    else {
        alert("Please provide valid inputs.");
    }
}
// Call the function to get the order
getIceCreamOrder();
