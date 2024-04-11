import React from "react";
import OrderPopupHTML from "./OrderPopup.html"; // Import the HTML file

const OrderPopup = () => {
    return <div dangerouslySetInnerHTML={{ __html: OrderPopupHTML }} />;
};

export default OrderPopup;
