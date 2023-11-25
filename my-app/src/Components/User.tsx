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
  let exitingUser = courses.find((course: state) => course.id == id);
  return (
    <>
      {exitingUser ? (
        <div>
          <h1>{exitingUser.id}</h1>
        </div>
      ) : (
        <h1>Bele {id} li user yoxdu</h1>
      )}
    </>
  );
};

export default User;
