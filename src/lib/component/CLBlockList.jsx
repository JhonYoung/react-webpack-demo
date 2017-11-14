import React from 'react';
import CLComponent from './CLComponent.jsx';
import { Row, Col, Card, Icon, Modal} from 'antd';

const gridStyle = {
  width: '33.33%',
  textAlign: 'left',
};

//由数据传入
const url = "http://cashlending-h5.oss-cn-beijing.aliyuncs.com/component/01.jpg?x-oss-process=style/.small";


function info(url) {
  Modal.info({
    title: 'show images',
    content: (
      <div>
        <img src={url} alt="images"/>
      </div>
    ),
    onOk() {},
  });
}

class CLBlockList extends CLComponent { 
  state = {
    showModal: false,
    url: url,
  }

  constructor (props) {
    super(props);
    this.bindCtx([
      "contentInfo"
    ]);
  }

  contentInfo (doc) {
    let that = this;
    if (doc.type === "text" || !doc.type) {
      return doc.content;
    }

    if (doc.type === 'img') {
      return (
        <img onClick={()=> {info(doc.content)}} src={doc.content} alt="images"/>
      )
    }
  }

  showModal (url) {
    this.setState({
      showModal: true,
      url: url
    });
  }

  handleCancel (that) {
    that.setState({
      showModal: false,
      url: ""
    });
  }

  render() {
    // const {data} = this.props.settings;
    let that = this;
    const data = [
      {
        title: "Name",
        content: "1868 3939 824",
        type: 'text',
        check: 'check-circle'
      },
      {
        title: "E-mail",
        content: "djsj@hdhd.com",
        type: 'text',
        check: 'check-circle'
      },
      {
        title: "Type of Document ID",
        content: "SSS",
        type: 'text',
        check: 'close-circle'
      },
      {
        title: "Document ID number",
        content: "000000100445",
        type: 'text',
      },
      {
        title: "FaceBookID",
        content: "John Ray",
        type: 'text',
        check: 'close-circle'

      },
      {
        title: "FaceBookIDs",
        content: url,
        type: 'img',
      },
      {
        title: "FaceBookIDs",
        content: "219 Tian Hua Er Lu, Wuhou Qu, Chengdu Shi, Sichuan Sheng, China219 Tian Hua Er Lu, Wuhou Qu, Chengdu Shi, Sichuan Sheng, China"
      }
    ]

    return (
      <Card className="cl-block-list" title={"test"}>
      {
        data.map( function (doc, index) {
          return (
            <Card.Grid key={`cl-block-list${index}`} style={gridStyle}>
              <Row>
                <Col span={8} className="block-title">
                  {doc.check ? (<Icon type={doc.check} />): ''} &nbsp;{doc.title}
                </Col>
                <Col span={16}>{that.contentInfo(doc)}</Col>
              </Row>
            </Card.Grid>
          )
        })
      }
      </Card>
    )
  }
}
export default CLBlockList;