import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Users = () => {
  const courses = useSelector((state: any) => state.courses.data);
  console.log(courses);
  interface state {
    name: string;
    age: number;
  }
  return (
    <div className="users">
      {courses.map((course: state, id: string) => {
        return (
          <div className="user" key={id}>
            <h1>{course.name}</h1>
            <h1>{course.age}</h1>
            <Link to={`/user/${id}`} className="detail">
              detail
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
