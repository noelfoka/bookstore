import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const clickEvent = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <h1>Categories</h1>
      <p>{status}</p>
      <button type="button" onClick={clickEvent}>Check status</button>
    </>
  );
};

export default Categories;
