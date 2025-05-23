import { Alert, Snackbar } from "@mui/material";

const Toast = ({ message, open, severity }) => {
  return (
    <Snackbar open={open} autoHideDuration={3}>
      <Alert severity={severity} variant="filled" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
