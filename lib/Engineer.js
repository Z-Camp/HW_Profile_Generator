// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
		this.role = 'Engineer';
	}
	getGithub() {
		return this.github;
	}
}

const testEngineer = new Engineer(
	'testName',
	1,
	'test@testemail.com',
	'testgithub'
);
console.log(testEngineer);
testEngineer.getRole();
module.exports = Engineer;
