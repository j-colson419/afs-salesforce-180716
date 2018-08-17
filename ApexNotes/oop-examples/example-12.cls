// The Animal parent class can be found in the abstraction section
public class Cat extends Animal {

    public override void move() {
        System.debug(String.format('MEOW! {0} is moving', this.name));
    }

}