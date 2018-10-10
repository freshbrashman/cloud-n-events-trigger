const config = require('config');

module.exports = class MyConfig {
    constructor() {
        this.root = config.get('config');
        this.aaa = "aaa";
    }

    get root() {
        return this.root;
    }

    say() {
        console.log(this.root);
    }
}
