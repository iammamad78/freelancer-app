import React from "react";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";

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
        
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
