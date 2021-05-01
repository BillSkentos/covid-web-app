import {useState,useEffect} from 'react';
import {dateToNum} from '../Components/functions';

export default function useFetch(date1:string, date2:string) {
  
  const [loading,setLoading] = useState<boolean>(true);
  const [error,setError] = useState<string>("");
  const [data,setData] = useState<[]>([]);
   
  const fetchData = async () =>{
  
    const url = `https://data.gov.gr/api/v1/query/mdg_emvolio?date_from=${date1}&date_to=${date2}`;
  
    try{
      setLoading(true);
      setData([]);
      let response = await fetch(url,{
          method:'GET',
          headers:{
            "Authorization": `Token ${process.env.REACT_APP_EMVOLIO_API_KEY}`
          },
        }
      );

      // Check HTTP success
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const res:[] = await response.json();
      res.sort((a:any,b:any)=> dateToNum((a.referencedate).slice(1,10)) - dateToNum((b.referencedate).slice(1,10) ));
      setData(res);
    }catch(error){
      setError(error);
    } finally{
       setLoading(false);
    }

  }

  useEffect(()=>{
    fetchData();
  },[date1,date2]);



  return {loading,data,error};

}
