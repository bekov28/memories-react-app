import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: "600px",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: '300px'
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
