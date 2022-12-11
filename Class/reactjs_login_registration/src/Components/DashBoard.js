import React from "react";

export default function DashBoard() {
  return (
    <div className="container">
      <h1> Welcome {sessionStorage.getItem("fullname")} to DashBoard</h1>
    </div>
  );
}
