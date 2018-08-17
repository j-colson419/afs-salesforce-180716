// The Animal parent class can be found in the abstraction section
public class Cat extends Animal {

    public int numOfPaws = 4;
    public static final boolean isCute = true;

    {
        animal_type = 'Cat';
    }

    public Cat(String name) {
        this.name = name;
    }

    void speak() {
        System.debug('Meow!');
    }

    void eat() {
        System.debug('Yum!');
    }

}