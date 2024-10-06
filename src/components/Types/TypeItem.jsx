import React from "react";
import { useDispatch } from "react-redux";
import { openTypeModal } from "../../redux/modalSlice";

const TypeItem = ({ index, type }) => {
  const dispatch = useDispatch();

  return (
    <tr className="dot-line-buttom">
      <td className="w-[20%] p-padding_tbody text-tbody">{index + 1}</td>
      <td className="w-[20%] p-padding_tbody text-tbody">{type.type_name}</td>
      <td className="w-[20%] p-padding_tbody text-tbody">0</td>
      <td className="w-[20%] p-padding_tbody text-tbody">
        {type.isActive ? (
          <p>Active</p>
        ) : (
          <p className=" opacity-45">Inactive</p>
        )}
      </td>
      <td className="w-[20%] p-padding_tbody text-tbody text-right">
        <div className="flex gap-[10px] justify-end">
          <button
            className="button clip-path-button bg-error border-none text-white"
            onClick={() =>
              dispatch(
                openTypeModal({ action: "DELETE", type_id: type.type_id })
              )
            }
          >
            Delete
          </button>
          <button
            className="button custom"
            onClick={() =>
              dispatch(openTypeModal({ action: "EDIT", type_id: type.type_id }))
            }
          >
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TypeItem;
