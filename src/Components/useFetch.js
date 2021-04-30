import React from 'react';
import {useState,useEffect} from 'react';
import {chunkArray} from '../Components/functions';

export default function useFetch(date1, date2) {
  
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState("");
  const [data,setData] = useState([]);
  const [totalVacc , setTotalVacc] = useState(0);
   
  const fetchData = async () =>{
    const url = `https://data.gov.gr/api/v1/query/mdg_emvolio?date_from=${date1}&date_to=${date2}`;
    
    try{
      setLoading(true);
      setData([]);
      const response = await fetch(url,{
          method:'GET',
          headers:{
            'Content-Type': 'application/json',
            "Authorization": `Token ${process.env.REACT_APP_EMVOLIO_API_KEY}`
          },
        }
      );

      const result = await response.json();
      let res =  chunkArray(result,74);
      setData(res);
      // console.log('the data is ' +data);
      // setTotalVacc(data[data.length-1].reduce((acc,itm)=>{
      //     return acc + itm.totalvaccinations
      // },0));


    }catch(error){
      setError(error);
    }

    setLoading(false);

  }

  useEffect(()=>{
    fetchData();
  },[date1,date2])


  return {loading,data,error};
}
