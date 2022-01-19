import React,{useEffect,useState} from 'react';
import {Table,Button } from 'antd';
import 'antd/dist/antd.css';
import dataService from '../services';
import {AddDrugForm} from './addForm';




export const List = ()=>{
  const [drugList,setDrugList]=useState([]);
  const [formStatus,setStatus]=useState(false);

  const sharedOnCell = (_, index) => {
  if (index === 4) {
    return { colSpan: 0 };
  }
};

const formHandler = (e) =>{
   e.preventDefault();
   setStatus(true)

}
//API call
const getDrugs = () => {
    dataService.getAll()
      .then(response => {
        setDrugList(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

const columns = [
  {
    title: 'Name',
    dataIndex: 'NAME',
    render: (text, row, index) => <a>{text}</a>,
    onCell: (_, index) => ({
      colSpan: index < 4 ? 1 : 5,
    }),
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    onCell: sharedOnCell,
  },
  {
    title: 'Units',
    colSpan: 2,
    dataIndex: 'units',
    onCell: (_, index) => {
      if (index === 2) {
        return { rowSpan: 2 };
      }
      // These two are merged into above cell
      if (index === 3) {
        return { rowSpan: 0 };
      }
      if (index === 4) {
        return { colSpan: 0 };
      }
    },
  }
];




useEffect(()=>{
  getDrugs()
})


  return(
    <>
    <Table columns={columns} dataSource={drugList} bordered />
    {formStatus?(  <AddDrugForm/>):(<Button type='primary' onClick={formHandler}>Add Drug</Button>)
    }
    </>
  )
}
