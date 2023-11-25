// Users.tsx

import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Users = () => {
  const courses = useSelector((state: any) => state.courses.data);
  interface State {
    name: string;
    age: number;
    id: string;
  }
  return (
    <div className="users">
      {courses.map((course: State, index: number) => (
        <div className="user" key={index}>
          <h1>{course.name}</h1>
          <h1>{course.age}</h1>
          <Link to={`/user/${course.id}`} className="detail">
            detail
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
