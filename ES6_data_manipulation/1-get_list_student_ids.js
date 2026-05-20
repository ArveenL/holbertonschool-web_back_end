/**1. More mapping
- Create a function getListStudentIds that returns an array of ids from a list of object.
- This function is taking one argument which is an array of objects - and this array is the same format as getListStudents from the previous task.
- If the argument is not an array, the function is returning an empty array.
- You must use the map function on the array. 
--------------------------------------------------------------------------------------*/

// the exercise wants us to take an array of students and return an array of IDs
export default function getListStudentIds(list) {   
    if (!Array.isArray(list)) {                             
        return []
    }

    return list.map((student) => student.id)
}

/** 1. function_name(list) => list is an internal variable to the function, 
    that represents the data the function is waiting to receive and then function*/

/** 2.Array.isArray -> check if argument(e.g list) is an array or not*/ 
    
/** 3. method called map() to iterate through each element of the array and then
    TRANSFORM each element into IDs, and hence we get a new array of IDs ..note that
    we're using attribute called ID from previous file 0-get_list_students.js*/