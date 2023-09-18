import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteBlogCategory,
  getBlogCategories,
  resetState,
} from "../Features/BlogCategory/blogCategorySlice";
import CustomModal from "../Components/CustomModal";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const BlogCatList = () => {
  const [open, setOpen] = useState(false);
  const [blogCatId, setblogCatId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setblogCatId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getBlogCategories());
  }, []);
  const blogCatState = useSelector((state) => state.blogCategory.blogCategories);
  const data1 = [];
  for (let i = 0; i < blogCatState.length; i++) {
    data1.push({
      key: i + 1,
      title: blogCatState[i].title,
      action: (
        <>
          <Link
            to={`/admin/blog-category/${blogCatState[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(blogCatState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  const deleteABlogCategory = (e) => {
    dispatch(deleteBlogCategory(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getBlogCategories());
    }, 100);
  };
  return (
    <div>
      <h3 className="mb-4 title">Blog Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteABlogCategory(blogCatId);
        }}
        title="Are you sure you want to delete this blog category?"
      />
    </div>
  );
};

export default BlogCatList;