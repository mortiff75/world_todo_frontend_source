import { InputAdornment, TextField } from "@mui/material";

const MyInput = ({ label, type, name, icon, value, onChange }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      id={name}
      name={name}
      required
      type={type}
      onChange={onChange}
      value={value}
      fullWidth
      InputProps={{
        endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
      }}
    />
  );
};

export default MyInput;
