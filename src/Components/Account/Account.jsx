import React from "react";
import fire from "../../config/firebase";

const Account = () => {
  const user = fire.auth().currentUser;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "400px",
      }}
    >
      <b>You are logged in as Anonymous..!</b>
      <p>Email : {user.email}</p>
      <b>
        <i>
          The above email is only visible to the administrator shown for account
          details ... !!
        </i>
      </b>
    </div>
  );
};

export default Account;
