// const data = [
//     {
//       key: '1',
//       name: 'John Brown',
//       age: 32,
//       address: 'New York No. 1 Lake Park',
//     },
//     {
//       key: '2',
//       name: 'Jim Green',
//       age: 42,
//       address: 'London No. 1 Lake Park',
//     },
//     {
//       key: '3',
//       name: 'Joe Black',
//       age: 32,
//       address: 'Sydney No. 1 Lake Park',
//     },
//     {
//       key: '4',
//       name: 'Jim Red',
//       age: 32,
//       address: 'London No. 2 Lake Park',
//     },

//   ];

// const [ currentUser, setCurrentUser ]= useUserContext()

// const token = localStorage.getItem('token')
// const decodedToken = jwtDecode(token)
// const userId = decodedToken.userId
// const admin = decodedToken.role

// const [page, setPage] =useState('')
// const [limit, setLimit] =useState('')
// const [totalUsers, setTotalUsers] =useState('')
// const [usersData, setUsers] =useState([])
// const url = document.URL
// console.log('url', url);
// const createdAtBefore = url.createdAtBefore
// const createdAtAfter = useParams()
// console.log('created : ', createdAtAfter);
//  const [page, limit, totalUsers] = useParams()

//    const getUsers =() => {
//         getAll((res)=> {
//             console.log('res', res.data);
//             setCurrentUser( [...currentUser,res.data])

//         })
//     }
//     useEffect(() => {
// axiosInstance.get('/users', {queries: {
//     createdAtBefore: createdAtBefore,
//     createdAtAfter: createdAtAfter
// }}).then((response)=> {
//     console.log('respons', response.data);
//     setUsers(response.data.users)

// }, [])
//         }, [])  
// const user = async () => {
//     let dataUsers = await getAll()
//     if(dataUsers) {
//         console.log('yess', dataUsers);
//     setUsers(...usersData,dataUsers.data)    
//     }
//     else console.log('nein');
// }
// user()

// if(currentUser) {
//      const response = await axiosInstance.get('/users',

//   )
//      console.log('aaaaas');
// console.log('resp : ', response);
// const currentData = JSON.stringify(response)
// console.log('data', currentData);
// setUsers(currentData)
// setUsers([response.data])
// setPage(response.data.page)
// setLimit(response.data.limit)

// }

// setTotalUsers(response.data.totalUsers)


// console.log('page', page);
// console.log('users :', users);
// try{
//      if(admin === "Super Admin"){
//         console.log('super admin 20');
//        axiosInstance.get('/users', {headers: {'Authorization': 'Bearer '+localStorage.getItem("token")}})
//       .then(response => {
//         console.log('response',response);
//     }).catch(e => {
//         console.log(e);
//     });
//       console.log('18');

//     //     console.log('admin : ', admin);
//     //     console.log(res);
//     // setCurrentUser(res)
//     JSON.stringify(currentUser)
//     console.log(setCurrentUser);
//     }


// }catch(e ) {
//     console.log(e);
// }

// const getUsers = getUserById()
//  const getUserById = async (callback)=>{ 

//     .then((res)=> console.log(res))
//     .catch((err) => console.log(err))

//   }

//   if(!usersData) return null

// const { RangePicker } = DatePicker;
// const dateFormat = 'YYYY/MM/DD';
// const weekFormat = 'MM/DD';
// const monthFormat = 'YYYY/MM';
// const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
// const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
// const customWeekStartEndFormat = (value) =>
//   `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
//     .endOf('week')
//     .format(weekFormat)}`;


// import dayjs from 'dayjs';
// import customParseFormat from 'dayjs/plugin/customParseFormat';
// dayjs.extend(customParseFormat);



// {
    //   title: 'Age',
    //   dataIndex: 'age',
    //   key: 'age',
    //   sorter: (a, b) => a.age - b.age,
    //   sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
    //   ellipsis: true,
    // },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    //   filters: [
    //     {
    //       text: 'London',
    //       value: 'London',
    //     },
    //     {
    //       text: 'New York',
    //       value: 'New York',
    //     },
    //   ],
    //   filteredValue: filteredInfo.address || null,
    //   onFilter: (value, record) => record.address.includes(value),
    //   sorter: (a, b) => a.address.length - b.address.length,
    //   sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
    //   ellipsis: true,
    // },



