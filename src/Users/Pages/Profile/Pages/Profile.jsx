import { useRef, useEffect, useState } from 'react';
import { axiosInstance } from '../../../api';
import { SearchOutlined, DeleteOutlined, EditOutlined, PlusCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Space, Table, Button, DatePicker, Modal, Select, Input, notification, Popconfirm, Tag, Image, Avatar, Row, Col, FloatButton, Pagination, message } from 'antd';
import GetColumnSearchProps from '../AllActions/SearchProps';
import { deleteUser, updateUser } from '../AllActions/CRUDUsers';
import FilterData from '../Component/FilterData';
import UpdateUser from '../Component/Update/EditUser';
import Data from '../Component/Data';

function Profile() {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalUsersData, setTotalUsers] = useState(null)
  const [editingUser, setEditingUser] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();
  const [file, setFile] = useState();
  const dateNow = new Date()

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true)
    const response = await axiosInstance.get(`/users?page=1&limit=30&sortBy=createdAt&createdAtBefore=${dateNow}&createdAtAfter=2023-01-01`
    )
    setGridData(response.data.users)
    setTotalUsers(response.data.totalUsers)
    setLoading(false)
  };

  const modifiedData = gridData.map((item) => ({
    ...item,
    key: item._id
  }));

  const handeDelete = async (record) => {
    const id = record._id
    axiosInstance.delete(`users/${id}`)
      .then((response) => {
        message.success(response.data.message)
        return loadData()
      }).catch((error) => {
        message.error(error.data.message)
      });

  };

  const onToggle = async (record) => {
    const id = record._id
    axiosInstance.patch(`/users/toggle-enable/${id}`)
      .then((response) => {
        message.success(response.data.message)
        return loadData()
      }).catch((error) => {
        message.error(error.data.message)
      });

  };

  const onEditUser = async (record) => {
    setEditingUser(record)
    setIsEditing(true)
  };
  const onOkEditing = async () => {
    const id = editingUser._id;
    updateUser(id, { ...editingUser, profile: file || editingUser?.profile || '' }).then(() => {
      setFile('');
      return loadData();
    })
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingUser(null);
  };
  const getDataFilter = (filterData) => { setGridData(filterData) }

  return (
    <>
      <FloatButton.BackTop />
      <FilterData onFilterData={getDataFilter} />
      <Form>
        <Data
          modifiedData={modifiedData}
          onToggle={onToggle}
          onEditUser={onEditUser}
          handeDelete={handeDelete}
          totalUsersData={totalUsersData}
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
            role={editingUser?.role}
            building={editingUser?.building}
            change={onEditUser}
          />
        </Modal>
      </Form>
    </>
  );
}

export default Profile;