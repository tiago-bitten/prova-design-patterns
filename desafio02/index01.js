class Message {
    constructor(text) {
        this.text = text;
    }

    getText() {
        return this.text;
    }
}

class MessageDecorator {
    constructor(message) {
        this.message = message;
    }

    getText() {
        return this.message.getText();
    }
}

class TitleMessageDecorator extends MessageDecorator {
    getText() {
        return "------\n" + super.getText() + "------";
    }
}

class UppercaseMessageDecorator extends MessageDecorator {
    getText() {
        return super.getText().toUpperCase();
    }
}

const msg = new Message("hoje o dia está horrível");

const decorated = new TitleMessageDecorator(
    new UppercaseMessageDecorator(msg)
);

console.log(decorated.getText());
