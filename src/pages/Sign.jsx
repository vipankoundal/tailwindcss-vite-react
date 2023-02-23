import React from "react";

const Sign = () => {
  return (
    <section className="flex justify-center items-center">
      <form>
        <div className="mb-6">
          <input
            type="text"
            className="w-[21rem] rounded-lg bg-white py-1 px-3 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 ring-2 ring-indigo-200"
            placeholder="User name"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            className="w-[21rem] rounded-lg bg-white py-1 px-3 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 ring-2 ring-indigo-200"
            placeholder="Password"
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

export default Sign;
