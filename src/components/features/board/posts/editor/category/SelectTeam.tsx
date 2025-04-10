"use client";
import Loading from "@/components/common/status/Loading";
import { useGetCategory } from "@/hooks/board/post/useGetCategory";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const SelectTeam = () => {
  const { data, isPending, isError } = useGetCategory();
  const { control } = useForm();
  if (!data) return <Loading />;
  const { team } = data[0];
  return (
    <div>
      <Controller
        control={control}
        name="category"
        render={({ field }) => (
          <select {...field} className="border border-main-1">
            <option className="bg-white" value="technology">
              기술
            </option>
            <option value="health">건강</option>
            <option value="finance">금융</option>
          </select>
        )}
      />
    </div>
  );
};

export default SelectTeam;
