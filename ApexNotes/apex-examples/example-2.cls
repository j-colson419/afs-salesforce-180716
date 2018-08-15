// Literal expression
1 + 1

// New sObject, Apex Object, ...etc.
new Account(<field_initializers>)
new Integer[<n>]
new Account[]{<element>}
new List<Account>()
new Set<String>{}
new Map<String, Integer>()

// An value that can ct as the left-hand side of an assignmen operator
Integer i;
myList[3];
myContact.name;

// an SOQL query surrounded by []
Account[] aa = [SELECT Id, Name FROM Account WHERE Name='Acme'];

// A static or instance method invocation
System.assert(true);
changePoint(new Point(x,y));