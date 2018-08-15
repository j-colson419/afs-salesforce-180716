// Testing our example class
// (run in an Apex Anonymous Window)

MyGradeClass myGrade = new MyGradeClass();
myGrade.studentName = 'Jess';

System.debug(myGrade.studentName);
System.debug(myGrade.hasGrade());

// myGrade.comments = 'This is a comment'; <-- This will not work
myGrade.setComments('This is a comment');

// System.debug(myGrade.comments); <-- This will also not work
System.debug(myGrade.getComments());