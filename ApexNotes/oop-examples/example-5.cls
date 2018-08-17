// Custom class with static and instance variables
public class MyClass {

    // Created when MyClass is loaded
    public static String staticString;

    //Created when each instance of MyClass is created
    public String instanceString;

    // This static block is run when MyClass is loaded
    static { System.debug('MyClass has been loaded'); }

    // This instance block is run on MyClass instantiation (before the constructor)
    { System.debug('I\'m an instance block'); }

    public static String logStaticString() {
        System.debug(MyClass.staticString);
        // System.debug(this.instanceString); <-- Won't work because this method belongs to the class instance
    }

    public String logInstanceString() {
        System.debug(MyClass.staticString); // <--+
        System.debug(this.instanceString);  // <--+-- Both will work from an instance method
    }

}