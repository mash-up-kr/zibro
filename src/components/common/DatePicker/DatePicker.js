import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  DatePicker as MuiDatePicker,
} from '@material-ui/pickers';

// TODO: 스타일, 변경 버튼 클릭시 모달 띄우게 수정
const DatePicker = () => {
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
