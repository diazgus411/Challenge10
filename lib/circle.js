const shapes = require('./shape');

class circle extends shapes {
    render() 
        {return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;}
}
module.exports = circle;