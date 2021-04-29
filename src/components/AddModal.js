import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import { addCompany } from "../actions/index";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: "#FFF",
  },
}));

const AddModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [newCompany, setNewCompany] = useState("");
  const [newName, setNewName] = useState("");
  const [newNote, setNewNote] = useState("");
  const addNewCompany = (e) => {
    e.preventDefault();
    props.addCompany({
      id: Math.random(),
      company: newCompany,
      name: newName,
      note: newNote,
    });
    setNewCompany("");
    setNewName("");
    setNewNote("");
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add New Company
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={addNewCompany}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Add a company:</h2>
              <TextField
                onChange={(e) => setNewCompany(e.target.value)}
                id="standard-basic"
                label="Company"
              />
              <Divider light />
              <TextField
                onChange={(e) => setNewName(e.target.value)}
                id="standard-basic"
                label="Name"
              />
              <Divider light />
              <TextField
                onChange={(e) => setNewNote(e.target.value)}
                id="standard-basic"
                label="Notes"
              />
            </div>
            <button onClick={handleClose}> submit</button>
          </form>
        </Fade>
      </Modal>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCompany: (company) => dispatch(addCompany(company)),
  };
};
export default connect(null, mapDispatchToProps)(AddModal);
