public virtual class SuperClass {

    public string salutation;
    public string firstName;
    public string lastName;

    public SuperClass() {
        salutation = 'Mr.';
        firstName = 'Barack';
        lastName = 'Obama';
    }

    public SuperClass(string sal, string fName, string lName) {
        salutation = sal;
        firstName = fName;
        lastName = lName;
    }

    public void printFullName() {
        System.debug('Hello my name is ' + salutation + ' ' + lastName);
    }

}