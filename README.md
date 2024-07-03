# School Management System

This project demonstrates a simple school management system using JavaScript ES6 classes. The system includes a base `School` class and three derived classes: `PrimarySchool`, `MiddleSchool`, and `HighSchool`. Each class has its own properties and methods, extending the functionality of the base `School` class.

## Classes

### School
- **Properties:**
  - `name`: The name of the school.
  - `level`: The level of the school (e.g., primary, middle, high).
  - `numberOfStudents`: The number of students in the school.
- **Methods:**
  - `quickFacts()`: Logs a brief description of the school.
  - `static pickSubstituteTeacher(substituteTeachers)`: Selects a random substitute teacher from an array of substitute teachers.

### PrimarySchool
- **Properties:**
  - Inherits all properties from `School`.
  - `pickupPolicy`: The policy for picking up students.
- **Methods:**
  - Inherits all methods from `School`.

### MiddleSchool
- **Properties:**
  - Inherits all properties from `School`.
  - `averageTestScores`: The average test scores of the students.
- **Methods:**
  - Inherits all methods from `School`.
  - `calculateAverageTestScores(scores)`: Calculates and sets the average test scores from an array of scores.

### HighSchool
- **Properties:**
  - Inherits all properties from `School`.
  - `sportsTeams`: An array of sports teams in the school.
- **Methods:**
  - Inherits all methods from `School`.