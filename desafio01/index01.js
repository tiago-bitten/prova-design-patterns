class Bicicleta {
    move() {
        return "Pedalando a bicicleta no pátio da UNISATC";
    }
}

class Patinete {
    move() {
        return "Andando de patinete pelo estacionamento da UNISATC";
    }
}

class Onibus {
    move() {
        return "Andando de ônibus e chegando na UNISATC";
    }
}

class TransporteFactory {
    static types = {
        bicicleta: Bicicleta,
        patinente: Patinete,
        onibus: Onibus
    };

    static create(type) {
        const TransporteClass = this.types[type];
        if (!TransporteClass) {
            throw new Error("Tipo de transporte ainda não suportado");
        }

        return new TransporteClass();
    }
}

const tipo = "onibus";

const transporte = TransporteFactory.create(tipo);

console.log(transporte.move());
