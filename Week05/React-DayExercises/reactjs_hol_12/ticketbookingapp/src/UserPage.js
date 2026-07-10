import React,{Component} from "react";

class UserPage extends Component{
  render(){
    return(
      <div>
        <h2>User page</h2>

        <h4>Flight detail</h4>
        <ul>
          <li>bhopal- delhi</li>
          <li>bhopal-gurgaon</li>
          <li>bhopal=bangalore</li>
        </ul>

        <button>
          Book Ticket
        </button>
      </div>
    )
  }
}

export default UserPage;