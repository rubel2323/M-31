class Job {
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }

  features() {
    return `His name is ${this.name} at the age of ${this.age} and his profession is ${this.profession}
`;
  }
}

class Gender extends Job {
  constructor(name, age, profession, sex) {
    super(name, age, profession);
    this.sex = sex;
  }
  duty() {
    return `So, his name is ${this.name} and his age is ${this.age} , working in ${this.profession} as a ${this.sex}`;
  }
}

const jobHolder = new Gender("Sailmun", 30, "software engineer", "male");
console.log(jobHolder.duty());
