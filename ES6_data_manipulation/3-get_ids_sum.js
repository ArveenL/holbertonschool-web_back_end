/**3. Reduce
- Create a function getStudentIdsSum that returns the sum of all the student ids.
- It should accept a list of students (from getListStudents) as a parameter.
- You must use the reduce function on the array. */

/**
 * Calculate sum of all student IDs
 * @param {Array} students - list of the object 'student'
 * @returns {Number} - sum of all student IDs
 */
export default function getStudentIdsSum(students) {
    return students.reduce((accumulator, student) => accumulator + student.id, 0);
}



/**Accumulator = variable that that keeps score of the total, even as we keep increasing the size of the array
 * it is initially set at zero
 * 
 * Callback function = as long as there's an element in the array, we tell JVC to take the actual value of the 
 * accumulator and to add the current student ID to the accumulator
 * 
 * Return = once above done it returns the total sum of all IDs
 * 
 */