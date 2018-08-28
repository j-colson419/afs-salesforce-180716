List<List<sObject>> searchList = [FIND 'map*' IN ALL FIELDS RETURNING Account(Id, Name), Contact, Opportunity, Lead];

Account[] accounts = ( (List<Account>)searchList[0] );
Contact[] contacts = ( (List<Contact>)searchList[1] );