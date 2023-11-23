import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Users from "./Users";
import { useState } from "react";
import { addCourse } from "../store/slices/FormSlice";
import { useDispatch, useSelector } from "react-redux";
//
//
const Home = () => {

  const dispatch = useDispatch();
  interface state {
    name: string;
    age: number;
  }
  const initialState: state = {
    name: "",
    age: 0,
  };
  const [state, setState] = useState(initialState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("k");
    dispatch(addCourse(state));
  };
  return (
    <section>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <h1 className="text-center">ADD FORM</h1>
            <form className="d-flex flex-column align-items-center ">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="User name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="name"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Age"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="age"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                />
              </InputGroup>
              {/* <InputGroup className="mb-3">
                <Form.Control
                  type="file"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup> */}
              <Button onClick={(e) => handleSubmit(e)} variant="primary">
                Submit
              </Button>{" "}
            </form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      {/* <Users /> */}
    </section>
  );
};

export default Home;
