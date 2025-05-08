function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true) {
        return input.toUpperCase();
    }
    else if (toUpper === false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return (items.filter(item => item.rating >= 4));
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}


class Vehicle {
    private _make: string;
    private _year: number;
    constructor(make: string, year: number) {
        this._make = make,
            this._year = year
    }
    getInfo() {
        return `Make: ${this._make}, Year: ${this._year}`;
    }
}

class Car extends Vehicle {
    private _model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year)
        this._model = model
    }
    getModel() {
        return `Model: ${this._model}`;
    }
}

function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length == 0) {
        return null;
    }

    let expensiveProduct = products[0];
    for (let product of products) {
        if (product.price > expensiveProduct.price) {
            expensiveProduct = product;
        }
    }
    return expensiveProduct;
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day >= Day.Monday && day <= Day.Friday) {
        return "Weekday";
    }
    else {
        return "Weekend";
    }
}

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"))
            }
            else {
                resolve(n * n)
            }
        }, 1000)
    });
} 