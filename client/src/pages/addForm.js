import React, { useState } from 'react';
import { Form, Input, Button, Radio,Alert } from 'antd';
import dataService from '../services';

export const AddDrugForm = () => {
  const [form] = Form.useForm();
  const [drugData,setData] = useState({name:"",quantity:"",units:""});


  const formHandler = (e) =>{
     e.preventDefault();
     setData({...drugData,[e.target.name]:e.target.value});
     console.log("xxx",drugData)

 }



  const addDrug = () => {
    dataService.create(drugData)
      .then(response => {
        console.log(response.data);
        

      })
      .catch(e => {
        console.log(e);
      });
  };


  return (
    <Form

      layout='inline'
      form={form}

    >
      <Form.Item name="name">
        <Input placeholder="input placeholder" name="name" onChange={formHandler}  />
      </Form.Item>
      <Form.Item name="quantity">
        <Input placeholder="input placeholder" name="quantity" onChange={formHandler}  />
      </Form.Item>
      <Form.Item name="units">
        <Input placeholder="input placeholder" name="units" onChange={formHandler}  />
      </Form.Item>
      <Form.Item>
        <Button onClick={addDrug} type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};
