class Item {
    id: number;
    name: string;
    src: string;
    price: string;

    constructor(id: number, name: string, src: string, price: string) {
        this.id = id;
        this.name = name;
        this.src = src;
        this.price = price;
    }
}

export default Item;