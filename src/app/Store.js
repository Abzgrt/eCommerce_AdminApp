import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../Features/Auth/authSlice";
import customerReducer from "../Features/Customer/customerSlice";
import productReducer from "../Features/Product/productSlice";
import brandReducer from "../Features/Brand/brandSlice";
import prodCatReducer from "../Features/ProdCategory/prodCategorySlice";
import blogReducer from "../Features/Blog/blogSlice";
import blogCatReducer from "../Features/BlogCategory/blogCategorySlice";
import colorReducer from "../Features/Color/colorSlice";
import enquiryReducer from "../Features/Enquiry/enquirySlice";
import orderReducer from "../Features/Auth/authSlice";
import uploadReducer from "../Features/Upload/uploadSlice";
import couponReducer from "../Features/Coupon/couponSlice";


export const Store = configureStore({
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        product: productReducer,
        brand: brandReducer,
        prodCategory: prodCatReducer,
        blog: blogReducer,
        blogCategory: blogCatReducer,
        color: colorReducer,
        enquiry: enquiryReducer,
        order: orderReducer,
        upload: uploadReducer,
        coupon: couponReducer,
    },
}); 

  