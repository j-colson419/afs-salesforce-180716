//Example 0.1
if (true) {
    System.debug(1);
    System.debug(2);
} else {
    System.debug(3);
    System.debug(4);
}

if (true)
    System.debug(1);
else
    System.debug(2);

//Example 0.2
//literal expression
1 + 1

//new sObject, Apex object, ...etc.
new Account(<field_initializers>)
new Integer[<n>]
new Account[]{<elements>}
new List<Account>()
new Set<String>{}
new Map<String, Integer>()

//any value that can acts as the left-hand side of an assignment operator
Integer i;
myList[3];
myContact.name;

//an SOQL query surrounded by []
Account[] aa = [SELECT Id, Name FROM Account WHERE Name='Acme'];

//a static or instance method invocation
System.assert(true);
changePoint(new Point(x,y));


//Example 1
//Declaring an sObject
Account a = new Account();
MyCustomObject__c co = new MyCustomObject__c();

//Example 1.1
//new keyword needs specific type
sObject s = new Account();

//casting from generic to specific
Account a = (Account)s;

//Example 1.2
//creating an sObject and initializing field values
Account a = new Account(Name = 'Acme', BillingCity = 'San Francisco');

//Example 2
//Enums
enum Season {Winter, Spring, Summer, Fall};
// Syntax: DataType var_name = EnumName.EnumValue;
Season e = Season.Winter;

//defining an enum class (do not use CLASS keyword)
public enum MyEnumClass {X,Y};

//Example 3
//Collections
//Example 3.1
//Lists
//  Syntax for creating a list: List<type> var_name;
List<Integer> My_List;
List<Integer> My_List = new List<Integer>();
List<Integer> My_List = new List<Integer>{1, 4, 5, 1};
//  Using array notation on 1-D lists
String[] colors = new List<String>();
List<String> colors = new String[1];
colors[0] = 'Green';
//  sorting a list
List<String> colors = new List<String>{
    'Yellow',
    'Red',
    'Green'
};
colors.sort();
//  verify that the colors are in ascending order in the list
System.assertEquals('Green', colors.get(0));
System.assertEquals('Red', colors.get(1));
System.assertEquals('Yellow', colors.get(2));

//Example 3.2
//Sets
Set<Integer> My_Set;
Set<Integer> My_Set = new Set<Integer>();
Set<Integer> My_Set = new Set<Integer>{3, 1, 2};
//  accessing elements in a set
Set<Integer> s = new Set<Integer>();
s.add(1);
System.assert(s.contains(1));
s.remove(1);

//Example 3.3
//Maps
Map<Integer, String> My_Map;
Map<Integer, String> My_Map = new Map<Integer, String>();
Map<Integer, String> My_Map = new Map<Integer, String>{1 => 'a', 2 => 'b', 3 => 'c'};
//  accessing elements 
Map<Integer, String> m = new Map<Integer, String>();
m.put(1, 'First Entry');
m.put(2, 'Second Entry');
System.assert(m.containsKey(1));
String value = m.get(2);
System.assertEquals('Second Entry', value);
Set<Integer> s = m.keySet(); //returns a set that contains all keys in Map m

//single line comment
/* this
is 
a 
multiline
comment
*/

//Example of creating a test class to run code with System.assert methods
@isTest
public class testClass0 {

    static testMethod void mapsExample(){
		Map<Integer, String> m = new Map<Integer, String>();
		m.put(1, 'First Entry');
		m.put(2, 'Second Entry');
		System.assert(m.containsKey(3));
		String value = m.get(2);
		System.assertEquals('Second Entry', value);
		Set<Integer> s = m.keySet();
    }
}

//Example 4
//defining a class
/*
    Syntax for defining a class

    private | public | global
    [virtual | abstract | with sharing | without sharing]
    class ClassName [implements InterfaceNameList] [extends ClassName]
    {
        //the body of the class
    }

*/
public class MyGradeClass {
	
    public String studentName;
    public Decimal gradeValue = 0;
    public String className;
    String comments;
    
    public Boolean hasGrade(){
        Boolean gradeIsNotNull = (this.gradeValue != null);
        return gradeIsNotNull;
    }
    
    public void setComments(String c){
        this.comments = c;
    }
    
    public String getComments(){
        return this.comments;
    }
    
}

//example of accesing and assigning public member variables using an instance of a class
MyGradeClass myGrade = new MyGradeClass();
myGrade.studentName = 'Jess';
//System.debug(myGrade.studentName);
//System.debug(myGrade.hasGrade());
//myGrade.comments = 'This is a comment';
myGrade.setComments('This is a comment');
//System.debug(myGrade.comments);
String c = myGrade.getComments();
System.debug(c);

//Example 5
// Passing Method Arguments
//  primitive data type arguments - pass by value
//      put this code in a class
public static void debugMessage(){
    MyGradeClass grade = new MyGradeClass();
    grade.gradeValue = 90;
    System.debug(grade.gradeValue);
    doThingsToGrade(grade.gradeValue);
    System.debug(grade.gradeValue);
}

public static void doThingsToGrade(Double g){
    g = 0;
}
//      put this code in Execute Anonymous Window
MyGradeClass.debugMessage();

//  non-primitive data type arguments - pass by reference
//      put this code in a class
public static void changeStudentName(MyGradeClass g){
        g.studentName = 'Mickey Mouse';
    }

//      put this code in the Execute Anonymous Window
MyGradeClass newGrade = new MyGradeClass();
newGrade.studentName = 'Donald Duck';
System.debug(newGrade.studentName);
MyGradeClass.changeStudentName(newGrade);
System.debug(newGrade.studentName);

//Example 6
//Properties
public class BasicProperty {
    public Integer prop {
        get {return prop;}
        set {prop = value;}
    }

    //below are examples of 'Automatic Properties'
    public Integer readOnlyProp{ private get; };
    public Integer writeOnlyProp{ set; };
    global Integer readWriteProp{ get; public set; };

}

//  calling get and set accessors
BasicProperty bp = new BasicProperty();
bp.prop = 5; //calls the set accessor
System.assertEquals(5, bp.prop); //calls the get accessor
Integer propValue = bp.prop; //also calls the get accessor

//Example 7
//Switch Statement
//  change gradeValue to be a property.
public Decimal gradeValue{
        get{ return gradeValue; }
        set{
            gradeValue = value;
            this.setLetterGrade();
        }
    }
//  define this method in the MyGradeClass class
public void setLetterGrade(){
        Integer roundedValue = (Integer)(this.gradeValue / 10);
        roundedValue *= 10;
        switch on roundedValue {
            when 50 {
                this.letterGrade = 'F';
            }
            when 60 {
                this.letterGrade = 'D';
            }
            when 70 {
                this.letterGrade = 'C';
            }
            when 80 {
                this.letterGrade = 'B';
            }
            when 90 {
                this.letterGrade = 'A';
            }
            when else {
                this.letterGrade = null;
            }
        }
    }

//  run this code in the execute anonymous window
MyGradeClass grade = new MyGradeClass();
System.debug(grade.letterGrade);
grade.gradeValue = 90;
System.debug(grade.letterGrade);

