const person = {
  name: "John",
  age: 40,

  greet() {
    console.log("Hi, I am " + this.name);
  },
};

person.greet();
