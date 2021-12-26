import React, { useState, useEffect } from "react";
import Dashboard from "../dashboard/Dashboard";
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import fire from "../../config/firebase";
import useStyles from "./Styles";
import axios from "axios";
import AllQuestions from "../AllQuestions/AllQuestions";
import firebase from "firebase";

const db = fire.firestore();

const AskaQuestion = () => {
  const url = "http://localhost:3000/Say-It-Safe/allquestions";

  const classes = useStyles();
  const [AskaQuestion, setAskaQuestion] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    //console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`You are trying to add ${value}`);

    db.collection('todos/${auth.currentUser.uid}/mytodo/').add({
      unAnswered: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      Question: value,
    });
    setValue("");
  };

  const getQuestions = () => {
    db.collection("collection1").onSnapshot((querySnapshot) => {
      setAskaQuestion(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          Question: doc.data().Question,
          unAnswered: doc.data().unAnswered,
        }))
      );
    });
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div>
      <Dashboard />
      <div
        style={{
          display: "flex",
          margin: "auto",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <MDBInput
            type="textarea"
            label="Ask your query here......"
            rows="3"
            className={classes.textarea}
            onChange={handleChange}
            value={value}
          />
          <MDBBtn
            rounded
            outline
            color="success"
            type="submit"
            // onClick={handleSubmit}
          >
            Submit
          </MDBBtn>
        </form>
        <ul>
          <li style={{ marginTop: "50px" }}>
            <b>
              Now Go To All Question Section to See Weather Your Question Has
              Been Posted Successfully!!
            </b>
          </li>
        </ul>
        {AskaQuestion.map((que) => (
          <AllQuestions
            Question={que.Question}
            unAnswered={que.unAnswered}
            id={que.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AskaQuestion;
