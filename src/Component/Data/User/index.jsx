import { UserOutlined } from '@ant-design/icons';
import { Space, Table, Avatar } from 'antd';
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
          
          width: 55,

        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          align: "center",
          
          width: 55,
        },
      ],

    },
    {
      title: 'Email',
      dataIndex: 'email',
      align: "center",
      width: 100,
      
    },
    {
      title: 'Role',
      dataIndex: 'role',
      align: "center",
      width: 70,
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
      onFilter: (value, record) => record.role.indexOf(value) === 0,
      
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
      width: 50,    
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      align: "center",
      width: 50,
      
    },
    {
      title: 'Days Off',
      dataIndex: 'allDaysOff',
      sorter: (a, b) => a.allDaysOff - b.allDaysOff,
      align: "center",
      width: 50,
      
    },
    {
      title: 'Sick',
      dataIndex: 'daysOffSick',
      align: "center",
      sorter: (a, b) => a.daysOffSick - b.daysOffSick,
      width: 40
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
      width: 40

    },
    {
      title: 'Operation',
      dataIndex: 'Operation',
      render: (_, record) => {
        if (modifiedData.length >= 1) {
          return (
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
        }
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
      width: 100
    },
    {
      title: 'Name',
      children: [
        {
          title: 'First Name',
          dataIndex: 'firstName',
          align: "center",
          width: 105
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          align: "center",
          width: 105
        },
      ]

    },
    {
      title: 'Email',
      dataIndex: 'email',
      align: "center",
      width: 105
    },
    {
      title: 'Role',
      dataIndex: 'role',
      align: "center",
      width: 105
    },
    {
      title: 'Building',
      dataIndex: 'building',
      align: "center",
      width: 105
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      align: "center",
      width: 105
    },
    {
      title: 'Days Off',
      dataIndex: 'allDaysOff',
      align: "center",
      width: 90
    },
    {
      title: 'Sick',
      dataIndex: 'daysOffSick',
      align: "center",
      width: 90
    },
    {
      title: 'Status',
      dataIndex: 'isActive',
      align: "center",
      render: (isActive) => { return <p>{isActive ? 'Active' : 'Disable'}</p> },
      onFilter: (value, record) => {
        return record.isActive === value
      },
      width: 90
    },
    {
      title: 'Operation',
      dataIndex: 'Operation',
      render: (_, record) => {
        if (modifiedData.length >= 1) {
          return (
            <Space >
              <UpdateUser
                record={record}
                loadData={loadData}
              />
            </Space>
          )
        }
      },
      width: 100,
    },
  ];

  return (
    <Table
    className='tabledData'
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