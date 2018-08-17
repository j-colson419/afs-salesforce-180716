public class SubClass extends SuperClass {

    public override void printName() {
        super.printName();
        System.debug('But you can call me ' + name + '.');
    }

    public static void example() {
        SubClass sc = new SubClass();
        sc.printName();
    }

    /*
     *  The above static method will print the following:
     *
     *  Hello my name is Mr. Obama
     *  But you can call me Barack.
     */

}