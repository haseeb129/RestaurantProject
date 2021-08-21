import React from "react";
import SingleItem from "./SingleItem";

const CurrentOrder = (props) => {
  return (
    <div className="wordWrap">
      <div
        className="orangeBackground "
        style={{ padding: "20px", minHeight: "100vh" }}
      >
        <div className="singleRowWrapper">
          <h2>Total Price : £ {props?.state?.totalPrice}</h2>
          {props?.state?.userItems?.map((element) => {
            return <SingleItem element={element} {...props} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CurrentOrder;
