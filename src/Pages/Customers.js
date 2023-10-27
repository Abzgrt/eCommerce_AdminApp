import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getUsers} from '../Features/Customer/customerSlice';
import {Table} from "antd";
const Columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    }
  
  ];
  const Customers = () => {
    const dispatch = useDispatch();
     useEffect(() => {
     dispatch(getUsers())
     }, []);
     
    
    const customerState = useSelector((state) => state.customer.customers);
    console.log(customerState)
    const data1 = [];
    for(let i = 0;  i<customerState.length; i++){
      if(customerState[i].role !== "admin") {
        data1.push({
          key: i + 1 ,
          name: customerState[i].firstname + " " + customerState[i].lastname,
          email: customerState[i].email,
          phone: customerState[i].phone,
        });
      }
    }
 
  return (
    <div>
      <h3 className="mb-4 title">Customers</h3>
      <div>
      <Table
            columns={Columns}
            dataSource={data1}/>
      </div>
    </div>
  )
}

export default Customers
