import React from 'react';
import { Row, Col, Card} from 'antd';

class NotFound extends React.Component {
  render () {
    return (
      <div>
        <Row>
          <Col span={20} offset={3}>
            404
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={3}>
            not found this page
          </Col>
        </Row>
      </div>
    )
  }
}

export default NotFound;