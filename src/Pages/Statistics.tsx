import React from 'react';
import {useState,useEffect} from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {  MuiPickersUtilsProvider,KeyboardDatePicker, } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import Chart from '../Components/Chart';



export default function Statistics() {

  const [firstDate , setFirstDate] = useState<Date | null>(new Date('2020-12-28T21:11:54'));
  const [secondDate , setSecondDate] = useState<Date | null>(new Date());

  const updateFirst = (date:Date | null) => {
    setFirstDate(date);
  };

  
  const updateSecond = (date:Date |null) => {
    setSecondDate(date);
  };

  return (
    <div className="flex  flex-col space-between space-y-16 mt-36">
      <h1 className="text-6xl text-black">Στατιστικά εμβολιασμού <br/> για τον COVID-19</h1>
      <div className="flex flex-col justify-start place-items-start pl-24 space-y-4">
        <h4 className="text-2xl text-black font-bold">Περιγραφή δεδομένων</h4>
        <p className="text-black">Στατιστικά εμβολιασμών κατά του COVID-19 ανά περιφερειακή ενότητα και ημέρα</p>
        <div className="flex flex-row space-x-4 items-center">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                margin="normal"
                id="date-picker-inline-first"
                label="From Date"
                format="dd/MM/yyyy"
                value={firstDate}
                onChange={updateFirst}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
            <Grid container justify="space-around">
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                margin="normal"
                id="date-picker-inline-second"
                label="To Date"
                format="dd/MM/yyyy"
                value={secondDate}
                onChange={updateSecond}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>

          </MuiPickersUtilsProvider>
        </div>
        <div className="w-full mx-auto p-4">
          <Chart />
        </div>

      </div>
      <br/>
    </div>
  )
}
