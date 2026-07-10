package com.cognizant;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;




public class CalculatorTest {
  @Test
  void test_Addition_and_multiply(){
    Calculator calculator=new Calculator();
    assertEquals(5,calculator.add(2,3));

    assertEquals(6, calculator.multiple(2, 3));
  }

  @Test
  void test_assertions(){
    assertEquals(5, 2+3);
    assertTrue(5>3);
    assertFalse(5<3);
    assertNull(null);
    assertNotNull(new Object());
  }  
}
