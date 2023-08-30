import { message, Modal, Button } from 'antd';
import FormUpdateUser from './FormUpdateUser';
import { useState } from 'react';
import { axiosInstance } from '../../../api';
import { EditOutlined } from '@ant-design/icons';

function UpdateUser({ record, loadData }) {
  const [editingUser, setEditingUser] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [file, setFile] = useState();

  const onEditUser = async () => {
    setEditingUser(record);
    setIsEditing(true);
  };
  const onOkEditing = async () => {
    const id = editingUser._id;;
    await axiosInstance.put(`users/${id}`, { ...editingUser, profile: file || editingUser?.profile || '' })
      .then((response) => {
        message.success(response.data.message);
        setFile('');
        return loadData();
      }).catch((error) => {
        message.error(error.data.message);
      });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingUser(null);
  };
  const getNewData = (record) => { setEditingUser(record) };
  return (
    <>
      <Button onClick={() => {
        onEditUser();
      }} style={{ color: "green" }}>
        Edit
        <EditOutlined />
      </Button>
      <Modal
        style={{
          maxWidth: 400,
        }}
        title="Edit User"
        open={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
          setEditingUser([])
        }}
        onOk={() => {
          onOkEditing();
          resetEditing();
          setEditingUser([])
        }}
      >
        <FormUpdateUser
          profile={editingUser?.profile}
          firstName={editingUser?.firstName}
          lastName={editingUser?.lastName}
          email={editingUser?.email}
          role={editingUser?.role}
          building={editingUser?.building}
          change={getNewData}
        />
      </Modal>
    </>
  );
}

export default UpdateUser;