package Exercise_7;

public class Money_forecasting {
  public static double future_money(double current_money,double rate,int time){
    if(time==0){
      return current_money;
    }

    return future_money(current_money*(1+rate), rate, time-1);
  }

  public static void main(String[] args) {
    System.out.println(future_money(10000,0.10 , 3));
  }
}
