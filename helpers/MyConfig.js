const config = require('config');

module.exports = class MyConfig {
    constructor() {
        this.root = config.get('config');
    }

    say() {
        console.log(this.root);
    }
}
