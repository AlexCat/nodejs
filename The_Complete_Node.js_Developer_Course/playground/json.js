let p = {
    name: "Alex",
    sayHi () {
        console.log(`Hi, I'm ${this.name}`);
    }
}

p.sayHi();