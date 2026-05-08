import initializeRooms from './1-make_classrooms.js';

export default function initializeRooms {
    return [
        create.initializeRooms(19)
        create.initializeRooms(20)
        create.initializeRooms(34)];
}

// export default = allows to share the class with other files
// function initializeRooms = declaring a function and assigning its name
// function initializeRooms = the function that will help create new classrooms with different student sizes
// create.initializeRooms = creating a new classroom with x amount of students, using the initializeRooms function
// [] = to create a list of arrays i.e classroom via the initializeRooms