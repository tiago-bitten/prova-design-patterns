// Letra O do Solid
class User {
    constructor(name) {
        this.name = name;
    }
}


class CreateUserCommand {
    constructor(name) {
        this.name = name;
    }
}


class IDataBaseManager {
    saveUser(user) {
        throw new Error("Método não implementado");
    }
}


class MySqlDataBaseManager extends IDataBaseManager {
    saveUser(user) {
        console.log("Salvando usuário no MySQL:", user);
    }
}

class MongoDataBaseManager extends IDataBaseManager {
    saveUser(user) {
        console.log("Salvando usuário no MongoDB:", user);
    }
}

class RedisDataBaseManager extends IDataBaseManager {
    saveUser(user) {
        console.log("Salvando usuário no Redis:", user);
    }
}


// O foco é aqui. a classe CreateUserCommandHandler apenas lida com a inserção de um usuário. ela está fechada
// para qualquer outro tipo de situação, a menos que seja necessário incluir novas coisas na inserão de um usuário
class CreateUserCommandHandler {
    constructor(dataBaseManager) {
        this.dataBaseManager = dataBaseManager;
    }

    handle(command) {
        const user = new User(command.name);
        this.dataBaseManager.saveUser(user);
    }
}


const command = new CreateUserCommand("João");

const dbManager = new RedisDataBaseManager();

const handler = new CreateUserCommandHandler(dbManager);
handler.handle(command);
