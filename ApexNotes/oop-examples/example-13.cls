// The Animal parent class can be found in the abstraction section
public class Cat extends Animal {

    public void speak() {
        System.debug('Meow!');
    }

    public void speak(int times) {
        for (int i = 0; i < times; i++) {
            System.debug('Meow!');
        }
    }

}