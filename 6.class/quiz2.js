// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보: 이름, 부서이름, 한달 근무시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

// 내가 푼거
class Employee {
  constructor(name, department, officeHours) {
    this.name = name;
    this.department = department;
    this.officeHours = officeHours;
    this.salary = this.officeHours * 10000 + '원';
  }
}

class Fulltimer extends Employee {}

class Parttimer extends Employee {
  constructor(name, department, officeHours, salary) {
    super(name, department, officeHours);
    this.salary = this.officeHours * 80000 + '원';
  }
}

const employee1 = new Fulltimer('조하나', '융합기술연구소 FE개발팀', 200);
const employee2 = new Parttimer('스페셜티', '탄자니아 킬리만자로', 13);
console.log(employee1);
console.log(employee2);

// - 엘리 답

// class Employee {
//   constructor(name, department, hoursPerMonth, payRate) {
//     this.name = name;
//     this.department = department;
//     this.hoursPerMonth = hoursPerMonth;
//     this.payRate = payRate;
//   }
//   calculatePay() {
//     return this.hoursPerMonth * this.payRate;
//   }
// }

// class FullTimeEmployee extends Employee {
//   static #PAY_RATE = 10000;
//   constructor(name, department, hoursPerMonth) {
//     super(name, department, hoursPerMonth, FullTimeEmployee.#PAY_RATE);
//   }
// }
// class PartTimeEmployee extends Employee {
//   static #PAY_RATE = 8000;
//   constructor(name, department, hoursPerMonth) {
//     super(name, department, hoursPerMonth, PartTimeEmployee.#PAY_RATE);
//   }
// }

// const hana = new FullTimeEmployee('하나', 's/w', 30);
// const two = new PartTimeEmployee('두리', 's/w', 20);
// console.log(hana.calculatePay());
// console.log(two.calculatePay());
