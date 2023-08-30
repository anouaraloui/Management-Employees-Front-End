import { CheckCircleOutlined, CloseCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Space, Table, Button } from 'antd';
import dayjs from 'dayjs';
import jwtDecode from 'jwt-decode';
import Decision from '../../daysOff/Decision';
import DeleteOne from '../../daysOff/DeleteOne';
import EditRequest from '../../daysOff/Update';

const DataDays = ({ scrollData, loadData,  modifiedData,  loading, onDetails }) => {
  const token = localStorage.getItem('token')
  const decodedToken = jwtDecode(token);
  const userRole = decodedToken.role;
  const role = userRole;
  const roles = ['Super Admin', 'Director', 'Team Manager'];
  const urlDoc = window.location.pathname;
  const listDecision = (urlDoc === '/dashboard/listDays');
  const columns = [
    {
      title: 'Date',
      children: [
        {
          title: 'Start Day',
          dataIndex: 'startDay',
          align: "center",
          render: (date) => { return <p> {dayjs(date).format('YYYY-MM-DD')} </p> },
          fixed: 'left',
          width: 90

        },
        {
          title: 'End Day',
          dataIndex: 'endDay',
          align: "center",
          render: (date) => { return <p> {dayjs(date).format('YYYY-MM-DD')} </p> },
          fixed: 'left',
          width: 90
        },
      ]
    },
    {
      title: 'Type',
      dataIndex: 'type',
      align: "center",
      width: 70,
      fixed: 'left'
    },
    {
      title: 'Days',
      dataIndex: 'reqDayOff',
      align: "center",
      width: 70,
      fixed: 'left',
      sorter: (a, b) => a.reqDayOff - b.reqDayOff,
    },
    {
      title: 'Justification',
      dataIndex: 'justificationSick',
      align: "center",
      width: 200
    },
    {
      title: 'Manager',
      children: [
        {
          title: 'Status',
          align: "center",
          render: (status) => {
            return <p>{status.decisionManager.status

              ? <CheckCircleOutlined
                style={{
                  color: 'green',
                  fontSize: 30,
                }}
              />
              :
              <CloseCircleOutlined
                style={{
                  color: 'red',
                  fontSize: 30,
                }}
              />
                ? null
                : null
            }
            </p>
          },
          width: 75
        },
        {
          title: 'Justification',
          align: "center",
          width: 200,
          render: (justification) => justification.decisionManager.justification
        },
      ],
    },
    {
      title: 'Director',
      children: [
        {
          title: 'Status',
          align: "center",
          render: (status) => {
            return <p>{status.decisionDirector.status
              ? <CheckCircleOutlined
                style={{
                  color: 'green',
                  fontSize: 30,
                }}
              />
              :
              <CloseCircleOutlined
                style={{
                  color: 'red',
                  fontSize: 30,
                }}
              />
                ? null
                : null
            }</p>
          },
          width: 75

        },
        {
          title: 'Justification',
          align: "center",
          width: 200,
          render: (justification) => justification.decisionDirector.justification
        },
      ],
    },
    {
      title: 'Status Request',
      dataIndex: 'statusReq',
      align: "center",
      render: (statusReq) => {
        return <p>{statusReq ? <CheckCircleOutlined
          style={{
            color: 'green',
            fontSize: 30,
          }}
        />
          :
          <CloseCircleOutlined
            style={{
              color: 'red',
              fontSize: 30,
            }}
          />
            ? null
            : null
        }</p>
      },
      width: 75

    },
    {
      title: 'Operation',
      dataIndex: 'Operation',
      align: "center",
      render: (_, record) => {
        if (roles.includes(role) && listDecision && modifiedData.length >= 1) {
          console.log("role", role);
          return <Space>
            <Decision
              loadData={loadData}
              record={record} />
            <Button onClick={() => {
              onDetails(record);
            }} >Details
              <InfoCircleOutlined />
            </Button>
          </Space>
        } else return <Space>
          <EditRequest
            record={record}
            loadData={loadData}
          />
          <DeleteOne
            record={record}
            loadData={loadData}
          />
        </Space>
      },
      width: 170,
      fixed: 'right'
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={modifiedData}
        bordered
        loading={loading}
        scroll={scrollData}
      />
    </>
  )
}

export default DataDays;
