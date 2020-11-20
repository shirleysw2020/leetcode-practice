var color = 'red'; // property of window
var obj = {
    color:'blue', // property of window
    printColor: function(){ // property of obj, attached with obj
        var self = this;
        console.log(this, 'try')
        console.log('In printColor -- this.color: '+this.color); //blue
        console.log('In printColor -- self.color: '+self.color); //blue
        (function(){ // decleard inside of printColor but not property of object, it will executed on window context.
            //  console.log(this)
             console.log('In IIFE -- this.color: '+this.color); //undefined
             console.log('In IIFE -- self.color: '+self.color); //blue
        })();

        function nestedFunc(){// decleard inside of printColor but not property of object, it will executed on window context.
             console.log('nested fun -- this.color: '+this.color);
             console.log('nested fun -- self.color: '+self.color);
        }

        nestedFunc(); // executed on window context
        return nestedFunc;
    }
};

obj.printColor()(); // returned function executed on window context

// let confused = {
// 	those: function() {
// 		console.log(this);
// 	},
// 	these: ()=> {
// 		console.log(this);
// 	}
// }

// confused.those(); //False
// confused.these(); //{} - window