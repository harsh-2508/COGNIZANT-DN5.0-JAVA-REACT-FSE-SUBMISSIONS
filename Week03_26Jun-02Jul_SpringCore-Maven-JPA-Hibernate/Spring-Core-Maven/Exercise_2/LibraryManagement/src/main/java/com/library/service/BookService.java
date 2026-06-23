package com.library.service;
import com.library.repository.*;

public class BookService {
  private BookRepository bookRepository;

  public void setBookRepository(BookRepository bookRepository){ //setter injection
    this.bookRepository=bookRepository;
  }

  public void displayService(){
    System.out.println("Bookservice is working");
    bookRepository.displayRepository();
  }
}
