import ClassRoom from './0-classroom.js'

export default function initializeRooms() {
    return [
        new ClassRoom(19),
        new ClassRoom(20),
        new ClassRoom(34),
    ];
}

// export default = allows to share the class with other files
// function initializeRooms() = declaring a function and assigning its name
// function initializeRooms = the function that will help create new classrooms with different student sizes
// new Classroom = creating a new classroom with x amount of students, using the initializeRooms function
// [] = to create a list of arrays i.e classroom via the initializeRooms