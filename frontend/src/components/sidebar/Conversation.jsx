import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online me-1">
          <div className="w-12 rounded-full">
            <img src="profile_pic/profile.jpg" alt="user image" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">muhammadsaqib</p>
            <span className="text-xl">💖</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversation;

// STARTER CODE SNIPPET
// import React from "react";

// const Conversation = () => {
//   return (
//     <>
//       <div className="flex items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//         <div className="avatar online me-1">
//           <div className="w-12 rounded-full">
//             <img src="profile_pic/profile.jpg" alt="user image" />
//           </div>
//         </div>

//         <div className="flex flex-col flex-1">
//           <div className="flex gap-3 justify-between">
//             <p className="font-bold text-gray-200">muhammadsaqib</p>
//             <span className="text-xl">💖</span>
//           </div>
//         </div>
//       </div>
//       <div className="divider my-0 py-0 h-1" />
//     </>
//   );
// };

// export default Conversation;
