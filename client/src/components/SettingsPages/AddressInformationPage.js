import React, { Component } from "react";
import {Form, Input, Row, Button, Card, Layout, Col,} from 'antd';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addressInfo} from "../../actions/userActions";

class BaseInformationPage extends Component {
  constructor() {
    super();
    this.state = {
      _id:"5ce96fffddf3f3272e0ffb5c",
      city: "",
      street: "",
      house: "",
      flat_number: "",
      address_index: "",
      house_index: "",
    };
  }



  onChange = e => {
    this.history.push('/home');
  };
  onSubmit = e => {
    const { form, addressInfo} = this.props;

    e.preventDefault();
    form.validateFields((err, values) => {
      addressInfo({
        ...values
      });
    });
  };
  render() {
    const { auth} = this.props;
    const {getFieldDecorator} = this.props.form;

    return (
      <Layout.Content>
        <Row type="flex" justify="center">
          <Col span={11}>
            <Card bordered={true}>
              <Form>
                <Form.Item>
                  <Row type="flex" justify="center" align="middle">
                    <span style={{fontSize: '30px'}}>User address settings</span>
                  </Row>
                </Form.Item>
                <Form.Item label="city:">
                  {getFieldDecorator('city', {
                    rules: [{required: true, message: 'Введите city!'}]
                  })(<Input placeholder={'city'}/>)}
                </Form.Item>
                <Form.Item label="street:">
                  {getFieldDecorator('street', {
                    rules: [{required: true, message: 'Введите street!'}]
                  })(<Input placeholder={'street'}/>)}
                </Form.Item>
                <Form.Item label="house:">
                  {getFieldDecorator('house', {
                    rules: [{required: true, message: 'Введите house!'}]
                  })(<Input placeholder={'house'}/>)}
                </Form.Item>
                <Form.Item label="flat_number:">
                  {getFieldDecorator('flat_number')(<Input placeholder={'flat_number'}/>)}
                </Form.Item>
                <Form.Item label="address_index:">
                  {getFieldDecorator('address_index')(<Input placeholder={'address_index'}/>)}
                </Form.Item>
                <Form.Item label="house_index:">
                  {getFieldDecorator('house_index')(<Input placeholder={'house_index'}/>)}
                </Form.Item>

                <Form.Item>
                  <Button type="primary" onClick={this.onSubmit}>
                    Register
                  </Button>
                  <Link to={'/login'}>
                    <Button type="default" style={{marginLeft: '8px'}} onClick={this.onChange}>
                      Cancel
                    </Button>
                  </Link>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Layout.Content>
    );
  }
}

BaseInformationPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  city: state.city,
  street: state.street,
  house: state.house,
  flat_number: state.flat_number,
  address_index: state.address_index,
  house_index: state.house_index,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addressInfo }
)(Form.create()(BaseInformationPage));