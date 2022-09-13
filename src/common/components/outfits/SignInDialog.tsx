import React from "react";

interface SignInDialog {
  handleClose(): Promise<void>;
}

const SignInDialog: React.FC<SignInDialog> = ({ handleClose }) => {
  return (
    <>
      {/* BackDrop */}
      <div
        onClick={handleClose}
        onKeyDown={handleClose}
        className="fixed inset-0 w-full h-full z-30 pin bg-black opacity-75"
        role="presentation"
      />

      {/* Contents */}
      <div className="fixed inset-0 w-full p-8 z-50 md:mx-auto md:w-1/2 lg:w-1/3  ">
        <div className="shadow-lg bg-white rounded-lg p-8">
          <div className="flex justify-end mb-6">
            <button type="button" onClick={handleClose}>
              <span className="mr-2">Close</span>
              <span>
                <i className="fa fa-times" />
              </span>
            </button>
          </div>

          <h1 className="text-center text-2xl text-green-dark">Login</h1>

          <form className="pt-6 pb-2 my-2">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="email"
                  type="text"
                  placeholder="Email Address"
                />
                Email Address
              </label>
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password"
              >
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
                Password
              </label>
            </div>
            <div className="block md:flex items-center justify-between">
              <div>
                <button
                  className="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded border-b-4 border-green-darkest"
                  type="button"
                >
                  Sign In
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
      </div>
    </>
  );
};

export default SignInDialog;
