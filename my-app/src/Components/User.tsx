import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
const User = () => {
  interface state {
    name: string;
    age: number;
    id: string;
  }
  const { id } = useParams();
  console.log(id);
  const courses = useSelector((state: any) => state.courses.data);
  return (
    <>
      {courses
        .filter((course: state) => course.id === id)
        .map((course: state, index: number) => {
          return (
            <div key={index}>
              <h1>{course.name}</h1>
              <h1>{course.age}</h1>
              <h1>{course.id}</h1>
            </div>
             
          );
        })}
    </>
  );
};

export default User;
