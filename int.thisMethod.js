const a = function(x) {
  this.x = x;
};

a.prototype = {
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
}


const b = function(x,y) {
  this.y = y;
  //this.x = new a(x).x;
  // other way:
  //this will set this.x to the x that's passed into b function
  a.call(this, x);
};
const newB = new b('x','y');
newB.getX();
newB.getY();