import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('~ data', data);
    // posting data
  };
  return (
    <div>
      <div
        style={{ background: '#FFFFF', boxShadow: '0 0 5px 0 gray' }}
        className="d-block w-100"
      >
        <h5 className="p-3 text-center fw-bold">Add Products</h5>
      </div>

      {/* Add Product Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-75 mx-auto px-3 px-lg-5 bg-dark p-4"
      >
        <h2 className=" text-center text-white py-2 fw-bold">Add Product</h2>
        <input
          type="text"
          className=" form-control "
          placeholder="Watch Model Name"
          {...register('modelName', { required: true })}
        />
        <br />
        <input
          type="text"
          className=" form-control "
          placeholder="Brand Name"
          {...register('brand', { required: true })}
        />
        <br />

        <input
          type="number"
          className=" form-control "
          placeholder="Watch Price"
          {...register('pricing', { required: true })}
        />
        <br />
        <input
          type="number"
          className=" form-control "
          placeholder="Watch Rating out of 5"
          {...register('rating', { required: true })}
        />
        <br />
        <input
          type="text"
          className=" form-control "
          placeholder="watchImg"
          {...register('watchImg', { required: true })}
        />
        <br />
        <textarea
          type="text"
          className=" form-control "
          placeholder="Watch Details"
          {...register('productDescription', { required: true })}
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input
          className="btn btn-primary text-uppercase container-fluid px-5"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProducts;
