class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  introduce() {
    console.log(`Hi, I’m ${this.name}, studying ${this.course}.`);
  }
}

const s1 = new Student("Shivam Netke", 21, "BBACA");
s1.introduce();                    // Hi, I’m Shivam Netke, studying BBACA.
