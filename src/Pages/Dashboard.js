import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from '@ant-design/plots';
import {Table} from "antd";
import { getMonthlyData } from '../Features/Auth/authSlice';
const Columns = [
  {
    title: "SNO",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "status",
  }
];
const Dashboard = () => {
    const dispatch = useDispatch();
   
    const monthlyDataState = useSelector((state) => state.auth.monthlyOrder);
    const [monthlyData, setMonthlyData] = useState([]);

useEffect(() => {
  dispatch(getMonthlyData());
}, []);

useEffect(() => {
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let data = [];
  for(let i = 0; i < monthlyDataState?.length; i++){
    const element = monthlyDataState[i];
    data.push({type: monthNames[element?._id?.month], sales: element?.count});
  }
  setMonthlyData(data); // Move this line outside the loop
}, [monthlyDataState]);
    const data = [
      {
        type: 'Jan',
        sales: 0,
      },
      {
        type: 'Feb',
        sales: 10,
      },
      {
        type: 'Mar',
        sales: 15,
      },
      {
        type: 'Apr',
        sales: 15,
      },
      {
        type: 'May',
        sales: 20,
      },
      {
        type: 'Jun',
        sales: 20,
      },
      {
        type: 'July',
        sales: 25,
      },
      {
        type: 'Aug',
        sales: 30,
      },
      {
        type: 'Sep',
        sales: 30,
      },
      {
        type: 'Oct',
        sales: 35,
      },
      {
        type: 'Nov',
        sales: 40,
      },
      {
        type: 'Dec',
        sales: 50,
      },
    ];
    const config = {
      data: data,
      xField: 'type',
      yField: 'sales',
      color: ({type}) =>{
        return "#ffd333"
      },
      yAxis: {
        label: {
          position: 'left',
          style: {
            fill: 'white',
            opacity: 1,
          },
        },
      },
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
      },
      meta: {
        type: {
          alias: 'Month',
        },
        sales: {
          alias: 'Income',
        },
      },
    };
  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className=" desc">Total</p>
            <h4 className="mb-0 sub-title">$100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6> <BsArrowDownRight />22%</h6>
            <p className="mb-0 desc">Compared to Appril 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className=" desc">Total</p>
            <h4 className="mb-0 sub-title">$150</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className='green'> <BsArrowUpRight />32%</h6>
            <p className="mb-0 desc">Compared to Appril 2023</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className=" desc">Total</p>
            <h4 className="mb-0 sub-title">$200</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className='green'> <BsArrowUpRight />62%</h6>
            <p className="mb-0 desc">Compared to Appril 2024</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-5"> Income Statics</h3>
        <div>
          <Column {...config} colspan={1}/>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4"> Recent Orders</h3>
        <div>
          <Table
                columns={Columns}
                dataSource={monthlyData}/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
