import React,{Component} from "react";

class BookDetails extends Component{
  render(){
    const books=[{
      id:1,
      name:"Java Programming",
      price:550
    },{
      id:2,
      name:"React Guide",
      price:600
    }];

    return(
      <div>
        <h2>Book Details</h2>
        <ul>
          {
          books.map(book=>(
            <li key={book.id}>{book.name}- Rs,{book.price}</li>
          ))
        }
        </ul>
      </div>
    )
  }
}

export default BookDetails;