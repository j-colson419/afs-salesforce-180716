// This class cannot be instantiated because it is abstract
public virtual abstract class Animal {

    public string animal_type;
    public string name;
    public string color;

    abstract void speak();
    abstract void eat();

    abstract { System.debug('The animal class has been loaded'); }
    { System.debug('The animal instance has been instantiated'); }

    public void move() {
        System.debug(this.name + ' is moving!');
    }

    public string getColor() {
        return this.color;
    }

}