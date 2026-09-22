const products=[
    {
        id:1,
        name:'marker',
        qty:100,
        price:15
    },
    {   
        id:2,
        name:'duster',
        qty:200,
        price:10
    },
]
let nextId = 3;
export const getAllProducts = () =>{
    return products;
}


export const addProduct = (item) =>{
    item.id = nextId++;
    products.push(item);
    return item;
}