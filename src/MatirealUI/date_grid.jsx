
import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



 export function Exdategrid () {
  const [selectedDate, setSelectedDate] = React.useState(null);

  return (
  
  <LocalizationProvider dateAdapter={AdapterDayjs}>
<DatePicker Label ="select date"/>



  </LocalizationProvider>
  );
};



