import { FC } from 'react'
import { Form, Input, Modal } from 'antd'
import Store from './Store'
import { useLocalObservable, observer } from 'mobx-react'

const LoginModal: FC = (props) => {
  const store = useLocalObservable(() => new Store())

  return (
    <Modal
      title="登录yapi以认证授权信息"
      visible={store.visible}
      onOk={store.handleLogin}
      onCancel={store.hideModal}
      okText="登录"
      cancelText="取消"
    >
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default observer(LoginModal)