// file Profile

 // const isActive = usersData.map((data) => data.isActive).toString()
  // const handleDelete = async () => {
  //   console.log(usersData.map((id) => id._id));
  // }

  // const onDeleteUser=(value)=>{
  //     const removedItems = usersData.splice(usersData.indexOf(value), 1);
  //     const removeId = removedItems.map((idUser)=>idUser._id);
      
      
  //     console.log("id",removeId)
        // Modal.confirm({
        //     title:'Are you sure, you want to delete this user',
        //     okText: "Yes",
        //     okType:"danger",
        //     onOk:()=>{
        //       axiosInstance.delete(`users/${removeId}`)
        //       .then((response) => {
        //         console.log('response', response.data.message)
        //         notification.success({
        //           placement: 'top',
        //           bottom: 50,
        //           duration: 2,
        //           message: response.data.message
  
  
        //       });
        //       const afterRemov= [...usersData]
        //         return setUsers(afterRemov)
                  
        //        })
        //        .catch((error) => {
        //         notification.error({
        //           placement: 'top',
        //           bottom: 50,
        //           duration: 5,
        //           message: error.data.error.message
        //         });
        //         });
              
              
        // }
        // })
    
    // };



// import { Form, InputNumber, Popconfirm, Table, Typography } from 'antd';
// import { useState } from 'react';
// const originData = [];
// for (let i = 0; i < 100; i++) {
//   originData.push({
//     key: i.toString(),
//     name: `Edward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   });
// }
// const EditableCell = ({
//   editing,
//   dataIndex,
//   title,
//   inputType,
//   record,
//   index,
//   children,
//   ...restProps
// }) => {
//   const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
//   return (
//     <td {...restProps}>
//       {editing ? (
//         <Form.Item
//           name={dataIndex}
//           style={{
//             margin: 0,
//           }}
//           rules={[
//             {
//               required: true,
//               message: `Please Input ${title}!`,
//             },
//           ]}
//         >
//           {inputNode}
//         </Form.Item>
//       ) : (
//         children
//       )}
//     </td>
//   );
// };

// const App = () => {
//   const [form] = Form.useForm();
//   const [data, setData] = useState(originData);
//   const [editingKey, setEditingKey] = useState('');
//   const isEditing = (record) => record.key === editingKey;
//   const edit = (record) => {
//     form.setFieldsValue({
//       name: '',
//       age: '',
//       address: '',
//       ...record,
//     });
//     setEditingKey(record.key);
//   };
//   const cancel = () => {
//     setEditingKey('');
//   };
//   const save = async (key) => {
//     try {
//       const row = await form.validateFields();
//       const newData = [...data];
//       const index = newData.findIndex((item) => key === item.key);
//       if (index > -1) {
//         const item = newData[index];
//         newData.splice(index, 1, {
//           ...item,
//           ...row,
//         });
//         setData(newData);
//         setEditingKey('');
//       } else {
//         newData.push(row);
//         setData(newData);
//         setEditingKey('');
//       }
//     } catch (errInfo) {
//       console.log('Validate Failed:', errInfo);
//     }
//   };

//   const columns = [
//     {
//       title: 'name',
//       dataIndex: 'name',
//       width: '25%',
//       editable: true,
//     },
//     {
//       title: 'age',
//       dataIndex: 'age',
//       width: '15%',
//       editable: true,
//     },
//     {
//       title: 'address',
//       dataIndex: 'address',
//       width: '40%',
//       editable: true,
//     },
//     {
//       title: 'operation',
//       dataIndex: 'operation',
//       render: (_, record) => {
//         const editable = isEditing(record);
//         return editable ? (
//           <span>
//             <Typography.Link
//               onClick={() => save(record.key)}
//               style={{
//                 marginRight: 8,
//               }}
//             >
//               Save
//             </Typography.Link>
//             <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
//               <a>Cancel</a>
//             </Popconfirm>
//           </span>
//         ) : (
//           <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
//             Edit
//           </Typography.Link>
//         );
//       },
//     },
//   ];
//   const mergedColumns = columns.map((col) => {
//     if (!col.editable) {
//       return col;
//     }
//     return {
//       ...col,
//       onCell: (record) => ({
//         record,
//         inputType: col.dataIndex === 'age' ? 'number' : 'text',
//         dataIndex: col.dataIndex,
//         title: col.title,
//         editing: isEditing(record),
//       }),
//     };
//   });


