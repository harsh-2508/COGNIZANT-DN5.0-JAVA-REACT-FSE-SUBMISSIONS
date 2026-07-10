

public class SingletonTest{

  public static void main(String[] args) {
    Logger logger1=Logger.getInstance();
    Logger logger2=Logger.getInstance();

    logger1.log("Application Started for the first time");
    logger2.log("User logged in already");

    System.out.println(logger1==logger2);

  }
}