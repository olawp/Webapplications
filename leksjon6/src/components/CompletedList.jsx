import React from "react";
import CompletedListItem from "./CompletedListItem";

const CompletedList = ({ completed }) => {
  return (
    <div>
      <div className="table toprow">
        <div>Title</div>
        <div>Author</div>
        <div>Description</div>
        <div>Completed date</div>
      </div>
      <div id="listElements">
        <CompletedListItem completed={completed} />
      </div>
    </div>
  );
};

export default CompletedList;
