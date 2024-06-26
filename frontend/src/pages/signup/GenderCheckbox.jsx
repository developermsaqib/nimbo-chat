import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label htmlFor="" className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="radio"
            className="radio border-slate-900"
            name="gender"
          />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="" className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input
            type="radio"
            className="radio border-slate-900"
            name="gender"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

// STARTER CODE SNIPPET
// import React from "react";

// const GenderCheckbox = () => {
//   return (
//     <div className="flex">
//       <div className="form-control">
//         <label htmlFor="" className="label gap-2 cursor-pointer">
//           <span className="label-text">Male</span>
//           <input
//             type="radio"
//             className="radio border-slate-900"
//             name="gender"
//           />
//         </label>
//       </div>
//       <div className="form-control">
//         <label htmlFor="" className="label gap-2 cursor-pointer">
//           <span className="label-text">Female</span>
//           <input
//             type="radio"
//             className="radio border-slate-900"
//             name="gender"
//           />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderCheckbox;
