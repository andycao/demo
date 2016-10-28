var Student = (function () {
    function Student(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    return Student;
})();
function greet(person) {
    return 'hello ' + person.firstname + ' ' + person.lastname;
}
var user = new Student('andy', 'M.', 'cao');
console.log(greet(user));
//# sourceMappingURL=test1.js.map