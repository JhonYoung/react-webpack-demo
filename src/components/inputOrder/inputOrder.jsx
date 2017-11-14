import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { CLComponent } from '../../../src/lib/component/index';
import CLList from '../../../src/lib/component/CLList.jsx';
import { CLAnimate } from '../../../src/lib/tools/index';
import { Interface } from '../../../src/lib/config/index';
import _ from 'lodash';

class InputOrder extends CLComponent {
  state = {
    data: [1],
    selectedRowKeys: [],
    search: null
  }
  constructor (props) {
    super(props);
    this.bindCtx([
      "renderBody",
      "onSelectChange",
      "getFormFields"
    ]);
  }

  componentDidMount() {
    CLAnimate.inAndOut(this);
  }

  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  }

  getFormFields (fields) {
    let search = {};
    _.map(fields, function (doc, index) {
      if (doc) {
        if (typeof(doc) === 'object') { //判断为时间对象
          search[index] = doc.format("YYYY-MM-DD HH:mm");
        } else {
          search[index] = doc;
        }
      }
    })

    this.setState({search: search});
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
        title: 'Name',
        dataIndex: 'name',
        filters: [
          {
            text: 'Joe',
            value: 'Joe',
          }, 
          {
            text: 'Jim',
            value: 'Jim',
          }, 
          {
            text: 'Submenu',
            value: 'Submenu',
            children: [{
              text: 'Green',
              value: 'Green',
            }, {
              text: 'Black',
              value: 'Black',
            }],
          }
        ],
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
      }, 
      {
        title: 'Age',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
      }, 
      {
        title: 'Address',
        dataIndex: 'address',
        filters: [
          {
            text: 'London',
            value: 'London',
          }, 
          {
            text: 'New York',
            value: 'New York',
          }
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.address.indexOf(value) === 0,
        sorter: (a, b) => a.address.length - b.address.length,
      }
    ];

    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, 
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      }, 
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      }, 
      {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
      }
    ];

    let settings = {
      data: data,
      columns: columns,
      rowSelection: rowSelection,
      operation: [
        {
          id: 'startTime',
          type: 'dateTime',
          label: '开始时间',
          formType: 'textarea',
          placeholder: 'test',
        },
        {
          id: 'a',
          type: 'text',
          label: '结束时间',
          formType: 'textarea',
          placeholder: 'test'
        },
        {
          id: 'b',
          type: 'text',
          label: '结束时间',
          formType: 'textarea',
          placeholder: 'test'
        },
        {
          id: 'c',
          type: 'text',
          label: '结束时间',
          formType: 'textarea',
          placeholder: 'test'
        },
        {
          id: 'd',
          type: 'text',
          label: '结束时间',
          formType: 'textarea',
          placeholder: 'test'
        }
      ],
      getFields: that.getFormFields
    }

    return (
      <div className="inputOrder" key="faqs">
       <CLList settings={settings} />
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

export default InputOrder;