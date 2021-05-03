import {useState,useEffect} from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {  MuiPickersUtilsProvider,KeyboardDatePicker, } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import Chart from '../Components/Chart';
import useFetch from '../Components/useFetch';
import {chunkArray,dateToNum} from '../Components/functions';



export default function Statistics() {

  const [firstDate , setFirstDate] = useState<Date | null>(new Date('2020-12-28T21:11:54'));
  const [secondDate , setSecondDate] = useState<Date | null>(new Date());

  const {data,loading,error} = useFetch(firstDate!.toISOString().slice(0, 10),secondDate!.toISOString().slice(0, 10));
  
  // let test = data.sort((a:any,b:any)=> dateToNum((a.referencedate).slice(0,10)) - dateToNum((b.referencedate).slice(0,10) ));
  
  const updateFirst = (date:Date | null) => {
    setFirstDate(date);
  };

  
  const updateSecond = (date:Date |null) => {
    setSecondDate(date);
  };



  return (
    <div className="flex  flex-col space-between space-y-16 mt-36">
      <h1 className="p-8 text-lg md:text-6xl text-black">Στατιστικά εμβολιασμού <br/> για τον COVID-19</h1>
      <div className=" flex flex-col justify-center place-items-center  space-y-4">
        <h4 className="text-2xl text-black font-bold">Περιγραφή δεδομένων</h4>
        <p className="text-black">Στατιστικά εμβολιασμών κατά του COVID-19 ανά περιφερειακή ενότητα και ημέρα</p>
        <div className="pl-2 pr-2 flex flex-row space-x-4 items-center mx-auto ">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container>
            <KeyboardDatePicker
                minDate = {new Date("2020-12-28")}
                disableToolbar
                disabled={loading}
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
                maxDate = {new Date()}
                disableToolbar
                disabled={loading}
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
        <div className="w-full mx-auto p-4 ">
          <Chart  
            isLoading = {loading} 
            covidData = {chunkArray(data,74)}
            hasError = {error}
            from = {firstDate}
            to = {secondDate}
          />
        </div>

      </div>
      <br/>
    </div>
  )
}
