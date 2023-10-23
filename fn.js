const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age, gender: undefined }),
  throwErr: () => {
    throw new Error("xx");
  },
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      callback(name);
      // throw new Error("서버 에러...");
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
        // rej("error");
      }, 3000);
    });
  },
  connectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: "Mike",
          age: 30,
          gender: "male",
        });
      }, 500);
    });
  },
  disConnectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  connectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          brand: "Tesla",
          name: "Model Y",
          color: "Black",
        });
      }, 500);
    });
  },
  disConnectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  createUser: (name) => {
    console.log("실제로 사용자가 생성되었습니다.");
    return {
      name,
    };
  },
};

module.exports = fn;
