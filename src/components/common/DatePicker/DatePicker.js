import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  DatePicker as MuiDatePicker,
} from '@material-ui/pickers';

const DatePicker = () => {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  return (
    <Grid container justify="space-around">
      <MuiDatePicker
        margin="normal"
        id="mui-pickers-date"
        format="YYYY년 MM월 DD일"
        value={selectedDate}
        onChange={handleDateChange}
        disablePast="true"
      />
    </Grid>
  );
};
export default DatePicker;
