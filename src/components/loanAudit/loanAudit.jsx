import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {CLComponent} from '../../../src/lib/component/index';
import CLList from '../../../src/lib/component/CLList.jsx';
import { CLAnimate } from '../../../src/lib/tools/index';
import { Interface } from '../../../src/lib/config/index';

import _ from 'lodash';
import { Button } from 'antd';

class LoanAudit extends CLComponent {
  state = {
    data: [1],
    selectedRowKeys: [],
    search: null,
    pagination: {
      total: 15
    },
    tableLoading: false
  }

  constructor (props) {
    super(props);
    this.bindCtx([
      "renderBody",
      "onSelectChange",
      "getFormFields",
      "check"
    ]);
  }

  componentDidMount() {
    CLAnimate.inAndOut(this);
  }

  onSelectChange = (selectedRowKeys) => { //勾选项
    this.setState({ selectedRowKeys });
  }

  getFormFields (fields) {
    this.setState({tableLoading: !this.state.tableLoading}) //正式去除

    let search = {};
    // _.map(fields, function (doc, index) {
    //   console.log(doc, "doc")
    //   console.log(index, "index")
    //   if (doc) {
    //     if (typeof(doc) === 'object') { //判断为时间对象
    //       search[index] = doc.format("YYYY-MM-DD HH:mm");
    //     } else {
    //       search[index] = doc;
    //     }
    //   }
    // })

    console.log(fields);
    console.log("=========================");
    this.setState({search: search});
  }

  check (data) { //点击按钮跳转
    let arr = location.hash.split('/');
    arr.pop();
    arr.push(`loanauditdetails/${data.id}`);
    let str = arr.join('/');
    location.hash = str;
    console.log(data);
  }

  pageChage (e) {//list 切换页面
    console.log(e);
    console.log('current page is ', e.current);
  }

