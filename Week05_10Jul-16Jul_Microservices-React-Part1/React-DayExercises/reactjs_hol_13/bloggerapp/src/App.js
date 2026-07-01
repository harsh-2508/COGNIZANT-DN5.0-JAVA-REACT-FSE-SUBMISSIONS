import { Component } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      showBook:true,
      showBlog:false,
      showCourse:true
    };
  }

  render(){

    // method -> 1: if-else
      let component;
    if(this.state.showBook){
      component=<BookDetails/>
    }
    else{
      component=<BlogDetails/>
    }
    return(
      <div>
        <h2>Blogger App</h2>
        {/* method-1 if else */}
        {component}
        <hr/>

        {/* method-2 logical && */}
        {this.state.showCourse && <CourseDetails/>}
        <hr/>

        {/* method-3 ternary operator */}
        {
          this.state.showBlog ? <BlogDetails/> : <h3>Blog component hidden</h3> 
        }

      </div>
    )
  }
}

export default App;
