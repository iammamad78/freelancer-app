import React from "react";
import FilterDropDown from "../../../ui/FilterDropDown";
import useCategory from "../../../hooks/useCategory";
import Filter from "../../../ui/Filter";

const sortOptions = [
  {
    label: "جدیدترین",
    value: "latest",
  },
  {
    label: "قدیمی‌ترین",
    value: "earliest",
  },
];

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

function ProjectsHeader() {
  const { transformedCategories } = useCategory();
  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>
      <div className="flex items-center gap-x-8">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropDown filterField="sort" options={sortOptions} />
        <FilterDropDown
          filterField="category"
          options={[
            {
              value: "ALL",
              label: "همه دسته بندی ها",
            },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
