// The Animal parent class can be found in the abstraction section
public class Dog extends Animal {

    public int numOfPaws = 4;
    public static final boolean isFun = true;

    {
        animal_type = 'Dog';
    }

    public Dog(String name) {
        this.name = name;
    }

    void speak() {
        System.debug('Ruff!');
    }

    void eat() {
        System.debug('Nom, nom, nom!');
    }

}