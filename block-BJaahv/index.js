//Function Method
function createUser(name, id, noOfProjects) {
  let user = {};
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  user.getProjects = function () {
    return user.noOfProjects;
  };

  user.changeName = function (newName) {
    let prevName = user.name;
    user.name = newName;
    return prevName;
  };

  user.incrementProjects = function () {
    user.noOfProjects += 1;
    return user.noOfProjects;
  };

  user.decrementProjects = function () {
    user.noOfProjects -= 1;
    return user.noOfProjects;
  };

  return user;
}
let aman = createUser("aman", 123, 23);
let john = createUser("john", 12, 50);
console.group("Aman");
console.log(aman.name);
console.log(aman.id);
console.log(aman.incrementProjects());
console.log(aman.decrementProjects());
console.log(aman.changeName("sunny"));
console.log(aman.name);
console.groupEnd();

console.group("John");
console.log(john.name);
console.log(john.id);
console.log(john.incrementProjects());
console.log(john.decrementProjects());
console.log(john.changeName("Arya"));
console.log(john.name);
console.groupEnd();

//Prototypal pattern Method

let userMethods = {
  getProjects: function () {
    return this.noOfProjects;
  },

  changeName: function (newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;
  },

  incrementProjects: function () {
    ths.noOfProjects += 1;
    return this.noOfProjects;
  },

  decrementProjects: function () {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  },
};

function createUser(name, id, noOfProjects) {
  let user = Object.create(userMethods);
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  user.getProjects = function () {
    return user.noOfProjects;
  };

  user.changeName = function (newName) {
    let prevName = user.name;
    user.name = newName;
    return prevName;
  };

  user.incrementProjects = function () {
    user.noOfProjects += 1;
    return user.noOfProjects;
  };

  user.decrementProjects = function () {
    user.noOfProjects -= 1;
    return user.noOfProjects;
  };

  return user;
}
let aman = createUser("aman", 123, 23);
let john = createUser("john", 12, 50);
console.group("Aman");
console.log(aman.name);
console.log(aman.id);
console.log(aman.incrementProjects());
console.log(aman.decrementProjects());
console.log(aman.changeName("sunny"));
console.log(aman.name);
console.groupEnd();

console.group("John");
console.log(john.name);
console.log(john.id);
console.log(john.incrementProjects());
console.log(john.decrementProjects());
console.log(john.changeName("Arya"));
console.log(john.name);
console.groupEnd();

//Pseudoclassical pattern Method

CreateUser.prototype = {
  getProjects: function () {
    return this.noOfProjects;
  },

  changeName: function (newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;
  },

  incrementProjects: function () {
    this.noOfProjects += 1;
    return this.noOfProjects;
  },

  decrementProjects: function () {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  },
};

function CreateUser(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}
let aman = new CreateUser("aman", 123, 23);
let john = new CreateUser("john", 12, 50);
console.group("Aman");
console.log(aman.name);
console.log(aman.id);
console.log(aman.incrementProjects());
console.log(aman.decrementProjects());
console.log(aman.changeName("sunny"));
console.log(aman.name);
console.groupEnd();

console.group("John");
console.log(john.name);
console.log(john.id);
console.log(john.incrementProjects());
console.log(john.decrementProjects());
console.log(john.changeName("Arya"));
console.log(john.name);
console.groupEnd();

//class pattern Method

class CreateUser {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }

  getProjects() {
    return this.noOfProjects;
  }

  changeName(newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;
  }

  incrementProjects() {
    this.noOfProjects += 1;
    return this.noOfProjects;
  }

  decrementProjects() {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  }
}
let aman = new CreateUser("aman", 123, 23);
let john = new CreateUser("john", 12, 50);
console.group("Aman");
console.log(aman.name);
console.log(aman.id);
console.log(aman.incrementProjects());
console.log(aman.decrementProjects());
console.log(aman.changeName("sunny"));
console.log(aman.name);
console.groupEnd();

console.group("John");
console.log(john.name);
console.log(john.id);
console.log(john.incrementProjects());
console.log(john.decrementProjects());
console.log(john.changeName("Arya"));
console.log(john.name);
console.groupEnd();
