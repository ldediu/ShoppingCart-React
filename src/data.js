import { v4 as uuidv4 } from "uuid";

function myData() {
    return [
        {id: uuidv4(), name: 'Bread', price: 3.50, qty: 2},
        {id: uuidv4(), name: 'Milk', price: 4.20, qty: 1},
        {id: uuidv4(), name: 'Cookies', price: 2.50, qty: 2},
        {id: uuidv4(), name: 'Water', price: 1.50, qty: 5},
        {id: uuidv4(), name: 'Cake', price: 9.90, qty: 1},
    ];
}

export default myData;