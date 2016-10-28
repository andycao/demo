/**
 * Created by andycao on 16/3/23.
 */

interface Person{
    firstname : string;
    lastname : string;
}

class Student {
    fullname : string;
    constructor(public firstname, public middleinitial, public lastname) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

function greet(person : Person){
    return 'hello ' + person.firstname + ' ' + person.lastname;
}

var user = new Student('andy', 'M.' , 'cao');
//commants
console.log(greet(user));

