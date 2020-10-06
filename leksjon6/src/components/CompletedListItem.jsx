import React from "react";

const CompletedListItem = ({ completeArr }) => {
  var today = new Date();
  var date =
    today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();

  return (
    <div className="table">
      {completeArr.length > 0 &&
        completeArr.map((item) => (
          <>
            <p>{item.title}</p>
            <p>{item.author}</p>
            <p>{item.desc}</p>
            <p>{date}</p>
          </>
        ))}
    </div>
  );
};

export default CompletedListItem;
