import React from 'react';
import { Collapse } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { CLComponent } from '../../../src/lib/component/index';
import { Lanuage, Interface } from '../../../src/lib/config/index';

import { CLAnimate } from '../../../src/lib/tools/index';

let {FAQS} = Lanuage.en;
const Panel = Collapse.Panel;

class FAQs extends CLComponent {
  state = {
    data: FAQS
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

  renderBody() {
    let {data} = this.state;
    return (
      <div className="FAQs" key="faqs">
        {
          data.map((question) => {
            return (
              <div key={`${question.title}`}>
                <div className="faqs-title"><span></span>{question.title}</div>
                <Collapse defaultActiveKey={['0']}>
                  {
                    question.list.map((doc, index) => {
                      return (
                        <Panel header= {`${index + 1}. ${doc.Qtitle}`} key={`question.title${index}`}>
                          <pre>{doc.answer}</pre>
                        </Panel>
                      )
                    })
                  }

                </Collapse>
              </div>
            )
          })
        }       
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

export default FAQs;