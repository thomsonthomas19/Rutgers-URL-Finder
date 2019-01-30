import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control my-1" style={{borderColor: "#343a40"}} {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control my-1" rows="10" style={{borderColor: "#343a40"}}{...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10, backgroundColor: "#cc0033", color: "white", border: "none", borderRadius: "5px" }} className="my-1">
      {props.children}
    </button>
  );
}
