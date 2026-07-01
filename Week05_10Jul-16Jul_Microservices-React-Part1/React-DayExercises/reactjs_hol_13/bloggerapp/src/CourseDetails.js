import React,{Component} from "react";

class CourseDetails extends Component{
  render(){
    const courses=[
      {
                id: 1,
                name: "Java Full Stack"
            },
            {
                id: 2,
                name: "React Development"
            }
    ];

    return(
      <div>
        <h2>course details</h2>
      <ul>
        {
          courses.map(course=>(
            <li key={course.id}>
              {course.name}
            </li>
          ))
        }
      </ul>
      </div>
      
    )
  }
}

export default CourseDetails;