//   return (
//     <Form form={form} component={false}>
//       <Table
//         components={{
//           body: {
//             cell: EditableCell,
//           },
//         }}
//         bordered
//         dataSource={data}
//         columns={mergedColumns}
//         rowClassName="editable-row"
//         pagination={{
//           onChange: cancel,
//         }}
//       />
//     </Form>
//   );
// };
// export default App;

// .editable-row .ant-form-item-explain {
//   position: absolute;
//   top: 100%;
//   font-size: 12px;
// }


// import "antd/dist/antd.css";
// import "./App.css";
// import { Button, Table, Modal, Input } from "antd";
// import { useState } from "react";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

// function App() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingStudent, setEditingStudent] = useState(null);
//   const [dataSource, setDataSource] = useState([
//     {
//       id: 1,
//       name: "John",
//       email: "john@gmail.com",
//       address: "John Address",
//     },
//     {
//       id: 2,
//       name: "David",
//       email: "david@gmail.com",
//       address: "David Address",
//     },
//     {
//       id: 3,
//       name: "James",
//       email: "james@gmail.com",
//       address: "James Address",
//     },
//     {
//       id: 4,
//       name: "Sam",
//       email: "sam@gmail.com",
//       address: "Sam Address",
//     },
//   ]);
//   const columns = [
//     {
//       key: "1",
//       title: "ID",
//       dataIndex: "id",
//     },
//     {
//       key: "2",
//       title: "Name",
//       dataIndex: "name",
//     },
//     {
//       key: "3",
//       title: "Email",
//       dataIndex: "email",
//     },
//     {
//       key: "4",
//       title: "Address",
//       dataIndex: "address",
//     },
//     {
//       key: "5",
//       title: "Actions",
//       render: (record) => {
//         return (
//           <>
//             <EditOutlined
//               onClick={() => {
//                 onEditStudent(record);
//               }}
//             />
//           </>
//         );
//       },
//     },
//   ];

  // const onAddStudent = () => {
  //   const randomNumber = parseInt(Math.random() * 1000);
  //   const newStudent = {
  //     id: randomNumber,
  //     name: "Name " + randomNumber,
  //     email: randomNumber + "@gmail.com",
  //     address: "Address " + randomNumber,
  //   };
  //   setDataSource((pre) => {
  //     return [...pre, newStudent];
  //   });
  // };
  // const onDeleteStudent = (record) => {
  //   Modal.confirm({
  //     title: "Are you sure, you want to delete this student record?",
  //     okText: "Yes",
  //     okType: "danger",
  //     onOk: () => {
  //       setDataSource((pre) => {
  //         return pre.filter((student) => student.id !== record.id);
  //       });
  //     },
  //   });
  // };
