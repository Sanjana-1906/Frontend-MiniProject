import React from "react";
function Header() {
  return (
    <div
      style={({ minHeight: "4vh" }, { backgroundColor: "rgb(32, 178, 170)" })}
      className="p-3"
    >
      <div className="mx-5 d-flex justify-content-end">
        <input type="text" id="search" placeholder="search"></input>
        <button type="button" className="mx-4 px-2 btn btn-dark">
          search
        </button>
      </div>
    </div>
  );
}
export default Header;
