import React, { createContext, useContext, useEffect, useState } from 'react'
import { axiosInstance } from '../api';
//import LayoutApp from './LayoutApp';
//import DataUserContext from '../../Helpers/userContext';


const DataUserContext = createContext(null)

const useDataUserContext = () => {
	const dataContext = useContext(DataUserContext);
	if(!dataContext) throw new Error('useUserContext must be used within a AuthProvider');
	return dataContext;
}


function UserDataContextProvider({ children }) {
  const [gridData, setGridData] = useState([])
  const [totalUsersData, setTotalUsers] = useState(null)
  const [loading, setLoading] = useState(false)
  const dateNow = new Date()

  const loadData = async () => {
    setLoading(true)
    const response = await axiosInstance.get(`/users?page=1&limit=30&sortBy=createdAt&createdAtBefore=${dateNow}&createdAtAfter=2023-01-01`)
    setGridData(response.data.users)
    setTotalUsers(response.data.totalUsers)
    setLoading(false)

  };
  useEffect(() => {
    loadData();
  }, []);

  const modifiedData = gridData.map((item) => ({
    ...item,
    key: item._id
  }));

  const values = [ gridData, setGridData, loading, setLoading, totalUsersData, setTotalUsers, loadData, modifiedData ]
  return (
    <>
      <DataUserContext.Provider value={values} >
        {/* <LayoutApp /> */}
        {children}
      </DataUserContext.Provider>
    </>
  )
}

export { useDataUserContext }
export default UserDataContextProvider;