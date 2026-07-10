import React,{Component} from 'react';

class BlogDetails extends Component{
  render(){
    const blogs=[
      {
        id: 1,
                title: "React Basics"
      },
      {
        id: 2,
                title: "Spring Boot Guide"
      }
    ];

    return(
      <div>
        <h2>Blog details</h2>
        
        <ul>
          {
            blogs.map(blog=>{
              <li key={blog.id}>
                {blog.title}
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default BlogDetails;