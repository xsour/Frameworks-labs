// Define types for the size and topping dictionaries
const sizes: { [key: string]: number } = { small: 10, large: 25 };
const toppingPrices: { [key: string]: number } = { chocolate: 5, caramel: 6, berries: 10 };
const marshmallowPrice = 5;

function calculateIceCreamCost(size: string, toppings: string[], withMarshmallow: boolean): number {
    // Verify if the size is valid
    const basePrice = sizes[size.toLowerCase()];
    if (basePrice === undefined) {
        throw new Error("Invalid size. Choose 'small' or 'large'.");
    }

    // Calculate the cost of toppings
    let toppingsCost = 0;
    for (const topping of toppings) {
        const toppingPrice = toppingPrices[topping.toLowerCase()];
        if (toppingPrice !== undefined) {
            toppingsCost += toppingPrice;
        } else {
            throw new Error(`Invalid topping: ${topping}.`);
        }
    }

    // Calculate the total cost
    let totalCost = basePrice + toppingsCost;
    if (withMarshmallow) {
        totalCost += marshmallowPrice;
    }

    return totalCost;
}

// Function to get user input
function getIceCreamOrder(): void {
    const size = prompt("Enter ice cream size (small or large):");
    const toppingsInput = prompt("Enter toppings separated by commas (chocolate, caramel, berries):");
    const withMarshmallow = confirm("Add marshmallow (OK for Yes, Cancel for No):");

    if (size && toppingsInput) {
        const toppings = toppingsInput.split(",").map(topping => topping.trim());
        try {
            const cost = calculateIceCreamCost(size, toppings, withMarshmallow);
            alert(`The total cost of your ice cream is ${cost} UAH.`);
        } catch (error) {
            // Type the error as an Error to access .message
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("An unknown error occurred.");
            }
        }
    } else {
        alert("Please provide valid inputs.");
    }
}

// Call the function to get the order
getIceCreamOrder();