//   const onEditStudent = (record) => {
//     setIsEditing(true);
//     setEditingStudent({ ...record });
//   };
//   const resetEditing = () => {
//     setIsEditing(false);
//     setEditingStudent(null);
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Button onClick={onAddStudent}>Add a new Student</Button>
//         <Table columns={columns} dataSource={dataSource}></Table>
//         <Modal
//           title="Edit Student"
//           visible={isEditing}
//           okText="Save"
//           onCancel={() => {
//             resetEditing();
//           }}
//           onOk={() => {
//             setDataSource((pre) => {
//               return pre.map((student) => {
//                 if (student.id === editingStudent.id) {
//                   return editingStudent;
//                 } else {
//                   return student;
//                 }
//               });
//             });
//             resetEditing();
//           }}
//         >
//           <Input
//             value={editingStudent?.name}
//             onChange={(e) => {
//               setEditingStudent((pre) => {
//                 return { ...pre, name: e.target.value };
//               });
//             }}
//           />
//           <Input
//             value={editingStudent?.email}
//             onChange={(e) => {
//               setEditingStudent((pre) => {
//                 return { ...pre, email: e.target.value };
//               });
//             }}
//           />
//           <Input
//             value={editingStudent?.address}
//             onChange={(e) => {
//               setEditingStudent((pre) => {
//                 return { ...pre, address: e.target.value };
//               });
//             }}
//           />
//         </Modal>
//       </header>
//     </div>
//   );
// }

// export default App;


// File Profile

          {/* <Input
            value={editingUser?.address}
            onChange={(e) => {
              setEditingUsereditingUser((pre) => {
                return { ...pre, address: e.target.value };
              });
            }}
          /> */}
        

      {/* <Table dataSource={usersData} onChange={handleChange} bordered 
      loading={loading}
      
      >
        <ColumnGroup title="Name" 
        
        >
          
          <Column title="first Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Role" dataIndex="role" key="role"
          filters={[
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

          ]}
          filterSearch={true} onFilter={(value, record) => record.role.indexOf(value) === 0}
          
        />
        <Column title="Building" dataIndex="building" key="building"
          filters={[
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
          ]}
          filterSearch={true} onFilter={(value, record) => record.building.indexOf(value) === 0}
        />
        <Column title="Phone" dataIndex="phone" key="phone" />
        <Column title="Days Off" dataIndex="soldeDays" key="soldeDays" 
        defaultSortOrder= {'descend'}
        sorter= {(a, b) => a.soldeDays - b.soldeDays}
        />
        <Column title="Status" dataIndex="isActive" key="isActive"
        
          filters={[
            {
              text: 'Active',
              value: true,
            },
            {
              text: 'Disable',
              value: false,
            },
          ]}
          render={(isActive) => {return <p>{isActive ?'Active':'Disable'}</p>}}
          onFilter={(value, record) => {
            return record.isActive === value
          }} 
           />

        <Column title="Operation" dataIndex="Operation" key="operation"
          render={(_, record) => (
            <Space size="middle">
              <Button onClick={() => {
                  onUpdate(record)
              }

              } style={{ color: "red", marginLeft: "30px" }}>Update</Button>
              <Button onClick={() => {
                  onDeleteUser(record)
              }

              } style={{ color: "red", marginLeft: "30px" }}>Delete
                <DeleteOutlined />
              </Button>
              <Button onClick={() => {
                  onToggle(record)
              }

              } style={{ color: "red", marginLeft: "30px" }}>Toggle Enable
                
              </Button>
             
            </Space>
          )} />


      </Table> */}


{/* </Layout> */}


// import { Table } from 'antd';
// import qs from 'qs';
// import { useEffect, useState } from 'react';
// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     sorter: true,
//     render: (name) => `${name.first} ${name.last}`,
//     width: '20%',
//   },
//   {
//     title: 'Gender',
//     dataIndex: 'gender',
//     filters: [
//       {
//         text: 'Male',
//         value: 'male',
//       },
//       {
//         text: 'Female',
//         value: 'female',
//       },
//     ],
//     width: '20%',
//   },
//   {
//     title: 'Email',
//     dataIndex: 'email',
//   },
// ];
// const getRandomuserParams = (params) => ({
//   results: params.pagination?.pageSize,
//   page: params.pagination?.current,
//   ...params,
// });
// const App = () => {
//   const [data, setData] = useState();
//   const [loading, setLoading] = useState(false);
//   const [tableParams, setTableParams] = useState({
//     pagination: {
//       current: 1,
//       pageSize: 10,
//     },
//   });
//   const fetchData = () => {
//     setLoading(true);
//     fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
//       .then((res) => res.json())
//       .then(({ results }) => {
//         setData(results);
//         setLoading(false);
//         setTableParams({
//           ...tableParams,
//           pagination: {
//             ...tableParams.pagination,
//             total: 200,
//             // 200 is mock data, you should read it from server
//             // total: data.totalCount,
//           },
//         });
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, [JSON.stringify(tableParams)]);
  
