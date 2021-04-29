import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect, useDispatch } from "react-redux";
import { AddModal } from "./AddModal";
import { deleteCompany } from "../actions";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CardCompany = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      {props.company.map((comp) => {
        return (
          <>
            <CardContent key={comp.id}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {comp.company}
              </Typography>
              <Typography variant="h5" component="h2">
                {comp.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {comp.note}
              </Typography>
              <button onClick={() => dispatch(deleteCompany(comp.id))}>
                {" "}
                Delete
              </button>
            </CardContent>
          </>
        );
      })}
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    company: state.AppReducers.companies,
  };
};
export default connect(mapStateToProps)(CardCompany);
