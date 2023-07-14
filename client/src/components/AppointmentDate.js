import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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