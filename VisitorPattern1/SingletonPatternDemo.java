public class SingletonPatternDemo {
    public static void main(String[] args) {
        
        // Illegal construct: The constructor SingleObject() is not visible
        // Uncommenting the following line will result in a compile-time error
        // SingleObject object = new SingleObject();  // Compile-time error

        // Step 1: Get the only object available through the getInstance() method
        SingleObject object = SingleObject.getInstance();

        // Step 2: Call the showMessage() method on the singleton instance
        object.showMessage();
    }
}