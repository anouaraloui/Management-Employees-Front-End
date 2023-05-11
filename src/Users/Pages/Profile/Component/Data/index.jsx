
import { SearchOutlined, DeleteOutlined, EditOutlined, PlusCircleOutlined,UserOutlined } from '@ant-design/icons';
import { Form, Space, Table, Button, DatePicker, Modal, Select, Input, notification, Popconfirm, Tag, Image, Avatar, Row, Col, FloatButton, Pagination, message } from 'antd';
import GetColumnSearchProps from '../../AllActions/SearchProps';
import { useState } from 'react';

const Data = ( { onToggle, modifiedData , handeDelete, onEditUser, totalUsersData, loading}) => {
const columns = [
    {
      title: 'Avatar',
      dataIndex: 'profile',
      align: "center",
      render: (avatar) => { return (avatar) ? <Avatar src={avatar} style={{
        backgroundColor: '#f56a00',
      }}   
      size={{
        xs: 24,
        sm: 32,
        md: 40,
        lg: 64,
        xl: 70,
        xxl: 80,
      }} /> : <Avatar 
      size={{
        xs: 24,
        sm: 32,
        md: 40,
        lg: 64,
        xl: 70,
        xxl: 80,
      }} icon={<UserOutlined />} /> }
    },
    {
      title: 'Name',
      ...GetColumnSearchProps('firstName'),
      children: [
        {
          title: 'First Name',
          dataIndex: 'firstName',
          align: "center"

        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          align: "center"
        },
      ]
    },
    {
      title: 'Email',
      dataIndex: 'email',
      align: "center"
    },
    {
      title: 'Role',
      dataIndex: 'role',
      align: "center",
      filters: [
        {
          text: 'Super Admin',
          value: 'Super Admin',
        },
        {
          text: 'Director',
          value: 'Director',
        },
        {
          text: 'Administration Director',
          value: 'Administration Director',
        },
        {
          text: 'Administration Assistant',
          value: 'Administration Assistant',
        },
        {
          text: 'Team Manager',
          value: 'Team Manager',
        },
        {
          text: 'Software Engineer',
          value: 'Software Engineer',
        },

      ],
      filterSearch: true,
      onFilter: (value, record) => record.role.indexOf(value) === 0

    },
    {
      title: 'Building',
      dataIndex: 'building',
      align: "center",
      filters: [
        {
          text: 'Front-End',
          value: 'Front-End',
        },
        {
          text: 'Back-End',
          value: 'Back-End',
        },
        {
          text: 'Full-Stack',
          value: 'Full-Stack',
        },
      ],
      filterSearch: true,
      onFilter: (value, record) => record.building.indexOf(value) === 0
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      align: "center"
    },
    {
      title: 'Days Off',
      dataIndex: 'allDaysOff',
      sorter: (a, b) => a.allDaysOff - b.allDaysOff,
      align: "center"
    }
  , {
      title: 'Status',
      dataIndex: 'isActive',
      align: "center",
      filters: [
        {
          text: 'Active',
          value: true,
        },
        {
          text: 'Disable',
          value: false,
        },
      ],
      render: (isActive) => { return <p>{isActive ? 'Active' : 'Disable'}</p> },
      onFilter: (value, record) => {
        return record.isActive === value
      }

    },
    {
      title: 'Operation',
      dataIndex: 'Operation',
      align: "center",
      render: (_, record) => {
        return modifiedData.length >= 1 ? (
          <Space>
            <Popconfirm title='Are you sure, you want to change the status of this user'
              okText="Yes"
              okType="danger"
              onConfirm={() => {
                onToggle(record)
              }}
            >
              <Button >
                {record.isActive ?
                  <span style={{ color: 'red' }}>
                    Disable
                  </span>
                  :
                  <span style={{ color: 'green' }}>
                    Active
                  </span>
                }
              </Button>
            </Popconfirm>
            <Popconfirm
              title='Are you sure, you want to delete this user'
              okText="Yes"
              okType="danger"
              onConfirm={() => handeDelete(record)}
            >
              <Button style={{ color: "red" }}>Delete
                <DeleteOutlined />
              </Button>
            </Popconfirm>
            <Button onClick={() => {
              onEditUser(record);
            }} style={{ color: "green" }}>Edit
              <EditOutlined />
            </Button>
          </Space>

        ) : null
      }

    },
  ];
  
  return(
    <Table
          title={() => <span> Total users : {totalUsersData}</span>}
          columns={columns}
          dataSource={modifiedData}
          bordered
          loading={loading}  
        />
  )
}

export default Data


 