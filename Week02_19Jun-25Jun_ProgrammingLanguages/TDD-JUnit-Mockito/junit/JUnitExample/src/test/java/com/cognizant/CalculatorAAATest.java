package com.cognizant;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorAAATest {

  Calculator calculator;
  @BeforeEach
  void setUp(){
    System.out.println("setting up...");
    calculator=new Calculator();
  }
  
  @AfterEach
  void tearDown(){
    System.out.println("clean or stop things up ...");
    calculator=null;
  }

  @Test
  void testAddition(){
    //arange
    int a=10;
    int b=20;

    //act
    int result=calculator.add(a,b);

    //assert
    assertEquals(30,result);
  }

  @Test
  void testMultiplication(){

    //arrange
    int a=5;
    int b=6;

    //act
    int result=calculator.multiple(a, b);

    //assert
    assertEquals(30, result);
  }


}
