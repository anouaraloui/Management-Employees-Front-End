import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { axiosInstance } from '../../../api';
import { Form, Modal } from 'antd';
import { isAuthenticated, setAuthToken } from '../../../Context/action';
import UpdateUser from '../Component/Update/EditUser';
import { updateUser } from '../AllActions/CRUDUsers';
import Data from '../Component/Data';

function UserProfile() {
  const [gridData, setGridData] = useState([])
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false)
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.userId;
  const id = userId;
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    if (isAuthenticated) {
      setAuthToken(token)
      console.log('token', token);
      setLoading(true)
      axiosInstance.get(`/users/${id}`).then((response) => {
        console.log('respons', response.data);
        setGridData(response.data);
        setLoading(false)
      })
    }
  }
  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState([]);
  const onEditUser = async (record) => {
    setEditingUser(record);
    setIsEditing(true);
  };

  const onOkEditing = async () => {
    const id = editingUser._id;
    updateUser(id, { ...editingUser, profile: file || editingUser?.profile || '' }).then(() => {
      loadData();
      setFile('');
    })
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingUser(null);
  };

  const modifiedData = gridData.map((item) => ({
    ...item,
    key: item._id
  }))

  return (
    <>
      <Form direction='verticale'>
      <Data 
        modifiedData={modifiedData}
        onEditUser={onEditUser}
        loading={loading}
        />
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
          <UpdateUser
            profile={editingUser?.profile}
            firstName={editingUser?.firstName}
            lastName={editingUser?.lastName}
            email={editingUser?.email}
            change={onEditUser}
          />
        </Modal>
      </Form>
    </>
  );
}

export default UserProfile;