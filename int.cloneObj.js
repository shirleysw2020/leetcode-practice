const obj = {
  a: {
    b: {
      c: 1
    }
  }
};

clone.a.b.c = 2;
/*
clone obj but dont keep reference to original obj.
if we change c to 2 in clone, original obj should not change.
*/
console.log(obj.a.b.c);

/*
answer: either recursion to copy everything voer or do a hack:
*/
const clone = json.parse(json.stringify(obj));
// stringify first so it loose its reference and put it back into object.