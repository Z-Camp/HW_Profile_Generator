// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);
		this.school = school;
		this.role = 'Intern';
	}
	getSchool() {
		return this.school;
	}
}

//test
const testIntern = new Intern('testIntern', 4, 'intern@test.com', 'test university');
console.log(testIntern);
testIntern.getSchool();
testIntern.getRole();

module.exports = Intern;
