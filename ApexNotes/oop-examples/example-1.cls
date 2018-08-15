// Example of Getters & Setters
public class myClass {

    public Integer myProp {
        get { return myProp; }
        set { myProp = value; }
    }

    public Integer readOnlyProp { get; }
    public Integer writeOnlyProp { set; }
    public Integer readWriteProp { get; set; }

    // Calling the get and set accessors
    public static createObject() {
        myClass c = new myClass();
        c.myProp = 5; // Calls the set accessor
        System.assertEquals(5, c.myProp); // Calls the get accessor
        Integer propValue = c.myProp // Also calls the get accessor

        c.readOnlyProp = 5;                 // This produces a compile error: not writable
        c.writeOnlyProp = 5;                // No error
        c.readWriteProp = 5;                // No error
        System.assertEquals(5, ap.writeOnlyProp);   // This produces a compile error: not readable
    }

}