//Parent Class
class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._setNumberOfStudents(numberOfStudents);
    }
    //getters
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    //setter
    _setNumberOfStudents(number) {
      if (typeof number === "number") {
        this._numberOfStudents = number;
      } else {
        console.log("Invalid input: numberOfStudents must be set to a Number.");
      }
    }
  
    //methods
    quickFacts() {
      console.log(
        `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
      );
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      let numOfTeacher = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[numOfTeacher];
    }
  }
  
  //SUB-CLASSES
  //Primary School Class
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, "primary", numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  //Middle School
  class MiddleSchool extends School {
    constructor(name, numberOfStudents, averageTestScores) {
      super(name, "middle", numberOfStudents);
      this._averageTestScores = averageTestScores;
    }
  
    get averageTestScores() {
      return this._averageTestScores;
    }
  
    set averageTestScores(scores) {
      let sum = scores.reduce((a, b) => a + b, 0);
      let average = Math.floor(sum / scores.length);
      this._averageTestScores =  average;
    }
  
    calculateAverageTestScores(scores) {
      this.averageTestScores = scores;
    }
  }
  
  //High School Class
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, "high", numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams() {
      console.log(this._sportsTeams);
      return this._sportsTeams;
    }
  }
  
  //INSTANCES
  
  //1-Primary School Instance
  const lorraineHansbury = new PrimarySchool(
    "Lorraine Hansbury",
    514,
    "Students must be picked up by a parent, guardian, or a family member over the age of 13."
  );
  
  //Quick Facts on PrimarySchool Class
  lorraineHansbury.quickFacts();
  
  //Substitute Teacher for Primary School
  const subTeachers4Primary = [
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ];
  const subTeacher = School.pickSubstituteTeacher(subTeachers4Primary);
  console.log(subTeacher);
  
  //2-High School Instance
  const alSmith = new HighSchool("Al E. Smith", 415, [
    "Baseball",
    "Basketball",
    "Volleyball",
    "Track and Field",
  ]);
  
  console.log(alSmith.quickFacts())
  
  //3-Middle School Instance
  const ottoVonBismarck = new MiddleSchool('Otto von Bismarck', 261);
  const grades = [
    81, 93, 80, 29, 66, 38, 78, 40, 16, 53,
    82, 76, 64, 56, 33, 61, 50, 50, 19, 23,
    58, 63, 76, 45, 8, 93, 57, 90, 99, 93,
    38, 53, 51, 2, 69, 28, 92, 82, 37, 26,
    90, 38, 85, 68, 10, 15, 6, 38, 83, 64,
    30, 35, 35, 59, 38, 34, 61, 34, 45, 68,
    51
  ];
  
  //Average Scores for Otto von Bismarck Middle School
  ottoVonBismarck.calculateAverageTestScores(grades);
  console.log(`Average Test Scores: ${ottoVonBismarck.averageTestScores}`);
  