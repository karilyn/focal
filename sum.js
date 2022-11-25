let args = process.argv;

args = args.slice(2);
console.log(args);


const sum = function(a, b) {
  a = Number(a);
  b = Number(b);
  console.log(a + b);
};

sum(args[0], args[1]);
