trigger RoundGrade on Grade__c (after update, after insert) {

    Map<Id, Grade__c> grades = Trigger.newMap;
    List<Grade__c> gradesToRound = new List<Grade__c>();

    for (Id i : grades.keySet()) {
        Decimal gradeValue = grades.get(i).grade__c;
        gradeValue = gradeValue.setScale(1, RoundingMode.HALF_UP);
        
        if (String.valueOf(gradeValue).length() > 4) {
            grades.get(i).grade__c = gradeValue = gradeValue.setScale(1);
            gradesToRound.add(grades.get(i));
        }

    }

    update gradesToRound;
}