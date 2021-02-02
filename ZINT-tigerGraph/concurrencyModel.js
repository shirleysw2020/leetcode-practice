function increment() {
  var a = 0;
  ++a;
  setTimeout(() => a++, 0);
  setInterval(() => ++a, 100);

  return a;
}

increment();

/*
return value for a will be 1
then the setTimeout and setInterval gets send to the queue, and check synchronously if the stack is empty then it will add the setTimeout and setInterval to the event loop, which increments a, and the interval keeps on incrementing a(expecting it to do so every 100ms, but if we have other code to run, it's nt realistic to run in 100 seconds) - so this is teh performance bottleneck?
*/