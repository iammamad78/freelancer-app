import React from "react";
import FilterDropDown from "../../../ui/FilterDropDown";
import useCategory from "../../../hooks/useCategory";

function ProjectsHeader() {
  const { transformedCategories } = useCategory();
  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>

      <FilterDropDown
        filterField="category"
        options={[
          {
            value: "all",
            label: "همه دسته بندی ها",
          },
          ...transformedCategories,
        ]}
      />
    </div>
  );
}

export default ProjectsHeader;
