import React, { Component } from "react";
import {Form, Input, Row, Button, Card, Layout, Col,} from 'antd';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {baseInfo} from "../../actions/userActions";

class BaseInformationPage extends Component {
  constructor() {
    super();
    this.state = {
      _id:"5ce96fffddf3f3272e0ffb5c",
      first_name: "",
      second_name: "",
      family: "",
      gender: "",
      national: "",
      errors: {}
    };
  }



  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    const { form, baseInfo} = this.props;

    e.preventDefault();
    form.validateFields((err, values) => {
      baseInfo({
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
                    <span style={{fontSize: '30px'}}>User settings</span>
                  </Row>
                </Form.Item>
                <Form.Item label="login:">
                  {getFieldDecorator('login', {
                    rules: [{required: true, message: 'Введите login!'}]
                  })(<Input placeholder={'login'}/>)}
                </Form.Item>
                <Form.Item label="first_name:">
                  {getFieldDecorator('first_name', {
                    rules: [{required: true, message: 'Введите first_name!'}]
                  })(<Input placeholder={'first_name'}/>)}
                </Form.Item>
                <Form.Item label="second_name:">
                  {getFieldDecorator('second_name', {
                    rules: [{required: true, message: 'Введите second_name!'}]
                  })(<Input placeholder={'second_name'}/>)}
                </Form.Item>
                <Form.Item label="family:">
                  {getFieldDecorator('family', {
                    rules: [{required: true, message: 'Введите family!'}]
                  })(<Input placeholder={'family'}/>)}
                </Form.Item>
                <Form.Item label="birthday:">
                  {getFieldDecorator('birthday', {
                    rules: [{required: true, message: 'Введите birthday!'}]
                  })(<Input placeholder={'birthday'}/>)}
                </Form.Item>

                <Form.Item label="gender:">
                  {getFieldDecorator('gender', {
                    rules: [{required: true, message: 'Please enter gender!'}]
                  })(<Input placeholder={'gender'}/>)}
                </Form.Item>
                <Form.Item label="national:">
                  {getFieldDecorator('national', {
                    rules: [{required: true, message: 'Please enter national!'}]
                  })(<Input placeholder={'national'}/>)}
                </Form.Item>


                <Form.Item>
                  <Button type="primary" onClick={this.onSubmit}>
                    Register
                  </Button>
                  <Link to={'/login'}>
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
}

BaseInformationPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  login: state.login,
  first_name: state.first_name,
  second_name: state.second_name,
  family: state.family,
  gender: state.gender,
  national: state.national,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { baseInfo }
)(Form.create()(BaseInformationPage));