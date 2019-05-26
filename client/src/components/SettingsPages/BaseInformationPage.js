import React, { Component } from "react";
import moment from 'moment';
import {Form, Input, Row, Button, Card, Layout, Col, DatePicker, Select, notification, Icon} from 'antd';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {baseInfo} from "../../actions/userActions";

class BaseInformationPage extends Component {

  render() {
    const { auth} = this.props;
    const {getFieldDecorator} = this.props.form;
    const dateFormat = 'DD-MM-YYYY';

    return (
      <Layout.Content>
        <Row type="flex" justify="center">
          <Col span={11}>
            <Card bordered={true}>
              <Form>
                <Form.Item>
                  <Row type="flex" justify="center" align="middle">
                    <span style={{fontSize: '30px'}}>Персональные данные</span>
                  </Row>
                </Form.Item>

                <Form.Item label="Имя:">
                  {getFieldDecorator('first_name', {
                    rules: [{required: true, message: 'Введите имя!'}]
                  })(<Input placeholder={'Введите имя'}/>)}
                </Form.Item>
                <Form.Item label="Фамилия:">
                  {getFieldDecorator('family', {
                    rules: [{required: true, message: 'Введите фамилию!'}]
                  })(<Input placeholder={'Введите фамилию'}/>)}
                </Form.Item>

                <Form.Item label="Отчество:">
                  {getFieldDecorator('second_name')(<Input placeholder={'Введите отчество'}/>)}
                </Form.Item>
                <Form.Item label="Национальность:">
                  {getFieldDecorator('national', {
                    rules: [{required: true, message: 'Укажите свою национальноасть!'}]
                  })(<Select
                    showSearch
                    initialValue={''}
                    placeholder="Укажите свою национальноасть"
                    optionFilterProp="children"
                  >
                    <Select.Option value="Русские / Russians">Русские / Russians</Select.Option>
                    <Select.Option value="Татары / Tatars">Татары / Tatars</Select.Option>
                    <Select.Option value="Украинцы / Ukrainians">Украинцы / Ukrainians</Select.Option>
                    <Select.Option value="Башкиры / Bashkirs">Башкиры / Bashkirs</Select.Option>
                    <Select.Option value="Чувашы / Chuvashs">Чувашы / Chuvashs</Select.Option>
                    <Select.Option value="Чеченцы / Chechens">Чеченцы / Chechens</Select.Option>
                    <Select.Option value="Армяне / Armenians">Армяне / Armenians</Select.Option>
                    <Select.Option value="Аварцы / Avars">Аварцы / Avars</Select.Option>
                    <Select.Option value="Мордвины / Mordvins">Мордвины / Mordvins</Select.Option>
                    <Select.Option value="0">Не знаю / I don't know</Select.Option>
                  </Select>)}
                </Form.Item>
                <Form.Item label="Дата рождения:">
                  {getFieldDecorator('birthday', {
                    rules: [{required: true, message: 'Введите дату рождения!'}]
                  })(
                    <DatePicker
                      style={{width:'100%'}}
                      placeholder="Укажите дату рождения"
                      format={dateFormat}
                      initialValue={''}
                    />
                  )}
                </Form.Item>

                <Form.Item label="Пол:">
                  {getFieldDecorator('gender', {
                    rules: [{required: true, message: 'Введите ваш пол!'}]
                  })(<Select
                    showSearch
                    placeholder="Укажите свой пол"
                    optionFilterProp="children"
                    initialValue={''}
                  >
                    <Select.Option value="1">Мужской</Select.Option>
                    <Select.Option value="0">Женский</Select.Option>
                  </Select>)}
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
    const { form, baseInfo, auth,history} = this.props;
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
      openNotification(err);
      baseInfo({
        id:auth.user.id,
        ...values
      });
    });
  };
}

BaseInformationPage.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { baseInfo }
)(Form.create()(BaseInformationPage));