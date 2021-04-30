import React from 'react';
import {useState,useEffect} from 'react';


export default function useFetch(date1, date2) {
  
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");
  const [data,setData] = useState([]);
  
   
  const fetchData = async () =>{
    
    const url = `https://data.gov.gr/api/v1/query/mdg_emvolio?date_from=${date1}&date_to=${date2}`;
    
    try{
      setLoading(true);
      const response = await fetch(url,{
          method:'GET',
          headers:{
            'Content-Type': 'application/json',
            "Authorization": `Token ${process.env.REACT_APP_EMVOLIO_API_KEY}`
          },
          data:{
            date_from:date1,
            date_to:date2
          }
        }
      );

      const result = await response.json();
      setData(result);

    }catch(error){
      setError(error);
    }

    setLoading(false);

  }


  return {loading,data,error};
}
