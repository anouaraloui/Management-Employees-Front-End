import { UserOutlined } from '@ant-design/icons';
import { Form, Space, Table, Avatar } from 'antd';
import GetColumnSearchProps from '../../SearchProps/SearchProps';
import DeleteUser from '../../User/DeleteUser';
import Toggle from '../../User/Toggle';
import UpdateUser from '../../User/Update';

const Data = ({ scrollData, modifiedData, loading, pagination, loadData }) => {
  const urlDoc = window.location.pathname
  const pathname = `/dashboard/users/profile`
  const columnsAllUser = [
    {
      title: 'Avatar',
      dataIndex: 'profile',
      align: "center",
      render: (avatar) => {
        return (avatar) ? <Avatar src={avatar} style={{
          backgroundColor: '#f56a00',
        }}
          size={{
            xs: 24,
            sm: 26,
            md: 30,
            lg: 40,
            xl: 50,
            xxl: 60,
          }} /> : <Avatar
          size={{
            xs: 24,
            sm: 26,
            md: 30,
            lg: 40,
            xl: 50,
            xxl: 60,
          }} icon={<UserOutlined />} />
      },
      fixed: 'left',
      width: 40
    },
    {
      title: 'Name',
      ...GetColumnSearchProps('firstName'),
      children: [
        {
          title: 'First Name',
          dataIndex: 'firstName',
          align: "center",
          fixed: 'left',
          width: 65,

        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          align: "center",
          fixed: 'left',
          width: 65,
        },
      ],

    },
    {
      title: 'Email',
      dataIndex: 'email',
      align: "center",
      width: 150
    },
    {
      title: 'Role',
      dataIndex: 'role',
      align: "center",
      width: 90,
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
      onFilter: (value, record) => record.building.indexOf(value) === 0,
      width: 80

    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      align: "center",
      width: 60
    },
    {
      title: 'Days Off',
      dataIndex: 'allDaysOff',
      sorter: (a, b) => a.allDaysOff - b.allDaysOff,
      align: "center",
      width: 50
    },
    {
      title: 'Sick',
      dataIndex: 'daysOffSick',
      align: "center",
      sorter: (a, b) => a.daysOffSick - b.daysOffSick,
      width: 50
    }
    , 
    {
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
      },
      width: 50

    },
    {
      title: 'Operation',
      dataIndex: 'Operation',
      render: (_, record) => {
        if (urlDoc.includes(pathname) && modifiedData.length >= 1) {
          return (
            <Space >
              <UpdateUser
                record={record}
                loadData={loadData}
              />
            </Space>
          )
        } else return (
          <Space>
            <Toggle
              record={record}
              loadData={loadData}
            />
            <DeleteUser
              record={record}
              loadData={loadData}
            />
            <UpdateUser
              record={record}
              loadData={loadData}
            />
          </Space>

        )

      },
      width: 150,
      fixed: 'right',
      align: "center"
    },
  ];

  const columnsProfile = [
    {
      title: 'Avatar',
      dataIndex: 'profile',
      align: "center",
      render: (avatar) => {
        return (avatar) ? <Avatar src={avatar} style={{
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
          }} icon={<UserOutlined />} />
      },
    },
    {
      title: 'Name',
      children: [
        {
          title: 'First Name',
          dataIndex: 'firstName',
          align: "center",

        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          align: "center",
        },
      ],

    },
    {
      title: 'Email',
      dataIndex: 'email',
      align: "center",
    },
    {
      title: 'Role',
      dataIndex: 'role',
      align: "center",


    },
    {
      title: 'Building',
      dataIndex: 'building',
      align: "center",

    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      align: "center",
    },
    {
      title: 'Days Off',
      dataIndex: 'allDaysOff',
      align: "center",
    },
    {
      title: 'Sick',
      dataIndex: 'daysOffSick',
      align: "center",
    }
    , {
      title: 'Status',
      dataIndex: 'isActive',
      align: "center",
      render: (isActive) => { return <p>{isActive ? 'Active' : 'Disable'}</p> },
      onFilter: (value, record) => {
        return record.isActive === value
      },

    },
    {
      title: 'Operation',
      dataIndex: 'Operation',
      render: (_, record) => {
        if (urlDoc.includes(pathname) && modifiedData.length >= 1) {
          return (
            <Space >
              {/* <Button onClick={() => {
                onEditUser(record);
              }} style={{ color: "green" }}>Edit
                <EditOutlined />
              </Button> */}
              <UpdateUser
                record={record}
                loadData={loadData}
              />
            </Space>
          )
        } else return (
          <Space>
            <Toggle
              record={record}
              loadData={loadData}
            />
            <DeleteUser
              record={record}
              loadData={loadData}
            />
            <UpdateUser
              record={record}
              loadData={loadData}
            />
            {/* <Button onClick={() => {
              onEditUser(record);
            }} style={{ color: "green" }}>Edit
              <EditOutlined />
            </Button> */}
          </Space>

        )

      },
      // width: 100,
      // fixed: 'right'
    },
  ];

  return (
    <Table
      pagination={pagination}
      columns={urlDoc.includes(pathname) ? columnsProfile : columnsAllUser}
      dataSource={modifiedData}
      bordered
      loading={loading}
      scroll={scrollData}
    />
  )
}

export default Data;