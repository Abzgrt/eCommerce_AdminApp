import React, { useEffect } from "react";
import { Table } from "antd";
import { BiArrowBack } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getSingleBlog } from "../Features/Blog/blogSlice";
const columns = [
  {
    title: "SNo", 
    dataIndex: "key",
  },
  {
    title: "Blog Name",
    dataIndex: "name",
  },
  {
    title: "Description",
    dataIndex: "brand",
  },
  {
    title: "Count",
    dataIndex: "count",
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const ViewOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const blogId = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleBlog(blogId));
  }, []);
  const goBack = () => {
    navigate(-1);
  };
  const singleBlogState = useSelector((state) => state?.blog?.singleBlog);
  console.log(singleBlogState)
  const data1 = [];
  // for (let i = 0; i < singleBlogState?.orderItems?.length; i++) {
  //   data1.push({
  //     key: i + 1,
  //     name: orderState?.orderItems[i]?.product.title,
  //     brand: orderState?.orderItems[i]?.product.brand,
  //     count: orderState?.orderItems[i]?.quantity,
  //     amount: orderState?.orderItems[i]?.price,
  //     color: orderState?.orderItems[i]?.color,
  //     action: (
  //       <>
  //         <Link to="/" className=" fs-3 text-danger">
  //           <BiEdit />
  //         </Link>
  //         <Link className="ms-3 fs-3 text-danger" to="/">
  //           <AiFillDelete />
  //         </Link>
  //       </>
  //     ),
  //   });
  // }
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="mb-4 title">Blog</h3>
        <button
          className="bg-transpatent border-0 fs-6 mb-0 d-flex align-items-center gap-1"
          onClick={goBack}
        >
          <BiArrowBack className="fs-5" /> Go Back
        </button>
      </div>
      <div className="mt-5 bg-white p-4 d-flex gap-3 flex-column rounded-3">
        <div className="d-flex align-items-center gap-3">
           <h6 className="">Name:</h6>
          <p className="mb-2">{singleBlogState?.title}</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h6 className="">Description:</h6>
          <p className="mb-0" dangerouslySetInnerHTML={{__html:singleBlogState?.description}}>
            
          </p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h6 className="">Category:</h6>
          <p className="mb-2">
          {singleBlogState?.category}
          </p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h6 className="">Likes:</h6>
          <p className="mb-2">{singleBlogState?.likes?.length}</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h6 className="">Dislikes:</h6>
          <p className="mb-2">{singleBlogState?.dislikes?.length}</p>
        </div>
        <div className="d-flex align-items-center justify-content-around gap-3">
          <h6 className="mt-0">Image:</h6>
          <p><img src={singleBlogState?.images[0].url} className="img-fluid" style={{width:"600px", height:"700px"}}/></p>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;