//   const handleTableChange = (pagination, filters, sorter) => {
//     setTableParams({
//       pagination,
//       filters,
//       ...sorter,
//     });

//     // `dataSource` is useless since `pageSize` changed
//     if (pagination.pageSize !== tableParams.pagination?.pageSize) {
//       setData([]);
//     }
//   };
//   return (
//     <Table
//       columns={columns}
//       rowKey={(record) => record.login.uuid}
//       dataSource={data}
//       pagination={tableParams.pagination}
//       loading={loading}
//       onChange={handleTableChange}
//     />
//   );
// };
// export default App;

// file Profile

// import { useRef, useEffect, useState, Component } from 'react';
// import jwtDecode from 'jwt-decode';
// import { axiosInstance } from '../../api';
// import { useNavigate } from 'react-router-dom';
// import { SearchOutlined, DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
// import Highlighter from 'react-highlight-words';
// import { Form, Radio, Space, Table, Button, DatePicker, Modal, Select, Input, notification, } from 'antd';
// import { Option } from 'antd/es/mentions';
// import GetColumnSearchProps from './AllActions/SearchProps';
// import { deleteUser, toggleUser, updateUser } from './AllActions/CRUDUsers';

// function Profile() {

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const history = useNavigate()

//   const [filteredInfo, setFilteredInfo] = useState({});
//   const [sortedInfo, setSortedInfo] = useState({});
//   const [totalUsersData, setTotalUsers] = useState(null)
//   const [createdAtAfter, setCreatedAtAfter] = useState('')
//   const [createdAtBefore, setCreatedAtBefore] = useState('')
//   const [limit, setLimit] = useState(null)
//   const [sortBy, setSortBy] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [usersData, setUsers] = useState([])
//   const [searchText, setSearchText] = useState('');
//   const [searchedColumn, setSearchedColumn] = useState('');
//   const searchInput = useRef(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingUser, setEditingUser] = useState([]);
//   const { RangePicker } = DatePicker;
//   const token = localStorage.getItem('token')
//   const decodedToken = jwtDecode(token)
//   const admin = decodedToken.role
//   const dateNow = new Date()
//   const onChange = (value, dateString) => {
//     console.log('Selected Time: ', value);
//     console.log('Formatted Selected Time: ', dateString);
//     const createdBefore = dateString[1]
//     setCreatedAtBefore(createdBefore)
//     const createdAfter = dateString[0]
//     setCreatedAtAfter(createdAfter)

//   };

//   const onOk = (value) => {
//     console.log('onOk: ', value);
//   };

//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   const handleChange = (pagination, filters, sorter) => {
//     setFilteredInfo(filters);
//     setSortedInfo(sorter);
//   };


//   const getAllUsers = async () => {
//     setLoading(false)
//     if (admin === 'Super Admin') {
//       await axiosInstance.get(`/users?page=1&limit=30&sortBy=createdAt&createdAtBefore=${dateNow}&createdAtAfter=2023-01-01`).then((response) => {


//         setUsers(response.data.users)
//         setTotalUsers(response.data.totalUsers)
//         setLoading(false)

//       })
//     }
//   }

//   useEffect(() => {
//     getAllUsers()
//   }, [usersData])

//   const handleOk = () => {
//     setLoading(true)
//     if (admin === 'Super Admin') {
//       axiosInstance.get(`/users?page=1&limit=${limit}&sortBy=${sortBy}&createdAtBefore=${createdAtBefore}&createdAtAfter=${createdAtAfter}`).then((response) => {
//         console.log('respons', response.data);
//         setUsers(response.data.users)
//         setTotalUsers(response.data.totalUsers)
//         setLoading(false)
//       })
//     }
//     setIsModalOpen(false);
//   };

//   const data = usersData;

