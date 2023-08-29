import { Form, Select, Input } from 'antd';
import avatarDefault from '../../../../assets/avatar.jpg'
import jwtDecode from 'jwt-decode';
import { optionBuilding, optionsRole } from '../../OptionSelect/optionsSelect';
import convertToBase64 from '../../../ConvertImage';
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
function FormUpdateUser({ change, profile, firstName, lastName, email, role, building }) {
  const [form] = Form.useForm();
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    change((pre) => {
      return { ...pre, profile: base64 || profile || '' };
    });

  }
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const RoleUser = decodedToken.role;
  return (
    <>
      {RoleUser === 'Super Admin' ?
        <Form
          form={form}
          {...formItemLayout}
          style={{
            maxWidth: 600,
          }}>
          <Form.Item label='Avatar' >

            <div className='profile flex justify-center py-4'>
              <label htmlFor="profile">

                <img src={'' || profile || avatarDefault} alt="avatar" width={"100px"} />
              </label>

              <input onChange={onUpload} type="file" id='profile' name='profile' accept='.jpeg, .png, .jpg'
              />
            </div>

          </Form.Item>
          <Form.Item label='First Name'
          >
            <Input
              value={firstName}
              onChange={(e) => {
                change((pre) => {
                  return { ...pre, firstName: e.target.value };
                });
              }}
            />
          </Form.Item>
          <Form.Item label='Last Name' >
            <Input
              value={lastName}
              onChange={(e) => {
                change((pre) => {
                  return { ...pre, lastName: e.target.value };
                });
              }}
            />
          </Form.Item>
          <Form.Item label='Email'>
            <Input
              value={email}
              onChange={(e) => {
                change((pre) => {
                  return { ...pre, email: e.target.value };
                });
              }}
            />
          </Form.Item>
          <Form.Item label='Role'>
            <Select placeholder="Software Engineer"
              value={role}
              onChange={(value) => {
                change((pre) => {
                  return { ...pre, role: value };
                });
              }}
              options={optionsRole}
            />
          </Form.Item>
          <Form.Item label='Building'>
            <Select placeholder="Front-End"
              value={building}
              onChange={(value) => {
                change((pre) => {
                  return { ...pre, building: value };
                });
              }}
              options={optionBuilding}
            />
          </Form.Item>
        </Form>
        :
        <Form
          form={form}
          {...formItemLayout}
          style={{
            maxWidth: 600,
          }}>
          <Form.Item label='Avatar' >

            <div className='profile flex justify-center py-4'>
              <label htmlFor="profile">

                <img src={'' || profile || avatarDefault} alt="avatar" width={"100px"} />
              </label>

              <input onChange={onUpload} type="file" id='profile' name='profile' accept='.jpeg, .png, .jpg' />
            </div>

          </Form.Item>
          <Form.Item label='First Name'
          >
            <Input
              value={firstName}
              onChange={(e) => {
                change((pre) => {
                  return { ...pre, firstName: e.target.value };
                });
              }}
            />
          </Form.Item>
          <Form.Item label='Last Name' >
            <Input
              value={lastName}
              onChange={(e) => {
                change((pre) => {
                  return { ...pre, lastName: e.target.value };
                });
              }}
            />
          </Form.Item>
          <Form.Item label='Email'>
            <Input
              value={email}
              onChange={(e) => {
                change((pre) => {
                  return { ...pre, email: e.target.value };
                });
              }}
            />
          </Form.Item>
        </Form>
      }
    </>
  );
}

export default FormUpdateUser;