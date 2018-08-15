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

}