//   const onToggle = (record) => {
//     const toggleId = data.splice(data.indexOf(record), 1);
//     const id = toggleId.map((idUser) => idUser._id);
//     toggleUser(id)
//   }

//   const onEditUser = async (record) => {
//     setEditingUser({ ...record });
//     setIsEditing(true);
//   };

//   const onOkEditing = async () => {
//     const id = editingUser._id;
//     updateUser(id, editingUser)
//   }
//   const resetEditing = () => {
//     setIsEditing(false);
//     setEditingUser(null);
//   };
//   const onDeleteUser = (record) => {
//     const deleteId = data.splice(data.indexOf(record), 1);
//     const id = deleteId.map((idUser) => idUser._id);
//     deleteUser(id)
//   };


//   const columns = [
//     {
//       title: 'Name',
//       ...GetColumnSearchProps('firstName'),
//       children: [
//         {
//           title: 'First Name',
//           dataIndex: 'firstName',
//           key: 'firstName',

//         },
//         {
//           title: 'Last Name',
//           dataIndex: 'lastName',
//           key: 'lastName',
//         },
//       ]
//     },

//     {
//       title: 'Email',
//       dataIndex: 'email',
//       key: 'email',
//     },
//     {
//       title: 'Role',
//       dataIndex: 'role',
//       key: 'role',
//       filters: [
//         {
//           text: 'Super Admin',
//           value: 'Super Admin',
//         },
//         {
//           text: 'Director',
//           value: 'Director',
//         },
//         {
//           text: 'Administration Director',
//           value: 'Administration Director',
//         },
//         {
//           text: 'Administration Assistant',
//           value: 'Administration Assistant',
//         },
//         {
//           text: 'Team Manager',
//           value: 'Team Manager',
//         },
//         {
//           text: 'Software Engineer',
//           value: 'Software Engineer',
//         },

//       ],
//       filterSearch: true,
//       onFilter: (value, record) => record.role.indexOf(value) === 0

//     },
//     {
//       title: 'Building',
//       dataIndex: 'building',
//       key: 'building',
//       filters: [
//         {
//           text: 'Front-End',
//           value: 'Front-End',
//         },
//         {
//           text: 'Back-End',
//           value: 'Back-End',
//         },
//         {
//           text: 'Full-Stack',
//           value: 'Full-Stack',
//         },
//       ],
//       filterSearch: true,
//       onFilter: (value, record) => record.building.indexOf(value) === 0
//     },
//     {
//       title: 'Phone',
//       dataIndex: 'phone',
//       key: 'phone',
//     },
//     {
//       title: 'Days Off',
//       dataIndex: 'allDaysOff',
//       key: 'allDaysOff',
//       sorter: (a, b) => a.allDaysOff - b.allDaysOff,
//       sortOrder: sortedInfo.columnKey === 'allDaysOff' ? sortedInfo.order : null,

//     }
//     , {
//       title: 'Status',
//       dataIndex: 'isActive',
//       key: 'isActive',
//       filters: [
//         {
//           text: 'Active',
//           value: true,
//         },
//         {
//           text: 'Disable',
//           value: false,
//         },
//       ],
//       render: (isActive) => { return <p>{isActive ? 'Active' : 'Disable'}</p> },
//       onFilter: (value, record) => {
//         return record.isActive === value
//       }

//     },
//     {
//       title: 'Operation',
//       dataIndex: 'Operation',
//       key: 'Operation',
//       render: (_, record) => (
//         <Space size="middle">
//           <Button onClick={() => {
//             onEditUser(record);
//           }} style={{ color: "green"}}>Edit
//             <EditOutlined />
//           </Button>
//           <Button onClick={() => {
//             onDeleteUser(record)
//           }} style={{ color: "red" }}>Delete
//             <DeleteOutlined />
//           </Button>
//           <Button onClick={() => {
//             onToggle(record)
//           }} style={{ color: "#1D4ED8"}}>Toggle Enable

//           </Button>

//         </Space>
//       )

//     },


//   ];
//   const home = () => {
//     history('/dashboard')
//   }

  // const handleAddUser = () => {
  //   history('/users/created')
  // }
