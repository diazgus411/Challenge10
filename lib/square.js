const shapes = require('./shape');

class square extends shapes {
    render() 
        {return `<rect x="50" width="200" height="200" fill="${this.color}" />`}
}
module.exports = square;