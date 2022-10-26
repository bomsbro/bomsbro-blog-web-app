import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ModalPortal from "./ModalPortal";

interface SignInDialog {
  handleClose(): Promise<void>;
}

const SignInDialog: React.FC<SignInDialog> = ({ handleClose }) => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setSignInData(data);
  };

  return (
    <ModalPortal>
      {/* BackDrop */}
      <div
        onClick={handleClose}
        onKeyDown={handleClose}
        className="fixed inset-0 w-full h-full z-30 bg-black opacity-75"
        role="presentation"
      />

      {/* Contents */}

      <div className="fixed z-50 inset-0 h-3/4 m-auto shadow-lg bg-white rounded-lg p-8 w-4/5 md:w-1/2 xl:w-2/6">
        <div className="flex justify-end mb-6">
          <button type="button" onClick={handleClose}>
            <span className="mr-2">Close</span>
            <span>
              <i className="fa fa-times" />
            </span>
          </button>
        </div>

        <h1 className="text-center text-2xl text-green-dark">Sign in to Blog</h1>

        <form className="pt-6 pb-2 my-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email Address
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="email"
                type="email"
                placeholder="Email Address"
                {...register("email", { required: true })}
              />
            </label>
            {errors.email && <span className="text-xs text-red-500">This field is required</span>}
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </label>
            {errors.password && (
              <span className="text-xs text-red-500">This field is required</span>
            )}
          </div>
          <div className="block md:flex items-center justify-between">
            <div>
              <button
                className="bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded border border-green-600"
                type="submit"
              >
                Sign in
              </button>
            </div>

            <div className="mt-4 md:mt-0">
              <a href="#" className="text-green no-underline">
                Forget Password?
              </a>
            </div>
          </div>
        </form>
      </div>
    </ModalPortal>
  );
};

export default SignInDialog;