//   const [componentSize, setComponentSize] = useState('default');

//   const onFormLayoutChange = ({ size }) => {
//     setComponentSize(size);
//   };

//   useEffect(() => {
//     console.count('comp re-render');
//   }, [])

//   return (
//     <>
//       <Button type='primary' onClick={handleAddUser} style={{ float: 'right' }}>
//         <PlusCircleOutlined />
//         New Employee
//       </Button>
//       <Button type="primary" onClick={showModal}>
//         Sort By
//       </Button>
//       <Modal title="Sort By" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
//         <Space direction="vertical" size={20}>

//           <Form
//             labelCol={{
//               span: 8,
//             }}
//             wrapperCol={{
//               span: 16,
//             }}
//             layout="horizontal"
//             initialValues={{
//               size: componentSize,
//             }}
//             onValuesChange={onFormLayoutChange}
//             size={componentSize}
//             style={{
//               width: 350,
//             }}
//           >
//             <Form.Item label="Field to sort by"  >
//               <Select name="sortBy" onSelect={(e) => setSortBy(e)}>
//                 <Select.Option value="createdAt">createdAt</Select.Option>
//               </Select>
//             </Form.Item>
//             <Form.Item label="Date">
//               <RangePicker

//                 format="YYYY-MM-DD"
//                 onChange={onChange}
//                 onOk={onOk}
//               />
//             </Form.Item>
//             <Form.Item label="Limit" >
//               <Input onChange={(e) => setLimit(e.target.value)} />
//             </Form.Item>
//           </Form>

//         </Space>
//       </Modal>
//       <Button onClick={home}>Back Home</Button>
//       <Table title={() => <span  >Total Users : {totalUsersData}</span>} columns={columns} dataSource={usersData}
//         onChange={handleChange} loading={loading} size='small'
//       />
//       <Modal
//         title="Edit User"
//         open={isEditing}
//         okText="Save"
//         onCancel={() => {
//           resetEditing();
//         }}
//         onOk={() => {

//           onOkEditing()
//           setUsers((response) => {
//             return response.map((response) => {
//               if (response.id === editingUser.id) {
//                 return editingUser;
//               } else {
//                 return response;
//               }
//             });
//           });
//           resetEditing();


//         }}
//       >
//         <Input
//           value={editingUser?.firstName}
//           onChange={(e) => {
//             setEditingUser((pre) => {
//               return { ...pre, firstName: e.target.value };
//             });
//           }}
//         />
//         <Input
//           value={editingUser?.lastName}
//           onChange={(e) => {
//             setEditingUser((pre) => {
//               return { ...pre, lastName: e.target.value };
//             });
//           }}
//         />
//         <Input
//           value={editingUser?.email}
//           onChange={(e) => {
//             setEditingUser((pre) => {
//               return { ...pre, email: e.target.value };
//             });
//           }}
//         />
//         <Select placeholder="Software Engineer"
//           value={editingUser?.role}
//           onChange={(value) => {
//             setEditingUser((pre) => {
//               return { ...pre, role: value };
//             });
//           }}
//         >
//           <Select.Option value="Super Admin">Super Admin</Select.Option>
//           <Select.Option value="Director">Director</Select.Option>
//           <Select.Option value="Administration Director">Administration Director</Select.Option>
//           <Select.Option value="Administration Assistant">Administration Assistant</Select.Option>
//           <Select.Option value="Team Manager">Team Manager</Select.Option>
//           <Select.Option value="Software Engineer">Software Engineer</Select.Option>
//         </Select>

//         <Select placeholder="Front-End"
//           value={editingUser?.building}
//           onChange={(value) => {
//             setEditingUser((pre) => {
//               return { ...pre, building: value };
//             });
//           }}>
//           <Option value="Front-End">Front-End</Option>
//           <Option value="Back-End">Back-End</Option>
//           <Option value="Full-Stack">Full-Stack</Option>
//         </Select>
//       </Modal>

//     </>
//   );
// }

// export default Profile;

//File Profile


