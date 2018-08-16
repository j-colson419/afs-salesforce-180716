//Example 8
public class MyClass {
    public static String staticString;
    public String instanceString;
    
    static {
        System.debug('MyClass has been loaded');
    }
    
    {
        System.debug('I\'m in an instance block');
    }
    
    public static void logStaticString(){
        System.debug(staticString);
        //System.debug(instanceString); - won't work, because this method belongs to the class
    }
    
    public String getStaticString(){
        return staticString;
    }
    
    public void setStaticString(String s){
        staticString = s;
    }

}

    //this code goes in the Execute Anonymous block
    MyClass myVar = new MyClass();
    MyClass yourVar = new MyClass();
    myVar.setStaticString('This is MY static string.');
    String theString = yourVar.getStaticString();
    System.debug('theString now contains: ' + theString);

//Example 9
//Abstraction

//Animal Class
public abstract class Animal {
	public String type;
    public String name;
    public String color;
    
    {
        System.debug('Animal class has been intantiated');
    }
    
    static {
        System.debug('Animal class has been loaded');
    }
    
    abstract void speak();
    abstract void eat();
    
    public String getColor(){
        return this.color;
    }
    
}

//Cat Class
public virtual class Cat extends Animal {
	
    public Integer numOfPaws = 4;
    public static final Boolean isCute = true;
   	
    {
        this.type = 'Cat';
    }
    
    public void speak(){
        System.debug('Meow');
    }
    
    public void eat(){
        System.debug('eats tuna');
    }
    
}

//Dog Class
public class Dog extends Animal{
	
    public Integer numOfPaws = 4;
    public static final Boolean isNotACat = true;
    
    {
        this.type = 'Dog';
    }
    
    public void speak(){
        System.debug('Bark');
    }
    
    public void eat(){
        System.debug('eats kibble');
    }
}

//CalicoCat Clas
public class CalicoCat extends Cat {
	public static final String breed = 'Calico';
}

//Execute Anonymous Window
//Animal a = new Cat();
//System.debug(a.numOfPaws); - this doesn't work, the Animal class doesn't have visibility to this variable
Cat c = new Cat();
c.speak();
c.color = 'black';
System.debug(c.getColor());
Dog d = new Dog();
d.speak();
System.debug(Dog.isNotACat);

CalicoCat c = new Cat();
////////////////////////////////////////////////////////
//Interfaces
public interface MyInterface1 {
    void logGreeting();    
}

public interface MyInterface2 {
	void logFarewell();
}

public class MyInterfaceImplementor implements MyInterface1, MyInterface2 {

    public void logGreeting(){
        System.debug('Well Hello There');
    }
    
    public void logFarewell(){
        System.debug('Peace out, girlscout');
    }
    
}

//Example 10
//Constructor Chaining
public class ChainClass {
    public String stringVariable;

    public ChainClass(String s){
       this.stringVariable = s;
    }

    public ChainClass(){
        this('Some Default String');
        
    }
}

//Example 11
//super keyword
public virtual class SuperClass {
	public String mySalutation;
    public String myFirstName;
    public String myLastName;
    
    public SuperClass() {
        mySalutation = 'Miss';
        myFirstName = 'Jessica';
        myLastName = 'Colson';
    }
    
    public SuperClass(String sal, String fname, String lname) {
        mySalutation = sal;
        myFirstName = fname;
        myLastName = lname;
    }
    
    public virtual void printName() {
        System.debug('My name is ' + this.mySalutation + ' ' + this.myLastName);
    }
    
    public virtual String getFirstName(){
        return this.myFirstName;
    }
}

public class Subclass extends SuperClass {
    public override void printName() {
        super.printName();
        System.debug('But you can call me ' + super.getFirstName());
    }
}

//  execute anonymous code
Subclass s = new Subclass();
s.printName();




