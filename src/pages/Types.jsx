import React from "react";
import ForceAdmin from "../components/Modal/ForceAdmin";
import TypeList from "../components/Types/TypeList";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import TypeModal from "../components/Modal/TypeModal";

const Types = () => {
  return (
    <div>
      <SectionHeading subHeading="Types" heading="Danh sách loại bài viết" />
      <TypeList />

      {/* Modal */}
      <ForceAdmin />
      <TypeModal />
    </div>
  );
};

export default Types;
