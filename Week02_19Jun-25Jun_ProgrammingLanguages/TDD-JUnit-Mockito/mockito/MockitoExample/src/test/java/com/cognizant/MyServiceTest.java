package com.cognizant;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;


public class MyServiceTest {
  @Test
  void testExternalApi(){
    //arrange
    ExternalApi mockApi=mock(ExternalApi.class);
    when(mockApi.getData()).thenReturn("Mock Data");
    MyService service=new MyService(mockApi);

    //act
    String result=service.fetchData();

    //assert
    assertEquals("Mock Data",result);
  }

  @Test
  void testFetchDataCallsExternalApi(){
     //arrange
    ExternalApi mockApi=mock(ExternalApi.class);
    MyService service=new MyService(mockApi);
    //act
    service.fetchData();
    //assert
    verify(mockApi).getData();

  }
}
