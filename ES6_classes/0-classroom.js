/** 0. You used to attend a place like this at some point
Implement a class named ClassRoom:

Prototype: export default class ClassRoom
It should accept one attribute named maxStudentsSize (Number) and assigned to _maxStudentsSize
 */


export default class ClassRoom {    
    constructor(maxStudentsize) {
        this._max_Studentsize = maxStudentsize; 
    }
}

// export default = allows to share the class with other files
// class ClassRoom = declaring a class and assigning its name
// this = designate precise object that we're building at a precise moment
// this._max_studentsize = maxStudentsize = we register the max number of students inside an internal variable