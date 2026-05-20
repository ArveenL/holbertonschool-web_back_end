/**2. Filter

- Create a function getStudentsByLocation that returns an array of objects who are located in a specific city.
- It should accept a list of students (from getListStudents) and a city (string) as parameters.
- You must use the filter function on the array. */

// 1. receive two parameters, list of object representing students, and name of a city in the form of a string.
// 2. use filter() method to check if 'location' matches the name of the city in question
// 3. return a new array containing ONLY students from that city in question

export default function getStudentsByLocation(students, city) {
    return students.filter((student) => student.location === city);
}