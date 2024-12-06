public class SingleObject {
    // Step 1: Create an object of SingleObject
    private static SingleObject instance = new SingleObject();
    
    // Step 2: Make the constructor private so that this class cannot be instantiated directly
    private SingleObject() {
        // Private constructor to prevent instantiation
    }
    
    // Step 3: Provide a global access point to the instance
    public static SingleObject getInstance() {
        return instance;
    }
    
    // Step 4: A sample method to demonstrate the singleton functionality
    public void showMessage() {
        System.out.println("Hello World!");
    }
}
