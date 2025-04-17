import Loading from "@/components/common/status/Loading";
import { useGetCategory } from "@/hooks/board/post/useGetCategory";
import { PostRequestType } from "@/types/post";
import { Control, Controller, FieldErrors } from "react-hook-form";
import Select from "react-select";
import { categoryStyle } from "./categoryStyle";
import { TEAM_VALIDATION } from "@/constants/validation/postValidation";

type SelectTeamProps = {
  control: Control<PostRequestType, string>;
  errors: FieldErrors<PostRequestType>;
};

const SelectTeam = ({ control, errors }: SelectTeamProps) => {
  const { data } = useGetCategory();
  if (!data) return <Loading />;

  const options = data.map((category) => {
    return {
      value: category.id,
      label: category.team,
    };
  });

  return (
    <>
      <div className="relative w-[225px]">
        <label className="absolute left-3 top-[8px] bg-white text-[14px] text-main-1 font-semibold z-10">
          항목
        </label>
        <Controller
          control={control}
          name="team"
          rules={TEAM_VALIDATION}
          render={({ field: { onChange, value, ref } }) => (
            <Select
              inputId="team"
              options={options}
              ref={ref}
              value={options.find((option) => option.value === value) || null}
              onChange={(option) => onChange(option?.value)}
              placeholder="목장 지원비"
              styles={categoryStyle}
              isSearchable={false}
            />
          )}
        />
      </div>
      {errors?.team && (
        <span className="inline-block ml-[4px] mt-[2px] text-red">
          {errors.team.message}
        </span>
      )}
    </>
  );
};

export default SelectTeam;
