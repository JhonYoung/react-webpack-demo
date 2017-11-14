import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Interface } from '../../../src/lib/config/index';
import {CLComponent} from '../../../src/lib/component/index';
import CLBlockList from '../../../src/lib/component/CLBlockList.jsx';
import { CLAnimate } from '../../../src/lib/tools/index';
import { Button, Row, Col, Card, Table} from 'antd';


class LoanAuditDetails extends CLComponent {
  state = {
    data: [1],
    pagination: false
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
    const { selectedRowKeys } = this.state;
    // this.props.match.params
    let that = this;
    let data = {
      UserInfo: [
        {
          "title": "Application number",
          "info": 229
        },
        {
          "title": "Order number",
          "info": 123
        },
        {
          "title": "Application time",
          "info": "2017-11-10 20:15:46"
        },
        {
          "title": "Loan amount",
          "info": "3000"
        },
        {
          "title": "Payment term",
          "info": "7days"
        },

      ]
    }

    const gridStyle = {
      width: '20%',
      textAlign: 'center',
    };
    
    const columns1 = [
      {
        title: 'Repayment due time',
        dataIndex: 'RepaymentDueTime',
        key: 'RepaymentDueTime',
        width: "16%",
      }, 
      {
        title: 'Total payment',
        dataIndex: 'TotalPayment',
        key: 'TotalPayment',
        width: "16%",
      },
      {
        title: 'Total charge',
        dataIndex: 'TotalCharge',
        key: 'TotalCharge',
        width: "16%",
      },
      {
        title: 'Interest',
        dataIndex: 'Interest',
        key: 'Interest',
        width: "16%",
      },
      {
        title: 'Evaluation service fee',
        dataIndex: 'EvaluationServiceFee',
        key: 'EvaluationServiceFee',
        width:"16%",
      },
      {
        title: 'Account management fee',
        dataIndex: 'AccountManagementFee',
        key: 'AccountManagementFee',
      }
    ];

    let data1 = [
      {
        RepaymentDueTime: '2017-11-17',
        TotalPayment: '3210',
        TotalCharge: 360.00,
        Interest: '210',
        EvaluationServiceFee: '75',
        AccountManagementFee: '75',
      },
      {
        RepaymentDueTime: '2017-11-17',
        TotalPayment: '3210',
        TotalCharge: 360.00,
        Interest: '210',
        EvaluationServiceFee: '75',
        AccountManagementFee: '75',
      },
      {
        RepaymentDueTime: '2017-11-17',
        TotalPayment: '3210',
        TotalCharge: 360.00,
        Interest: '210',
        EvaluationServiceFee: '75',
        AccountManagementFee: '75',
      },
      {
        RepaymentDueTime: '2017-11-17',
        TotalPayment: '3210',
        TotalCharge: 360.00,
        Interest: '210',
        EvaluationServiceFee: '75',
        AccountManagementFee: '75',
      },
      {
        RepaymentDueTime: '2017-11-17',
        TotalPayment: '3210',
        TotalCharge: 360.00,
        Interest: '210',
        EvaluationServiceFee: '75',
        AccountManagementFee: '75',
      }
    ]

    return (
      <div className="loan-audit-details" key="loan-audit-details">
        <CLBlockList />
        <CLBlockList />

        <Table 
          title={() => (<h4>Charge Details</h4>)}
          bordered 
          size = "small"
          pagination = {this.state.pagination}
          className="cl-table" 
          scroll={{ y: 100 }}
          columns={columns1} 
          dataSource={data1} />
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
export default LoanAuditDetails;