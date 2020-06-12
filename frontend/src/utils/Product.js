export default class Product {
    constructor(id, title, size, count, price) {
        this.id = id;
        this.title = title;
        this.size = size;
        this.count = count;
        this.price = price;
    }
}

// export class Class {
//     constructor(phone, address, size, count, price) {
//
//         this.owner = {
//             phone: phone,
//             address: address,
//         },
//         this.items = products.map((item) => ({
//             id: item.id,
//             price: item.price,
//             count: item.amount,
//         }))
//     }
// }