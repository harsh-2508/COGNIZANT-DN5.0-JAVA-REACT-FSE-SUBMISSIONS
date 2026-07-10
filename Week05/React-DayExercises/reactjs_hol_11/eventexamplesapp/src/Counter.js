import react,{Component} from 'react';

class Counter extends Component{

  constructor(props){
    super(props);
    this.state={
      count: 5
    };
  }

  increment=()=>{
    this.setState({
      count : this.state.count+1
    });

    this.sayHello();
  }

  decrement=()=>{
    this.setState({
      count: this.state.count-1
    });
  }

  sayHello=()=>{
    alert("Hello")
  }

  sayWelcome=(msg)=>{
    alert(msg);
  }

  clickOnMe=()=>{
    alert("I was clicked")
  }

  render(){
    return(
      <div>
        <h3>{this.state.count}</h3>

        <button onClick={this.increment}>
          Increment
        </button>

        <br/><br/>

        <button onClick={this.decrement}>
          Decrement
        </button>
        <br/>

        <button onClick={()=>this.sayWelcome("Welcome")}>
          Say Welcome
        </button>

        <br/><br/>
        <button onClick={this.clickOnMe}>
          Click On Me
        </button>
      </div>
    )
  }
}

export default Counter;