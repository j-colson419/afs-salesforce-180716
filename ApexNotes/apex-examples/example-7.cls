// Defining Maps
Map<Integer, String> My_Map;
Map<Integer, String> My_Map = new Map<Integer, String>();
Map<Integer, String> My_Map = new Map<Integer, String>{1 => 'a', 2 => 'b', 3 => 'c'};

// Accessing elements
Map<Integer, String> m = new Map<Integer, String>();
m.put(1, 'First Entry');
m.put(2, 'Second Entry');
System.assert(m.containsKey(1));
String value = m.get(2);
System.assert('Second Entry', value);
Set<Integer> s = m.keySet();