// Letra D do Solid
class INotificationService {
    send(message) {
        throw new Error("Método não implementado");
    }
}

class EmailNotificationService extends INotificationService {
    send(message) {
        console.log("Enviando email:", message);
    }
}

class SmsNotificationService extends INotificationService {
    send(message) {
        console.log("Enviando SMS:", message);
    }
}

class Order {
    constructor(id) {
        this.id = id;
    }
}

class OrderCreatedEvent {
    constructor(order) {
        this.order = order;
    }
}

class OrderCreatedHandler {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }

    handle(event) {
        const message = `Pedido criado: ${event.order.id}`;
        this.notificationService.send(message);
    }
}

const order = new Order(123);
const _event = new OrderCreatedEvent(order);

const notificationService = new SmsNotificationService();
// const notificationService = new EmailNotificationService();

const handler = new OrderCreatedHandler(notificationService);
handler.handle(_event);
