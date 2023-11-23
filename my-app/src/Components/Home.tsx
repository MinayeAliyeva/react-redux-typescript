import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Users from "./Users";
const Home = () => {
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
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Age"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  type="file"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <Button variant="primary">Submit</Button>{" "}
            </form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Users/>
    </section>
  );
};

export default Home;
