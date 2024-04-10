import React, { useEffect } from 'react';
import CustomInput from '../Components/CustomInput';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login, userSelector } from '../Features/Auth/authSlice';

let schema = yup.object().shape({
  email: yup.string().email('Invalid Email!').required('Email is Required'),
  password: yup.string().required('Password is Required'),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: 'abhope2022@gmail.com',
      password: 'Ab@mernstack!',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      navigate('/admin');
    } else {
      navigate('');
    }
  }, [isSuccess]);

  return (
    <div className="py-5" style={{ background: '#ffd333', minHeight: '100vh' }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center title">Login</h3>
        <p className="text-center">Login to your account to continue</p>
        <div className="error text-center">{message.message === 'Rejected' ? 'You are not admin!' : ''}</div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="email"
            label="Email Address"
            id="email"
            val={formik.values.email}
            onChng={formik.handleChange('email')}
          />
          <div className="errors mt-2">
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>
          <CustomInput
            type="password"
            name="password"
            label="password"
            id="pass"
            val={formik.values.password}
            onChng={formik.handleChange('password')}
          />
          <div className="errors mt-2">
            {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
          </div>
          <div className="mb-3 text-end">
            <Link to="/forgot-password" className="text-decoration-none">
              Forgot Password ?
            </Link>
          </div>
          <button
            className="border-0 px-3 py-2 mt-2 text-white text-center fw-bold w-100 text-decoration-none fs-5"
            style={{ background: '#ffd333' }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;