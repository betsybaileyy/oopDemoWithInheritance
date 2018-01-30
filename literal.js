let p1 = {
    name: 'James',
    sayHello: function() {
        alert(`Hi! I am ${this.name}.`);
    }
};

let p2 = {
    name: 'Jacinda',
    sayHello: function() {
        alert(`Hi! I am ${this.name}.`);
    }
};

p1.sayHello();
p2.sayHello();
