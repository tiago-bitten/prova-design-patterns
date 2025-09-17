class Config {
    constructor() {
        if (Config.instance) {
            return Config.instance;
        }
        this.settings = {};
        Config.instance = this;
    }

    setConfig(key, value) {
        this.settings[key] = value;
    }

    getConfig(key) {
        return this.settings[key];
    }
}

const c1 = new Config();
c1.setConfig("lang", "pt-BR");

const c2 = new Config();
console.log(c2.getConfig("lang"));
