const fn = require("./fn");

// toBe
// // 성공하는 케이스
// test("2 더하기 3은 5야", () => {
//   expect(fn.add(2, 3)).toBe(5);
// });
// // 실패하는 케이스
// test("3 더하기 3은 5야", () => {
//   expect(fn.add(3, 3)).toBe(5);
// });
// // 성공하는 케이스
// test("3 더하기 3은 5야", () => {
//   expect(fn.add(3, 2)).toEqual(5);
// });

// toEqul, toStrictEqual
// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("Susan", 30)).toEqual({
//     name: "Susan",
//     age: 30,
//   });
// });
// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("Susan", 30)).toStrictEqual({
//     name: "Susan",
//     age: 30,
//   });
// });

// // toBeNull
// test("null은 null입니다.", () => {
//   expect(null).toBeNull();
// });
// // toBeUndefined
// // toBeDefined

// // toBeTruthy
// // toBeFalsy
// test("비어있지 않은 문자열은 true입니다.", () => {
//   expect(fn.add("hello", "world")).toBeTruthy();
// });
// test("0은 false입니다.", () => {
//   expect(fn.add(1, -1)).toBeFalsy();
// });

// // 크기 비교
// // toBeClose 근사치 같다
// test("0.1더하기 0.2는 0.3입니다.", () => {
//   expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
// });
// // toBeGreaterThan 크다
// test("비밀번호는 최소 10자 초과여야 합니다.", () => {
//   const pw = "12345678910";
//   expect(pw.length).toBeGreaterThanOrEqual(10);
// });
// // toBeGreaterThanOrEqual 크거나 같다
// test("닉네임은 최소 3자 이상이여야 합니다.", () => {
//   const nickName = "아하하하";
//   expect(nickName.length).toBeGreaterThanOrEqual(3);
// });
// // toBeLessThan 작다
// test("PW는 10자 미만이어야 합니다..", () => {
//   const pw = "123456789";
//   expect(pw.length).toBeLessThan(10);
// });
// // toBeLessThanOrEqual 작거나 같다
// test("ID는 15자 이하여야 합니다.", () => {
//   const id = "THE)BLACK_ORDER";
//   expect(id.length).toBeLessThanOrEqual(15);
// });

// // toMatch 문자열 특정 값 확인
// test("Hello Woral에 a라는 글자가 있나?", () => {
//   expect("Hello World").toMatch(/h/i);
//   // i는 대소문자 구분안해줌
// });

// // toContain 배열 특정 값 확인
// test("유저 리스트에 Mike가 있나?", () => {
//   const user = "Mike";
//   const userList = ["Mike", "Jin", "Jake"];
//   expect(userList).toContain(user);
// });

// 에러발생 확인

// test("에러가 나나요?", () => {
//   // fn.throwErr는 에러일때 "xx"를 반환하라고 했기때문에 이 테스트는 실패
//   expect(() => fn.throwErr()).toThrow("oo");
// });

// 비동기 코드 테스트
// callback
// test("3초 후에 받아온 이름은 Mike", (done) => {
//   // jest는 실행이 끝에 도달하면 그대로 끝남
//   // 그렇기때문에 done를 넣어줌 => done이 호출되기전까지 테스트를 끝내지 않는다
//   function callback(name) {
//     try {
//       expect(name).toBe("Mike");
//       done();
//     } catch (error) {
//       done();
//     }
//   }
//   fn.getName(callback);
// });

// test("0+1은 1이야", () => {
//   expect(fn.add(0, 1)).toBe(1);
// });

// promise
// promise를 return하면 jest는 resolve될 때 까지 기다려줌
// return을 반드시 사용해야 한다
// test("3초 후에 받아온 나이는 30", () => {
// return fn.getAge().then((age) => {
//   expect(age).toBe(30);
// });
// 정상
// return expect(fn.getAge()).resolves.toBe(30);
// 에러일때
// return expect(fn.getAge()).rejects.toBe(30);
// 에러 확인할때
// return expect(fn.getAge()).rejects.toMatch("error");
// });

// async/await
// test("3초 후에 받아온 나이는 30", async () => {
//   const age = await fn.getAge();
//   expect(age).toBe(30);
// });

// test 전후에 해줘야 할 작업 helper 함수
// 아래처럼 하면 num이 중첩됨!!
// let num = 0;

// // beforeEach하면 test가 실행되기전에 매번 실행시켜줌
// beforeEach(() => {
//   num = 0;
// });

// // afterEach하면 test가 실행 된 후에 매번 실행시켜줌
// afterEach(() => {
//   num = 0;
// });

// test("0 더하기 1은 1이야", () => {
//   num = fn.add(num, 1);
//   expect(num).toBe(1);
// });
// test("0 더하기 2은 2이야", () => {
//   num = fn.add(num, 2);
//   expect(num).toBe(2);
// });
// test("0 더하기 3은 3이야", () => {
//   num = fn.add(num, 3);
//   expect(num).toBe(3);
// });
// test("0 더하기 4은 4이야", () => {
//   num = fn.add(num, 4);
//   expect(num).toBe(4);
// });

// test 최초 전에 1번 최후에 1번
// let car;

// beforeAll(async () => {
//   car = await fn.connectCarDb();
// });

// afterAll(() => {
//   return fn.disConnectCarDb();
// });

// describe 테스트 그룹화
// let car;

// beforeAll(async () => {
//   car = await fn.connectCarDb();
// });

