function sayHello() {
  console.log("Salut les Mimirs");
}

function createSayHello(promo) {
  return function () {
    console.log(`Salut les ${promo}s`);
  };
}

const functions = [];
functions.push(sayHello);
functions.push(createSayHello("Pizza"));

functions[0]();
functions[1]();
