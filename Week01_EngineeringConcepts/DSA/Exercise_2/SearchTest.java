package Exercise_2;

public class SearchTest {
  static Product[] products={
    new Product(1001,"laptop","electronics"),
    new Product(1002,"phone","electronics"),
    new Product(1003,"shoe","fashion"),
    new Product(1004, "watch", "fashion"),
    new Product(1005, "cooker", "kitchen"),
  };

  public static void main(String[] args) {
    Product p1 = LinearSearch.search(products, 1004);
    if(p1!=null){
      System.out.println("linear search: " + p1.productName);
    }

    Product p2 = BinarySearch.search(products, 1002);
    if(p2!=null){
      System.out.println("binary search: " + p2.productName);
    }
  }
}
