import React from "react";

type Props = {
  index: number;
  startIndex: number;
  nodesPerRow: number;
};

const ListItem = ({ index, startIndex, nodesPerRow }: Props) => {
  return (
    <div key={index} className="  h-[400px] p-2">
      <div className=" h-full w-full bg-blue-600">
        {index + startIndex * nodesPerRow}
      </div>
    </div>
  );
};

export default ListItem;
