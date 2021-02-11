import './App.css';
import {Button, Col, Container, Nav, Navbar, Row} from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Navbar className={'main-nav'} variant={'dark'} expand={'lg'}>
        <Row className={'d-flex justify-content-between w-100'}>
          <Col lg={3} className={'d-flex justify-content-center align-items-center'}>
            <Nav.Link href={'#'} className={'text-left d-none d-lg-block'}>
              <img src="https://g.newsweek.com/img/weather/28.png" alt="" className="weather-icon" width="24"
                   height="24"/>
              <span className={'text-white'}><strong>&nbsp;&nbsp;47°</strong></span>
              <span className={'weather-country text-white'}><strong>Herriman, Ut</strong></span>
              <p className={'text-white'}>Wednesday, Feb 10, 2021</p>
            </Nav.Link>
          </Col>
          <Col className={'d-flex justify-content-center align-items-center'} lg={6} md={4}>
            <h1 className={'text-center text-white'}>Newsweek</h1>
          </Col>
          <Col lg={3} md={4} className={'d-flex justify-content-end align-items-center'}>
            <div className={'login-signup-btns'}>
              <Button variant={'link'} className={'text-white'}>Login</Button>
              <Button variant={'warning'}>Subscribe</Button>
            </div>
          </Col>
        </Row>
      </Navbar>
    </Container>
  );
}

export default App;
