// Controller do grasp
class Order {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        this.items.push({ product, quantity });
    }

    total() {
        return this.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }

    createOrder(requestData) {
        return this.orderService.create(requestData);
    }
}

class OrderService {
    create(data) {
        const order = new Order();
        data.items.forEach(i => {
            const product = new Product(i.name, i.price);
            order.addItem(product, i.quantity);
        });
        return order;
    }
}

const orderService = new OrderService();
const controller = new OrderController(orderService);

const order = controller.createOrder({
    items: [
        { name: "Mouse", price: 100, quantity: 2 },
        { name: "Teclado", price: 200, quantity: 1 }
    ]
});

console.log(order.total());
