import React, { useState } from "react";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { useStyles } from "./ContactStyles";
import Button from "@material-ui/core/Button";
import fire from "../../config/firebase";
import cogoToast from "cogo-toast";
import NavbarHome from "../navbar/NavbarHome";

const db = fire.firestore();

const Contact = () => {
  const userinfo = {
    name: "",
    email: "",
    message: "",
  };

  const [user, setUser] = useState(userinfo);
  const classes = useStyles();

  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("contacts")
      .add({
        name: user.name,
        email: user.email,
        message: user.message,
      })
      .then(() => {
        cogoToast.success("Form Submitted Successfully");
      })
      .catch((err) => {
        cogoToast.error(err.message);
      });

    setUser((user) => {
      return {
        ...user,
        name: "",
        email: "",
        message: "",
      };
    });
  };

  return (
    <div>
      <NavbarHome />
      <div className={classes.full}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h1 className={classes.heading}>Contact Us 🤳</h1>
          <label>Name</label>
          <input
            className={classes.input}
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={onChange}
          />

          <label>Email</label>
          <input
            className={classes.input}
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={onChange}
          />

          <label>Message</label>
          <textarea
            className={classes.input}
            placeholder="Message"
            name="message"
            value={user.message}
            onChange={onChange}
          ></textarea>

          <Button className={classes.button} type="submit">
            Submit <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
