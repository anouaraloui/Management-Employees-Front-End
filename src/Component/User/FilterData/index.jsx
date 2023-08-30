import React, { useEffect, useState } from 'react';
import FormFilter from '../../FormFilter/index';
import { axiosInstance } from '../../../api';

function FilterData({ onFilterData, filterUsersData }) {
  const [gridData, setGridData] = useState([]);
  const [totalUsersData, setTotalUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [createdAtAfter, setCreatedAtAfter] = useState('');
  const [createdAtBefore, setCreatedAtBefore] = useState('');
  const [limit, setLimit] = useState('');
  const [sortBy, setSortBy] = useState('');
  const dateNow = new Date();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const response = await axiosInstance.get(`/users?page=1&limit=30&sortBy=createdAt&createdAtBefore=${dateNow}&createdAtAfter=2023-01-01`);
    setGridData(response.data.users);
    setTotalUsers(response.data.totalUsers);
    setLoading(false);
  };


  const onFilter = async () => {
    setLoading(true);
    axiosInstance.get(`/users?page=1&limit=${limit}&sortBy=${sortBy}&createdAtBefore=${createdAtBefore}&createdAtAfter=${createdAtAfter}`)
      .then((response) => {
        onFilterData(response.data.users);
        setLoading(false);
        filterUsersData(response.data.users.length);
      })
  };
  const clearForm = () => {
    setLoading(true);
    filterUsersData(totalUsersData);
    onFilterData(gridData);
    setCreatedAtAfter('');
    setCreatedAtBefore('');
    setLimit('');
    setSortBy('');
    setLoading(false);
  };
  const getCreatedAfter = (createdAtAfter) => { setCreatedAtAfter(createdAtAfter) };
  const getSortBy = (sortBy) => { setSortBy(sortBy) };
  const getLimit = (limit) => { setLimit(limit) };
  const getCreatedBefore = (createdBefore) => { setCreatedAtBefore(createdBefore) };
  return (
    <>
      <FormFilter
        onFilter={onFilter}
        clearForm={clearForm}
        setCreatedAtAfter={getCreatedAfter}
        setCreatedAtBefore={getCreatedBefore}
        setLimit={getLimit}
        setSortBy={getSortBy}
      />
    </>
  );
}

export default FilterData;