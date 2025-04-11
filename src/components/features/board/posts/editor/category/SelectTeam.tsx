// "use client";
// import Loading from "@/components/common/status/Loading";
// import { useGetCategory } from "@/hooks/board/post/useGetCategory";
// import React from "react";
// import { Controller, useForm } from "react-hook-form";

// const SelectTeam = () => {
//   const { data, isPending, isError } = useGetCategory();
//   const { control } = useForm();
//   if (!data) return <Loading />;
//   const { team } = data[0];
//   return (
//     <div>
//       <Controller
//         name='team'
//         control={control}
//         rules={}
//       />
//     </div>
//   );
// };

// export default SelectTeam;
