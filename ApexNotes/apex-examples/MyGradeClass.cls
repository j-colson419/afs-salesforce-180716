// Example Class Definition

public class MyGradeClass {
    
    public String studentName;
    public Decimal gradeValue;
    public String className;
    String comments;

    public Boolean hasGrade() {
        Boolean gradeIsNotNull = (this.gradeValue != null);
        return gradeIsNotNull;
    }

    public void setComments(String c) {
        this.comments = c;
    }

    public String getComments() {
        return this.comments;
    }

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

    public String getLetterGrade() {
        Integer roundedValue = (Integer)(this.gradeValue / 10);
        roundedValue *= 10;
        switch on roundedValue {
            when 0, 10, 20, 30, 40, 40, 50 {
                return 'F';
            } when 60 {
                return 'D';
            } when 70 {
                return 'C';
            } when 80 {
                return 'B';
            } when else {
                return 'A';
            }
        }
    }

}