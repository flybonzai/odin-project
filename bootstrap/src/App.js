import "./App.css";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";

function App() {
  return (
    <Container>
      <Navbar className={"main-nav"} variant={"dark"} expand={"lg"}>
        <Row className={"d-flex justify-content-between w-100"}>
          <Col
            lg={3}
            className={"d-flex justify-content-center align-items-center"}
          >
            <Nav.Link href={"#"} className={"text-left d-none d-lg-block"}>
              <img
                src="https://g.newsweek.com/img/weather/28.png"
                alt=""
                className="weather-icon"
                width="24"
                height="24"
              />
              <span className={"text-white"}>
                <strong>&nbsp;&nbsp;47°</strong>
              </span>
              <span className={"weather-country text-white"}>
                <strong>Herriman, Ut</strong>
              </span>
              <p className={"text-white"}>Wednesday, Feb 10, 2021</p>
            </Nav.Link>
          </Col>
          <Col
            className={"d-flex justify-content-center align-items-center"}
            lg={6}
            md={4}
          >
            <h1 className={"text-center text-white"}>Newsweek</h1>
          </Col>
          <Col
            lg={3}
            md={4}
            className={"d-flex justify-content-end align-items-center"}
          >
            <div className={"login-signup-btns"}>
              <Button variant={"link"} className={"text-white"}>
                Login
              </Button>
              <Button variant={"warning"}>Subscribe</Button>
            </div>
          </Col>
        </Row>
      </Navbar>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link className={"secondary-nav-item border-right"} href={"#"}>
              U.S.
            </Nav.Link>
            <Nav.Link className={"secondary-nav-item border-right"} href={"#"}>
              World
            </Nav.Link>
            <Nav.Link className={"secondary-nav-item border-right"} href={"#"}>
              Business
            </Nav.Link>
            <Nav.Link className={"secondary-nav-item border-right"} href={"#"}>
              Tech &amp Science
            </Nav.Link>
            <Nav.Link className={"secondary-nav-item border-right"} href={"#"}>
              Culture
            </Nav.Link>
            <Nav.Link className={"secondary-nav-item"} href={"#"}>
              Newsgeek
            </Nav.Link>
            <Nav.Item>
              <Form className={"form-inline"}>
                <Form.Control
                  className={"mr-2"}
                  type="input"
                  placeholder="Search"
                />
                <Form.Label>
                  <i className="fas fa-search"></i>
                </Form.Label>
              </Form>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row className="m-1 main-content">
        <Col className="col-lg-4">
          <h5>Featured Stories</h5>
          <img src={"https://source.unsplash.com/random"} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
            quis varius quam quisque. Blandit cursus risus at ultrices mi tempus
            imperdiet nulla malesuada.
          </p>
          <img src={"https://source.unsplash.com/random"} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
            quis varius quam quisque. Blandit cursus risus at ultrices mi tempus
            imperdiet nulla malesuada.
          </p>
          <img src={"https://source.unsplash.com/random"} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
            quis varius quam quisque. Blandit cursus risus at ultrices mi tempus
            imperdiet nulla malesuada.
          </p>
        </Col>
        <Col className="col-lg-5">
          <h5>Top Story</h5>
          <img src={"https://source.unsplash.com/random"} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
            quis varius quam quisque. Blandit cursus risus at ultrices mi tempus
            imperdiet nulla malesuada.
          </p>
          <h5>My Turn</h5>
          <Row>
            <Col>
              <img src={"https://source.unsplash.com/random"} />
              <p>At 23, I discovered I had a secret sister!</p>
            </Col>
            <Col>
              <img src={"https://source.unsplash.com/random"} />
              <p>At 23, I discovered I had a secret sister!</p>
            </Col>
            <Col>
              <img src={"https://source.unsplash.com/random"} />
              <p>At 23, I discovered I had a secret sister!</p>
            </Col>
          </Row>
          <img src={"https://source.unsplash.com/random"} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
            quis varius quam quisque. Blandit cursus risus at ultrices mi tempus
            imperdiet nulla malesuada.
          </p>
          <img src={"https://source.unsplash.com/random"} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
            quis varius quam quisque. Blandit cursus risus at ultrices mi tempus
            imperdiet nulla malesuada.
          </p>
        </Col>
        <Col className="col-lg-3">
          <h5>The Debate</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
