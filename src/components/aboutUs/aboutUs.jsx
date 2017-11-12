import React from 'react';
import Interface from '../../../src/interface/index.js';
import { Collapse } from 'antd';
import CLComponent from '../../../src/lib/component/CLComponent.jsx';
import Lanuage from '../../../src/lib/common.js';
import CLAnimate from '../../../src/lib/clAnimate.js';
import QueueAnim from 'rc-queue-anim';

let {Aboutus} = Lanuage.en;
const Panel = Collapse.Panel;
class AboutUs extends CLComponent {
  state = {
    Aboutus: Aboutus,
  }
   constructor (props) {
    super(props);
    this.bindCtx([
      "renderBody"
    ]);
  }

  componentDidMount() {
    CLAnimate.inAndOut(this);
  }

  renderBody () {
    let {desc, tips, logan} = this.state.Aboutus;
    return (
      <div className="about-us" key="about-us">
        <div className="about-us-title"> <h2>About us</h2> </div>
        <div className="cl-desc">
          <pre>
            {desc}
          </pre>
        </div>
        {
          tips.map((doc) => {
            return (
              <div key={`${doc.title}`} className="title-wrap">
                <div className="faqs-title"><span></span>{doc.title}</div>
                <pre>
                  {doc.details}
                </pre>
              </div>
            )
          })
        }
        <div className="logan">
          {logan}
        </div>      
      </div>
    )
  }

  render () {
    return (
      <QueueAnim className="animate-content" type={this.state.aniType}>
        {this.state.showBlock ? [ this.renderBody() ] : null}
      </QueueAnim>
    )
  }
}

export default AboutUs;