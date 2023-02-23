import React from "react";

const Register = () => {
  return (
    <section className="flex justify-center items-center">
      <form>
        <div className="mb-6">
          <input
            type="text"
            className="w-[21rem] rounded-lg bg-white py-1 px-3 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 ring-2 ring-indigo-200"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="w-[21rem] rounded-lg bg-white py-1 px-3 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 ring-2 ring-indigo-200"
            placeholder="Password"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="w-[21rem] rounded-lg bg-white py-1 px-3 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 ring-2 ring-indigo-200"
            placeholder="Retype password"
          />
        </div>

        <div className="input">
          <button type="button" className="add-button">
            submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Register;
