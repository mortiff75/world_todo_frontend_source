import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import moment from "moment";

export default function BasicDatePicker({ onChange, value }) {
  console.log(value);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DemoContainer components={["DatePicker"]}>
        <MobileDateTimePicker
          minDate={moment()}
          value={moment(value)}
          label="Basic date picker"
          onChange={onChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
