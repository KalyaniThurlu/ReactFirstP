
import React from "react";

export function ExDblclick() {
    function handleDblClick() {
        window.open(
            "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$",
            "_blank",
            "width=300,height=400"
        );
    }

    function handleContextMenu(e) {
        e.preventDefault();
        alert("Right Click Not Allowed");
    }

    return (
        <div className="container-fluid" onContextMenu={handleContextMenu}>
            <h2>Button Events</h2>
            <img src=   "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$"
              onDoubleClick={handleDblClick} width="100" height="100" />
            <p>Double Click to View Large - Right Click is disabled on this page</p>
        </div>
    );
}
