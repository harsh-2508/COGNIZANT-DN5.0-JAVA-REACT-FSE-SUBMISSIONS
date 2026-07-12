import React,{Component} from "react";

import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

class LoginControl extends Component{
  constructor(props){
    super(props);

    this.state={
      isLoggedIn: false
    };
  }

  handleLogin=()=>{
    this.setState({
      isLoggedIn:true
    });
  }

  handleLogout=()=>{
    this.setState({
      isLoggedIn:false
    })
  }

  render(){
    if(this.state.isLoggedIn){
      return(
        <div>
          <UserPage/>
          <br/>
          <button onClick={this.handleLogout}>
            LogOut
          </button>
        </div>
      );
    }
    else{
      return(
        <div>
          <GuestPage/>
          <br/>
          <button onClick={this.handleLogin}>LogIn</button>
        </div>
      )
    }
  }


}

export default LoginControl;