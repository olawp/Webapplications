import React from "react";
import CompletedListItem from "./CompletedListItem";

const CompletedList = ({ completeArr }) => {
  return (
    <div>
      <div className="table toprow">
        <div>Title</div>
        <div>Author</div>
        <div>Description</div>
        <div>Completed date</div>
      </div>
      <div id="listElements">
        <CompletedListItem completeArr={completeArr} />
      </div>
    </div>
  );
};

export default CompletedList;
