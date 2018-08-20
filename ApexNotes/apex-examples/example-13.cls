public class GradeRound {

    public static Decimal roundedGrade(Decimal grade) {
        return grade.setScale(1, RoundingMode.HALF_UP);
    }

}