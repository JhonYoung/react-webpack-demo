import React from 'react';
import moment from 'moment';
import CLComponent from './CLComponent.jsx';
import { Table, Form, Row, Col, Input, Button, Icon, InputNumber, Select, DatePicker, RangePicker} from 'antd';
const FormItem = Form.Item;


class CLList extends CLComponent {
  state = {
    pagination: {
      total: 85,
      pageSize: 15,
      defaultCurrent: 1,
      showSizeChanger: true,
      showQuickJumper : true,
      size: "default"
    } 
  }

  constructor (props) {
    super(props);
    this.bindCtx([
      "onSelectChange",
      "handleSearch",
      "handleReset",
      "getFields"
    ]);
  }

  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  }

  handleSearch = (e) => { //点击搜索按钮，把form数组传入到父级组件中
    e.preventDefault();
    let that = this;
    this.props.form.validateFields((err, values) => {
      that.props.settings.getFields(values);
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  getFields(operation) {
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    const children = [];
    let formItem;
    const { getFieldDecorator } = this.props.form;

    for (let i = 0; i < operation.length; i++) {
      switch(operation[i].type) {
        case 'text':
          formItem = (
            <FormItem {...formItemLayout} label={`${operation[i].label}`}>
              {getFieldDecorator(`${operation[i].id}`)(
                <Input placeholder={`${operation[i].placeholder}`}/>
              )}
            </FormItem>
          );
          break;
        case 'number':
          formItem = (
            <FormItem {...formItemLayout} label={`${operation[i].label}`}>
              {getFieldDecorator(`${operation[i].id}`)(
                <InputNumber placeholder={`${operation[i].placeholder}`}/>
              )}
            </FormItem>
          );
          break;

        case 'select':
          formItem = (
            <FormItem {...formItemLayout} 
            label={`${operation[i].label}`}
            hasFeedback
            > 
              {getFieldDecorator(`${operation[i].id}`)(
                <Select mode={operation[i].mode}>
                  {
                    operation[i].options.map(function (doc, index) {
                      return (<Select.Option key={`${doc.id}${index}`} value={doc.value.toString()}>{doc.name}</Select.Option>)
                    })
                  }
                </Select>
              )}
              
            </FormItem>
          );
          break;

        case 'dateTime':
          formItem = (
            <FormItem {...formItemLayout} label={`${operation[i].label}`}>
              {getFieldDecorator(`${operation[i].id}`)(
                <DatePicker label={operation[i].placeholder}  format="YYYY/MM/DD HH:mm"/>
              )}
            </FormItem>
          );
          break;

        case 'rangePicker':
          formItem = (
            <FormItem {...formItemLayout} label={`${operation[i].label}`}>
              {getFieldDecorator(`${operation[i].id}`)(
                <DatePicker.RangePicker
                  showTime
                  ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                  format="YYYY/MM/DD HH:mm"
                />
              )}
            </FormItem>
          );
          break;
      }
      children.push(<Col span={8} key={i} style={{ display: 'block'}}>{formItem}</Col>);
    }
    return children;
  }

  

  render() {
    const { rowSelection,  columns, data, operation, pagination, pageChange, tableLoading} = this.props.settings;

    return (
      <div className="cllist" key="cllist">
        <Form
            className="ant-advanced-search-form cl-form"
            onSubmit={this.handleSearch}
          >
          <Row gutter={2}>{this.getFields(operation)}</Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">Search</Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                Clear
              </Button>
            </Col>
          </Row>
        </Form>
        <Table 
        id="cl-table"
        bordered 
        size="small" 
        rowSelection={rowSelection} 
        pagination={Object.assign(this.state.pagination, pagination)}
        columns={columns} 
        dataSource={data}
        onChange={pageChange}
        loading={tableLoading}
        className="cl-table"  
        rowKey="id"/>
      </div>
    )
  }
}

const ClList = Form.create()(CLList);

export default ClList;

/****** form example

 operation: [
   {
     id: 'usermobile',
     type: 'select',
     label: '用户查询',
     formType: 'textarea',
     placeholder: 'test',
     mode: "multiple",
     options: [
       {
         name: 1,
         value: 1
       },
       {
         name: "jhonyoung",
         value: "webdeveloper"
       },
     ]
   },
   {
     id: 'usermobile',
     type: 'text',
     label: '用户查询',
     formType: 'textarea',
     placeholder: 'test',
     mode: "multiple",
     options: [
       {
         name: 1,
         value: 1
       },
       {
         name: "jhonyoung",
         value: "webdeveloper"
       },
     ],

     fn: function (event) {
       return that.statusChange(event);
     }
   }
 ]

*/