// Passing Method Arguments
// primitive datatype argments - pass by value

public class MyGradeClass {
    
    public String studentName;
    public Decimal gradeValue;
    public String className;
    String comments;

    public static void debugGradeValue() {
        MyGradeClass g = new MyGradeClass();
        g.gradeValue = 90;
        System.debug(grade.gradeValue); // <-- will return '[14]|DEBUG|90'
        doThingsToGrade(g.gradeValue);
        System.debug(grade.gradeValue); // <-- will return '[16]|DEBUG|90'
    }

    public static void doThingsToGrade(Decimal g) {
        g = 0;
    }

    public static void debugStudentName() {
        MyGradeClass g = new MyGradeClass();
        g.studentName = 'Mickey Mouse';
        System.debug(grade.studentName); // <-- will return '[26]|DEBUG|Mickey Mouse'
        doThingsToName(g);
        System.debug(grade.gradeValue); // <-- will return '[28]|DEBUG|Donald Duck'
    }

    public static void doThingsToName(Grade g) {
        g.studentName = 'Donald Duck';
    }

}

