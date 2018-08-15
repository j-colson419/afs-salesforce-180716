// Syntac for creating a list: List<type> var_name;
List<Integer> My_List;
List<Integer> My_List = new List<Integer>;
List<Integer> My_List = new List<Integer>{1, 2, 3, 4};

// Using array notation on 1-D lists
String[] colors = new List<string>();
List<String> colors = new String[1];
colors[0] = "Green";

// Sorting a list
List<String> colors = new List<String> {
    'Yellow',
    'Red',
    'Green'
}
colors.sort();

// Verify that the colors are in ascending order
System.assertEquals('Green', colors.get(0));
System.assertEquals('Red', colors.get(1));
System.assertEquals('Yellow', colors.get(2));