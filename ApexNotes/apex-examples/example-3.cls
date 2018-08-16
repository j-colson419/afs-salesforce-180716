// Declaring an sObject
Account a = new Account();
MyCustomObject__c co = MyCustomObject__c();

// new keyword needs specific type
sObject s = new Account();

// Casting from generic to specific
Account a = (Account) s;

// Creating an sObject and initializin field values
Account a = new Account(Name = 'Acme', BillingCity = 'San Francisco');