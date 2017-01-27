function Rectangle (w, h){
    this.width = w;
    this.height = h;
}

Rectangle.prototype.getArea = function() {
    return this.width *this.height;
}

var rect = new Rectangle(200, 40);
document.write("Площдь равна" + rect.getArea());