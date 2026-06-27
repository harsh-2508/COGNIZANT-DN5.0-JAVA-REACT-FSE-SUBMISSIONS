
import React,{Component} from 'react';
import Post from '../Posts';

class Posts extends React.Component{
  constructor(props){
    super(props);
    
    this.state={
      posts: []
    }
  }
  loadPosts(){
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(data=>{
      const posts=data.map(post=>
        new Post(post.id,post.title,post.body)
      );
      this.setState({
        posts: posts
      });
    });
  }

  componentDidMount(){
    this.loadPosts()
  }
  render(){
    return(
      <div>
        <h1>blog posts</h1>
        {
          this.state.posts.map(post=>(
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <hr/>
            </div>
          ))
        }
      </div>
    )
  }
  componentDidCatch(error,info){
    // code
    alert(error);
    console.log(info);
  }
}
export default Posts;