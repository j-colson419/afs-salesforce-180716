if (expression) {
    // Reached when expression evaluates to true
    runIfStatement();
} else if (expression_2) {
    // Reached when expression_2 evaluates to true and expression evaluates to false
    runOtherStatement();
} else {
    // Reached when neither expression nor expression_2 evaluate to true
    runElseStatement();
}