import React from "react";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import CardActions from "@material-ui/core/CardActions";
import DeleteIcon from "@material-ui/icons/Delete";
import UpvoteIcon from "@material-ui/icons/EjectOutlined";
import CardContent from "@material-ui/core/CardContent";
import CheckCircleSharpIcon from "@material-ui/icons/CheckCircleSharp";
import ClearSharpIcon from "@material-ui/icons/ClearSharp";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dashboard from "../dashboard/Dashboard";
import useStyles from "./Styles";
import fire from "firebase";

const db = fire.firestore();

const AllQuestions = ({ Question, unAnswered, id }) => {
  const checkProgress = () => {
    db.collection("collection1").doc(id).update({
      unAnswered: !unAnswered,
    });
  };

  const deleteQue = () => {
    db.collection("collection1").doc(id).delete();
  };

  const classes = useStyles();
  return (
    <Container fixed>
      <Dashboard />
      {/* <p>You can see all questions here!</p> */}
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            User : Anonymous
          </Typography>
          <Typography variant="h5" component="h2">
            {Question}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Answered :{" "}
            {unAnswered ? (
              <ClearSharpIcon style={{ marginBottom: "3px" }} />
            ) : (
              <CheckCircleSharpIcon style={{ marginBottom: "3px" }} />
            )}
          </Typography>
          <Button size="small">See Answer...</Button>
        </CardContent>
        <CardActions>
          <Button size="small">
            {" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <UpvoteIcon />
              <span>Upvote</span>
            </div>
          </Button>
          <Button size="small" onClick={deleteQue}>
            {" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <DeleteIcon />
              <span>Delete</span>
            </div>
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default AllQuestions;