//   const onUpload = async (e) => {
//     const base64 = await convertToBase64(e.target.files[0]);
//     setFile(base64);
// }
          {/* <UpdateUser setEditingUser={editingUser}/> */}
          {/* <Form 
          {...formItemLayout}                
          style={{
                    maxWidth: 600,
                }}>
                    <Form.Item label='Avatar' >
                    
                    <div className='profile flex justify-center py-4'>
                        <label htmlFor="profile">
                          
                            <img src={ file || editingUser?.profile || avatarDefault } alt="avatar" width={"100px"} />
                        </label>

                        <input  onChange={onUpload} type="file" id='profile' name='profile' accept='.jpeg, .png, .jpg'
                        />
                    </div>
                          
                </Form.Item>
          <Form.Item label= 'First Name'>
          <Input
          
          value={editingUser?.firstName}
          onChange={(e) => {
            setEditingUser((pre) => {
              return { ...pre, firstName: e.target.value };
            });
          }}
        />
          </Form.Item>
          <Form.Item label= 'Last Name'>
          <Input
            value={editingUser?.lastName}
            onChange={(e) => {
              setEditingUser((pre) => {
                return { ...pre, lastName: e.target.value };
              });
            }}
          />
          </Form.Item>
            <Form.Item label= 'Email'>
            <Input
            value={editingUser?.email}
            onChange={(e) => {
              setEditingUser((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
            </Form.Item>
            <Form.Item label='Role'>
            <Select placeholder="Software Engineer"
            value={editingUser?.role}
            onChange={(value) => {
              setEditingUser((pre) => {
                return { ...pre, role: value };
              });
            }}
            options={optionsRole}
          />
            </Form.Item>
          <Form.Item label ='Building'>
          <Select placeholder="Front-End"
            value={editingUser?.building}
            onChange={(value) => {
              setEditingUser((pre) => {
                return { ...pre, building: value };
              });
            }}
            options={optionBuilding}
          />
          </Form.Item>
        

          </Form> */}
       
    
  
// Pages ==> Profile
// const handeDelete = async (record) => {
  //   const id = record._id
  //   axiosInstance.delete(`users/${id}`)
  //     .then((response) => {
  //       message.success(response.data.message)
  //       return loadData()
  //     }).catch((error) => {
  //       message.error(error.data.message)
  //     });

  // };

  // const onToggle = async (record) => {
  //   const id = record._id
  //   axiosInstance.patch(`/users/toggle-enable/${id}`)
  //     .then((response) => {
  //       message.success(response.data.message)
  //       return loadData()
  //     }).catch((error) => {
  //       message.error(error.data.message)
  //     });

  // };

  // const onEditUser = async (record) => {
  //   setEditingUser(record)
  //   setIsEditing(true)
  // };
  // const onOkEditing = async () => {
  //   const id = editingUser._id;
  //   await axiosInstance.put(`users/${id}`, { ...editingUser, profile: file || editingUser?.profile || '' })
  //   .then((response) => {
  //     message.success(response.data.message)
  //     setFile('');
  //     return loadData();
  //   }).catch((error) => {
  //     message.error(error.data.message)
  //   });
  // };
  // const resetEditing = () => {
  //   setIsEditing(false);
  //   setEditingUser(null);
  // };
   {/* <Modal
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
        </Modal> */} 

        // Pages ==> UserProfile
        
  // const onEditUser = async (record) => {
  //   setEditingUser(record);
  //   setIsEditing(true);
  // };

  // const onOkEditing = async () => {
  //   const id = editingUser._id;
  //   await axiosInstance.put(`users/${id}`, { ...editingUser, profile: file || editingUser?.profile || '' })
  //     .then((response) => {
  //       message.success(response.data.message)
  //       loadData();
  //       setFile('');
  //     }).catch((error) => {
  //       message.error(error.data.message)
  //     });
  // };
  // const resetEditing = () => {
  //   setIsEditing(false);
  //   setEditingUser(null);
  // };
  {/* <Modal
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
    change={onEditUser}
  />
</Modal> */}