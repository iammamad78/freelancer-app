import React, { useState } from "react";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import { BiMessageSquareEdit } from "react-icons/bi";
import ChangeProposalStatus from "./ChangeProposalStatus";

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

function ProposalRow({ proposal, index }) {
  const { status, user } = proposal;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>
        <p>{truncateText(proposal.description, 50)}</p>
      </td>
      <td>{proposal.duration} روز</td>
      <td>{proposal.price}</td>
      <td>
        <span className={`badge ${statusStyles[status].className}`}>
          {statusStyles[status].label}
        </span>
      </td>
      <td>
        <Modal
          title="تغییر وضعیت درخواست"
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <BiMessageSquareEdit className="w-6 h-6 text-primary-800 hover:text-secondary-500" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
