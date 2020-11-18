/*
test knowledge of scoping, this keyword
*/

// we have a function...
const obj = {
  x: 1,
  getX() {
    const inner = function() {
      console.log(this.x);
    }
    inner();
  }
}
obj.getX();//QUESTIOIN: WHAT WILL THIS RETURN

/*
ANSWER:
UNDEFINED, because of lexical scoping, this ont have acces to the obj. it only has access to the function that wraps it
*/

// Ways to fix it:
//1. change it to arrow function, that way this points to window object
const obj = {
  x: 1,
  getX() {
    const inner = () => {
      console.log(this.x);
    }
    inner();
  }
}

//2. taking advantage of exical scoping to get access to this
const obj = {
  x: 1,
  getX() {
    const that = this;
    const inner = () => {
      console.log(that.x);
    }
    inner();
  }
}

//3. bind this to the function inner
const obj = {
  x: 1,
  getX() {
    const inner = () => {
      console.log(this.x);
    }
    inner.call(this)();
  }
}