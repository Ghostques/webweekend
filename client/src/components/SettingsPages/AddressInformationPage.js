import React, { Component } from "react";
import {Form, Input, Row, Button, Card, Layout, Col, notification, Icon,} from 'antd';
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
                    <span style={{fontSize: '30px'}}>Контактные данные</span>
                  </Row>
                </Form.Item>
                <Form.Item label="Город:">
                  {getFieldDecorator('city', {
                    rules: [{required: true, message: 'Укажите город!'}]
                  })(<Input placeholder={'Город'}/>)}
                </Form.Item>
                <Form.Item label="Улица:">
                  {getFieldDecorator('street', {
                    rules: [{required: true, message: 'Укажите улицу!'}]
                  })(<Input placeholder={'Улица'}/>)}
                </Form.Item>
                <Form.Item label="Номер дома:">
                  {getFieldDecorator('house', {
                    rules: [{required: true, message: 'Укажите номер дома!'}]
                  })(<Input placeholder={'Номер дома'}/>)}
                </Form.Item>
                <Form.Item label="Номер квартиры:">
                  {getFieldDecorator('flat_number')(<Input placeholder={'Номер квартиры'}/>)}
                </Form.Item>
                <Form.Item label="Корпус:">
                  {getFieldDecorator('house_index')(<Input placeholder={'Корпус'}/>)}
                </Form.Item>
                <Form.Item label="Почтовый индекс:">
                  {getFieldDecorator('address_index')(<Input placeholder={'Почтовый индекс'}/>)}
                </Form.Item>
                <Form.Item>
                  <Button type="primary" onClick={this.onSubmit}>
                    Отправить анкету
                  </Button>
                  <Link to={'/login'}>
                    <Button type="default" style={{marginLeft: '8px'}}>
                      Назад
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
    const { form, addressInfo, auth, history} = this.props;
    const openNotification = (e) => {
      if (e===null) {
        notification.open({
          message: 'Оповещение',
          description:
            'Анкета успешно отправлена',
          icon: <Icon type="heart" style={{ color: '#108ee9' }} />,
        });
        history.push('/')
      }else return null
    };
    e.preventDefault();
    form.validateFields((err, values) => {
      openNotification(err)
      addressInfo({
        id:auth.user.id,
        ...values
      });
    });
  };
}

AddressInformationPage.propTypes = {
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