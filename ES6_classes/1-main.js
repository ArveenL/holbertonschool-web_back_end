import ClassRoom from './0-classroom'

export default function initializeRooms() {
    return [
        new initializeRooms(19),
        new initializeRooms(20),
        new initializeRooms(34),
    ];
}

// export default = allows to share the class with other files
// function initializeRooms() = declaring a function and assigning its name
// function initializeRooms = the function that will help create new classrooms with different student sizes
// new = creating a new classroom with x amount of students, using the initializeRooms function
// [] = to create a list of arrays i.e classroom via the initializeRooms