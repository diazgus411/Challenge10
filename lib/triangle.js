const shapes = require('./shape');

class triangle extends shapes {
    render() 
        {return `<polygon height="100" width="100" points="0,200 300,200 150, 0" fill="${this.color}" />`};
};
module.exports = triangle;