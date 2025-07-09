import React, { useState } from "react";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import { BiMessageSquareEdit } from "react-icons/bi";

const statusStyles = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function UsersRow({ user, index }) {
  const { status, email, name, phoneNumber, role } = user;
  const [open, setOpen] = useState(false);
  console.log(user);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{role}</td>
      <td>
        <span className={`badge ${statusStyles[status].className}`}>
          {statusStyles[status].label}
        </span>
      </td>
      <td>
        <Modal
          title="تغییر وضعیت کاربر"
          open={open}
          onClose={() => setOpen(false)}
        >
          {/* <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          /> */}
        </Modal>
        <button onClick={() => setOpen(true)}>
          <BiMessageSquareEdit className="w-5 h-5 text-primary-800 hover:text-secondary-500" />
        </button>
      </td>
    </Table.Row>
  );
}

export default UsersRow;
