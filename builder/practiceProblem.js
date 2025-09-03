class Car {
  constructor(brand, model, year, engine, color, gps) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engine = engine;
    this.color = color;
    this.gps = gps;
  }

  showDetails() {
    console.log(
      `${this.year} 
      ${this.brand} 
      ${this.model} 
      - Motor: ${this.engine}, 
      Cor: ${this.color}, 
      GPS: ${this.gps ? "Sim" : "Não"}`
    );
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setBrand(brand) {
    this.car.brand = brand;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setYear(year) {
    this.car.year = year;
    return this;
  }

  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  setGps(gps) {
    this.car.gps = gps;
    return this;
  }

  build() {
    if (!this.car.brand) {
      throw new Error("Brand is required.")
    }

    if (!this.car.model) {
      throw new Error("Model is required.")
    }

    if (!this.car.year) {
      throw new Error("Year is required.")
    }

    return this.car;
  }
}

class CarDirector {
  static buildPopularCar() {
    return new CarBuilder()
      .setBrand("Fiat")
      .setModel("Uno")
      .setYear(2022)
      .setEngine("1.0")
      .setColor("Branco")
      .setGps(false)
      .build();
  }

  static buildLuxuryCar() {
    return new CarBuilder()
      .setBrand("BMW")
      .setModel("Serie 7")
      .setYear(2024)
      .setEngine("3.0 Turbo")
      .setColor("Preto")
      .setGps(true)
      .build();
  }

  static buildSUV() {
    return new CarBuilder()
      .setBrand("Toyota")
      .setModel("SW4")
      .setYear(2023)
      .setEngine("2.8 Diesel")
      .setColor("Prata")
      .setGps(true)
      .build();
  }
}

const popular = CarDirector.buildPopularCar();
const luxo = CarDirector.buildLuxuryCar();
const suv = CarDirector.buildSUV();

popular.showDetails();
luxo.showDetails();
suv.showDetails();


const car1 = new Car("Toyota", "Corolla", 2024, "2.0", "Preto", true);
const car2 = new Car("Honda", "Civic", 2023, "1.5 Turbo", "Prata", false);

car1.showDetails();
car2.showDetails();
