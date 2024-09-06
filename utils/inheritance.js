class Emp {
    get fullName() {
        return `${target.firstname} ${target.lastname}`;
    }
    set fullName(name) {
        [this.firstname, this.lastname] = name.split(' ');
    }   
}

// const hong = new Emp();
// hong.fullName = 'Kildong Hong';
// hong.fullName = 'Lee';

// proxy 이용
const hong = new Emp();
const proxyObject = new Proxy(hong, {
    get(target, prop, receiver) {
        console.log(target, prop);
        if(prop == 'fullName') {
            return `${target.firstname} ${target.lastname}`;
        }
        else {
            return target[prop]?.toUpperCase();
        }
    },
    set(target, prop, value, receiver) {
        console.log(target, prop, value);
        if(prop == 'fullName') {
            const [f, l] = value.split(' ');
            target.firstname = f;
            target.lastname = l;
        }
        else {
            target[prop] = value;
        }
        return target;
    }
});

//get
console.log(proxyObject.fullName);

//set
proxyObject.fullName = 'Kildong Hong';
console.log(proxyObject.fullName);

proxyObject.name = 'Lee';
console.log(proxyObject.name);



/*
class Emp {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const createEmpProxy = (emp) => {
  return new Proxy(emp, {
    get(target, prop, receiver) {
      if (prop === 'fullName') {
        return `${target.firstName} ${target.lastName.toUpperCase()}`;
      }
      return Reflect.get(target, prop, receiver);
    },

    set(target, prop, value, receiver) {
      if (prop === 'fullName') {
        const [firstName, lastName] = value.split(' ');
        target.firstName = firstName;
        target.lastName = lastName;
        return true;
      }
      return Reflect.set(target, prop, value, receiver);
    }
  });
};

// 사용 예시
const hong = createEmpProxy(new Emp());
hong.fullName = 'Kildong Hong';
console.log(hong.fullName); // 'Kildong HONG'
hong.fullName = 'Lee Minho';
console.log(hong.firstName); // 'Lee'
console.log(hong.lastName); // 'Minho'
console.log(hong.fullName); // 'Lee MINHO'* */