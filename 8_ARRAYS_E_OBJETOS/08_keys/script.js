class MyClass {
    #privateField = 42; // Campo privado
  
    getPrivateField() {
      return this.#privateField;
    }

    setPrivateField(value) {
        this.#privateField = value;
        return this.#privateField;
      }
  }
  
const obj = new MyClass();
console.log(obj.getPrivateField()); // 42
//   console.log(obj.#privateField); // SyntaxError: Private field '#privateField' must be declared in an enclosing class
obj.setPrivateField(50);
console.log(obj.getPrivateField());