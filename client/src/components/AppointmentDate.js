import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider, AdapterDayjs, DatePicker } from '@mui/x-date-pickers';


const AppointmentDate = () => {
  const [value, setValue] = React.useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disablePast
          label="Controlled picker"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />

    </LocalizationProvider>
  );
}

export default AppointmentDate;