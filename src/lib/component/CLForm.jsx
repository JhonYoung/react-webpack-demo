import React from 'react';
import moment from 'moment';
import CLComponent from './CLComponent.jsx';
import { Table, Form, Row, Col, Input, Button, Icon, InputNumber, Select, DatePicker, RangePicker} from 'antd';
const FormItem = Form.Item;


class CLForm extends CLComponent {
 
  constructor (props) {
    super(props);
    this.bindCtx([
      
    ]);
  }

  getFields(operation) {
    const { getFieldDecorator } = this.props.form;
    debugger;
  }

  render() {
    // const { rowSelection,  columns, data, operation, pagination, pageChange, tableLoading} = this.props.settings;

    return (
      <div className="cl-form" key="cl-form">
        1234555
      </div>
    )
  }
}

// const ClList = Form.create()(CLForm);

export default CLForm;