import React from 'react'
import Style from './index.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function index() {
  return (
  <>
  


<Container>
<div className={Style.cardTitle}>
        <h1>Find your next getaway</h1>
    </div>
      <Row className={Style.row}>
        <Col lg={4}><div className={Style.box}>
            <hr />
            <h4>Beach stays</h4>
            <p>Set up by the water</p>
            </div>
            </Col>
            <Col lg={4}><div className={Style.box}>
            <hr />
            <h4>Beach stays</h4>
            <p>Set up by the water</p>
            </div>
            </Col>
            <Col lg={4}><div className={Style.box}>
            <hr />
            <h4>Beach stays</h4>
            <p>Set up by the water</p>
            </div>
            </Col>
            <Col lg={4}><div className={Style.box}>
            <hr />
            <h4>Beach stays</h4>
            <p>Set up by the water</p>
            </div>
            </Col>
            <Col lg={4}><div className={Style.box}>
            <hr />
            <h4>Beach stays</h4>
            <p>Set up by the water</p>
            </div>
            </Col>
            <Col lg={4}><div className={Style.box}>
            <hr />
            <h4>Beach stays</h4>
            <p>Set up by the water</p>
            </div>
            </Col>
         

      </Row>
    </Container>
  </>
  )
}

export default index