// afterAll(() => {
//   return fn.disConnectCarDb();
// });
// test("브랜드는 Tesla, ", () => {
//   expect(car.brand).toBe("Tesla");
// });
// test("모델명은 Model Y, ", () => {
//   expect(car.name).toBe("Model Y");
// });
// test("색상은 Black, ", () => {
//   expect(car.color).toBe("Black");
// });

// describe("Car 관련 직업", () => {
//   let car;

//   beforeAll(async () => {
//     car = await fn.connectCarDb();
//   });

//   afterAll(() => {
//     return fn.disConnectCarDb();
//   });
//   test("브랜드는 Tesla, ", () => {
//     expect(car.brand).toBe("Tesla");
//   });
//   test("모델명은 Model Y, ", () => {
//     expect(car.name).toBe("Model Y");
//   });
//   test("색상은 Black, ", () => {
//     expect(car.color).toBe("Black");
//   });
// });

// 아래처럼 마지막테스트만 실패 시 마지막 테스트만 재테스트 하면 좋음.
// test.only 하면 됨
// 스킵하고 싶으면 skip 하면 됨
// let num = 0;
// test("0 더하기 1은 1", () => {
//   expect(fn.add(num, 1)).toBe(1);
// });
// test("0 더하기 2은 2", () => {
//   expect(fn.add(num, 2)).toBe(2);
// });
// test("0 더하기 3은 3", () => {
//   expect(fn.add(num, 3)).toBe(3);
// });
// test.skip("0 더하기 4은 4", () => {
//   expect(fn.add(num, 4)).toBe(4);
//   num = 10;
// });
// test("0 더하기 5은 5", () => {
//   expect(fn.add(num, 5)).toBe(5);
// });

// 목 함수
// mock function : 테스트 하기 위해 흉내만 내는 함수
// userDB에 접근해서 userList를 select해오는 작업이 필요
// 작성해야 될 코드가 상당히 많아짐
// 외부 요인의 영향을 받음(네트워크, DB) 등등
// 테스트에서 같은 코드는 동일한 결과를 내는것이 중요

// const mockFn = jest.fn();
// mockFn();
// mockFn(1);
// calls로 알 수 있는 것 함수가 몇번 호출 되었는가? 호출될 때 전달된 인수는 무엇인가
// test("함수는 2번 호출됩니다.", () => {
//   expect(mockFn.mock.calls.length).toBe(2);
// });
// test("2번째로 호출된 함수에 전달된 첫번재 인수는 1입니다.", () => {
//   expect(mockFn.mock.calls[1][0]).toBe(1);
// });

// mock function 예제
// const mockFn = jest.fn();
// function forEachAdd1(arr) {
//   arr.forEach((num) => {
//     mockFn(num + 1);
//   });
// }

// forEachAdd1([10, 20, 30]);

// test("함수 호출은 3번 됩니다.", () => {
//   expect(mockFn.mock.calls.length).toBe(3);
// });

// test("전달된 값은 11, 21, 31 입니다.", () => {
//   expect(mockFn.mock.calls[0][0].toBe(11));
//   expect(mockFn.mock.calls[1][0].toBe(21));
//   expect(mockFn.mock.calls[2][0].toBe(31));
// });

// const mockFn = jest.fn((num) => num + 1);

// mockFn(10);
// mockFn(20);
// mockFn(30);

// test("함수 호출은 3번 됩니다.", () => {
//   // results하면 type과 value를 알려줌
//   console.log(mockFn.mock.results);
//   expect(mockFn.mock.calls.length).toBe(3);
// });

// test("10에서 1증가한 11이 반환된다", () => {
//   expect(mockFn.mock.results[0].value).toBe(11);
// });
// test("20에서 1증가한 21이 반환된다", () => {
//   expect(mockFn.mock.results[1].value).toBe(21);
// });
// test("30에서 1증가한 31이 반환된다", () => {
//   expect(mockFn.mock.results[2].value).toBe(31);
// });

// 중간에 return값 바꾸기
// const mockFn = jest.fn();

// mockFn
//   .mockReturnValueOnce(10)
//   .mockReturnValueOnce(20)
//   .mockReturnValueOnce(30)
//   .mockReturnValue(40);

// mockFn();
// mockFn();
// mockFn();
// mockFn();

// test("", () => {
//   console.log(mockFn.mock.results);
//   expect(""), toBe("");
// });

// mockFn 비동기
// const mockFn = jest.fn();
// mockFn.mockResolvedValue({ name: "Mike" });
// test("받아온 이름은 Mike", () => {
//   mockFn().then((res) => {
//     expect(res.name).toBe("Mike");
//   });
// });

// jest.mock로 fn을 모킹 모듈로 변환
// 실제 createUser는 호출되지 않고 목함수가 동작함
// 로그가 안찍힘
// jest.mock("./fn");
// fn.createUser.mockReturnValue({ name: "Mike" });

// test("유저를 만든다", () => {
//   const user = fn.createUser("Mike");
//   expect(user.name).toBe("Mike");
// });

// toBeCalled
const mockFn = jest.fn();
mockFn(10, 20);
mockFn();
mockFn(30, 40);

// 한번이라도 호출되면 통과
test("한번 이상 호출?", () => {
  expect(mockFn).toBeCalled();
});
// 정확한 호출 횟수
test("정확히 세번 호출?", () => {
  expect(mockFn).toBeCalledTimes(3);
});
// 인수로 어떤값들을 받았는지
test("10이랑 20 전달받은 함수가 있는가?", () => {
  expect(mockFn).toBeCalledWith(10, 20);
});
// 마지막으로 실행된 함수의 인수만 체크
test("마지막 함수는 30이랑 40 받았음??", () => {
  expect(mockFn).lastCalledWith(30, 40);
});
