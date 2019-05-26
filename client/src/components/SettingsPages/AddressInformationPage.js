import React, { Component } from "react";
import {Form, Input, Row, Button, Card, Layout, Col,} from 'antd';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addressInfo} from "../../actions/userActions";

class AddressInformationPage extends Component {

  render() {
    const { auth} = this.props; //todo make private layout for redirect to /login
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
                  <Link to={'/'}>
                    <Button type="default" style={{marginLeft: '8px'}}>
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
  onSubmit = e => {
    const { form, addressInfo, auth} = this.props;
    console.log(auth.user.id);
    e.preventDefault();
    form.validateFields((err, values) => {
      addressInfo({
        id:auth.user.id,
        ...values
      });
    });
  };
}

AddressInformationPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth

});

export default connect(
  mapStateToProps,
  { addressInfo }
)(Form.create()(AddressInformationPage));