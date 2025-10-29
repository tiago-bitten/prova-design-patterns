class WorkItem {
    add(item) {
        throw new Error("Método 'add' não implementado");
    }

    showDetails() {
        throw new Error("Método 'showDetails' não implementado");
    }
}

class Task extends WorkItem {
    constructor(name) {
        super();
        this.name = name;
    }

    showDetails(indent = 0) {
        console.log(`${" ".repeat(indent)}- Tarefa: ${this.name}`);
    }
}

class Project extends WorkItem {
    constructor(name) {
        super();
        this.name = name;
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    showDetails(indent = 0) {
        console.log(`${" ".repeat(indent)}Projeto: ${this.name}`);
        this.items.forEach((item) => item.showDetails(indent + 2));
    }
}

const t1 = new Task("Escrever documentação");
const t2 = new Task("Fazer testes");
const t3 = new Task("Publicar release");

const subProject = new Project("Módulo de API");
subProject.add(new Task("Criar endpoints"));
subProject.add(new Task("Implementar autenticação"));

const mainProject = new Project("Lançamento v1.0");
mainProject.add(t1);
mainProject.add(t2);
mainProject.add(subProject);
mainProject.add(t3);

mainProject.showDetails();
