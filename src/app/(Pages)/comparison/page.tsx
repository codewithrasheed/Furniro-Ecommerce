import React from "react";
import PageBanner from "@/components/PageBanner";
import Support from "@/components/Support";
import ComparisonDetail from "@/components/ComparisonDetails";
const Comparison = () => {
  return (
    <>
      <PageBanner title={"Product Comparison"} desc={"Home > Comparison"} />
      <ComparisonDetail />
      <Support />
    </>
  );
};

export default Comparison;
