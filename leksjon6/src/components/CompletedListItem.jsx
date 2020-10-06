import React from "react";

const CompletedListItem = ({ completed }) => {
  var today = new Date();
  var date =
    today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();

  return (
    <div className="table">
      {completed.length > 0 &&
        completed.map((item) => (
          <>
            <p className="border">{item.title}</p>
            <p className="border">{item.author}</p>
            <p className="border">{item.desc}</p>
            <p className="border">{date}</p>
          </>
        ))}
    </div>
  );
};

export default CompletedListItem;
