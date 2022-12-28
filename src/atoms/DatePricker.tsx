import * as React from "react";
import TextField from "@mui/material/TextField";
// import DateAdapter from "@mui/lab/AdapterDateFns";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";

export default function StaticDatePickerDemo({...props}) {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <div className="mui-date-picker">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          {...props}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