  renderBody() {
    const { selectedRowKeys } = this.state;
    let that = this;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    const columns = [
      {
        title: 'No',
        dataIndex: 'No',
        sorter: (a, b) => a.No - b.No,
      }, 
      {
        title: 'User name',
        dataIndex: 'Username'
      },
      {
        title: 'Real name',
        dataIndex: 'Realname'
      },
      {
        title: 'Gender',
        dataIndex: 'Gender',
        filters: [
          {
            text: 'MALE',
            value: 'MALE',
          }, 
          {
            text: 'FEMALE',
            value: 'FEMALE',
          }
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.Gender.indexOf(value) === 0,
        sorter: (a, b) => a.Gender - b.Gender,
      },
      {
        title: 'City/District',
        dataIndex: 'CityDistrict'
      }, 
      {
        title: 'Evaluation status',
        dataIndex: 'EvaluationStatus'
      }, 
      {
        title: 'Assessor',
        dataIndex: 'Assessor'
      }, 
      {
        title: 'Date of Registration',
        dataIndex: 'DateOfRegistration',
        sorter: (a, b) => new Date(a.DateOfRegistration) - new Date(b.DateOfRegistration),
      },
      {
        title: 'Application time',
        dataIndex: 'ApplicationTime',
        sorter: (a, b) => new Date(a.ApplicationTime) - new Date(b.ApplicationTime),
      },
      {
        title: 'Operation ',
        dataIndex: 'Operation ',
        render: function (text, record) {
          return (<Button type="primary" onClick={()=> {that.check(record)}}>check</Button>)
        }
      }
    ];

    const data = [
      {
        No: '001',
        id: "001",
        Username: '8615240456341',
        Realname: "Jennifer L Te",
        Gender: "MALE",
        CityDistrict: "AGDANGAN",
        EvaluationStatus: "Rollback",
        Assessor: "manager",
        DateOfRegistration: "2017-10-15 17:43:54",
        ApplicationTime: "2017-11-09 11:33:48",
      }, 
      {
        No: '002',
        id: "002",
        Username: '8615240456341',
        Realname: "456 高新区 送水",
        Gender: "FEMALE",
        CityDistrict: "ADAMS",
        EvaluationStatus: "Rollback",
        Assessor: "manager",
        DateOfRegistration: "2017-10-24 20:18:43",
        ApplicationTime: "2017-11-09 11:25:32",
      },
      {
        No: '003',
        id: "003",
        Username: '8618683939824',
        Realname: "john ray 2050",
        Gender: "MALE",
        CityDistrict: "AGDANGAN",
        EvaluationStatus: "Rollback",
        Assessor: "manager",
        DateOfRegistration: "2017-10-25 11:05:39",
        ApplicationTime: "2017-10-29 15:34:31",
      },

      {
        No: '004',
        id: "004",
        Username: '8615240456341',
        Realname: " 彭 沧 旭",
        Gender: "FEMALE",
        CityDistrict: "ADAMS",
        EvaluationStatus: "Rollback",
        Assessor: "manager",
        DateOfRegistration: "2017-10-24 20:18:43",
        ApplicationTime: "2017-11-09 11:25:32",
      },
      {
        No: '005',
        id: "005",
        Username: '8618683939824',
        Realname: "john ray 2050",
        Gender: "FEMALE",
        CityDistrict: "ADAMS",
        EvaluationStatus: "PaySucess",
        Assessor: "manager",
        DateOfRegistration: "2017-10-24 20:18:43",
        ApplicationTime: "2017-11-09 11:25:32",
      },
      {
        No: '006',
        id: "006",
        Username: '8618683939824',
        Realname: "john ray 2050",
        Gender: "FEMALE",
        CityDistrict: "ADAMS",
        EvaluationStatus: "PaySucess",
        Assessor: "manager",
        DateOfRegistration: "2017-10-24 20:18:43",
        ApplicationTime: "2017-11-09 11:25:32",
      },
      {
        No: '007',
        id: "007",
        Username: '8618683939824',
        Realname: "john ray 2050",
        Gender: "FEMALE",
        CityDistrict: "ADAMS",
        EvaluationStatus: "PaySucess",
        Assessor: "manager",
        DateOfRegistration: "2017-10-24 20:18:43",
        ApplicationTime: "2017-11-09 11:25:32",
      },
      {
        No: '008',
        id: "008",
        Username: '8618683939824',
        Realname: "john ray 2050",
        Gender: "FEMALE",
        CityDistrict: "ADAMS",
        EvaluationStatus: "PaySucess",
        Assessor: "manager",
        DateOfRegistration: "2017-10-24 20:18:43",
        ApplicationTime: "2017-11-09 11:25:32",
      },
      {
        No: '009',
        id: "009",
        Username: '8618683939824',
        Realname: "john ray 2050",
        Gender: "FEMALE",
        CityDistrict: "ADAMS",
        EvaluationStatus: "PaySucess",
        Assessor: "manager",
        DateOfRegistration: "2017-10-24 20:18:43",
        ApplicationTime: "2017-11-09 11:25:32",
      },
      {
        No: '010',
        id: "010",
        Username: '8618683939824',
        Realname: "john ray 2050",
        Gender: "FEMALE",
        CityDistrict: "ADAMS",
        EvaluationStatus: "PaySucess",
        Assessor: "manager",
        DateOfRegistration: "2017-10-24 20:18:43",
        ApplicationTime: "2017-11-09 11:25:32",
      },
      {
        No: '011',
        id: "011",
        Username: '8618683939824',
        Realname: "john ray 2050",
        Gender: "FEMALE",
        CityDistrict: "ADAMS",
        EvaluationStatus: "PaySucess",
        Assessor: "manager",
        DateOfRegistration: "2017-10-24 20:18:43",
        ApplicationTime: "2017-11-09 11:25:32",
      },
      {
        No: '012',
        id: "012",
        Username: '8618683939824',
        Realname: "john ray 2050",
        Gender: "FEMALE",
        CityDistrict: "ADAMS",
        EvaluationStatus: "PaySucess",
        Assessor: "manager",
        DateOfRegistration: "2017-10-24 20:18:43",
        ApplicationTime: "2017-11-09 11:25:32",
      },
      {
        No: '013',
        id: "013",
        Username: '8618683939824',
        Realname: "john ray 2050",
        Gender: "FEMALE",
        CityDistrict: "ADAMS",
        EvaluationStatus: "PaySucess",
        Assessor: "manager",
        DateOfRegistration: "2017-10-24 20:18:43",
        ApplicationTime: "2017-11-09 11:25:32",
      },
      {
        No: '014',
        id: "014",
        Username: '8618683939824',
        Realname: "john ray 2050",
        Gender: "FEMALE",
        CityDistrict: "ADAMS",
        EvaluationStatus: "PaySucess",
        Assessor: "manager",
        DateOfRegistration: "2017-10-24 20:18:43",
        ApplicationTime: "2017-11-09 11:25:32",
      },
      {
        No: '015',
        id: "015",
        Username: '8618683939824',
        Realname: "john ray 2050",
        Gender: "FEMALE",
        CityDistrict: "ADAMS",
        EvaluationStatus: "PaySucess",
        Assessor: "manager",
        DateOfRegistration: "2017-10-24 20:18:43",
        ApplicationTime: "2017-11-09 11:25:32",
      },
    ];

    const operation = [
      {
        id: 'UserName',
        type: 'text',
        label: 'User name',
        formType: 'textarea',
        placeholder: 'Enter User Name'
      },
      {
        id: 'Gender',
        type: 'select',
        label: 'Gender',
        placeholder: 'Please select',
        options: [
          {
            name: "FEMALE",
            value: "FEMALE"
          },
          {
            name: "MALE",
            value: "MALE"
          },
        ]
      },
      {
        id: 'DateOfRegistration',
        type: 'rangePicker',
        label: 'Date of Registration',
        placeholder: 'ranger',
      },
      {
        id: 'EvaluationStatus',
        type: 'select',
        label: 'Evaluation status',
        options: [
          {
            name: "Registered",
            value: "Registered"
          },
          {
            name: "Applying",
            value: "Applying"
          },
          {
            name: "Approved",
            value: "Approved"
          },
          {
            name: "Rollback",
            value: "Rollback"
          },
          {
            name: "Refused",
            value: "Refused"
          },
          {
            name: "PaySucess",
            value: "PaySucess"
          },
          {
            name: "Finish",
            value: "Finish"
          },
          {
            name: "Pending",
            value: "Pending"
          },
          {
            name: "Locked for repayment",
            value: "LockedForRepayment"
          },
        ],
        placeholder: 'Please select',
      },
      {
        id: 'Auditor',
        type: 'text',
        label: 'Auditor',
        placeholder: 'Input assessor'
      }
    ];

    let settings = {
      data: data,
      columns: columns,
      rowSelection: rowSelection,
      operation: operation,
      getFields: that.getFormFields,
      pagination: that.state.pagination || {},
      pageChange: that.pageChage,
      tableLoading: that.state.tableLoading
    }

    return (
      <div className="loan-audit" key="loan-audit">
       <CLList settings={settings} />
      </div>
    )
  }

  render (data) {
    return (
      <QueueAnim className="animate-content" type={this.state.aniType}>
        {this.state.showBlock ? [ this.renderBody() ] : null}
      </QueueAnim>
    )
  }
}
export default LoanAudit;