import Lottie from 'react-lottie';
import {useForm} from 'react-hook-form';
import {useEffect,useState} from 'react';
import DoctorsAnimation from '../Animations/14916-prueba-doctores-freepik.json';

interface DateForm {
  fname:string,
  sname:string,
  mail:string,
  phone:string,
  AMKA:string,
  rantevou:Date,
}


function addDays(days:number):Date {
  let today  = new Date();
  today.setDate(today.getDate() + days);
  return today;
}

function generateRandomDate(min:number,max:number):string{
  
  const random = Math.floor(Math.random() * (max - min)) + min;
  return addDays(random).toISOString().slice(0,-8);

}

export default function EmvolioDate() {

  const {register,handleSubmit,formState:{errors}} = useForm<DateForm>();
  const [loading,setLoading] = useState<boolean>(false);
  const [dateTime,setDateTime] = useState<string>(new Date().toISOString().slice(0, -8));

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: DoctorsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  }


  const sendRequestAfterSubmit = handleSubmit(async (data:DateForm)=>{

     if(window.confirm('Είστε σίγουροι για το ραντεβού που θέλετε να κλείσετε ;')){
        const url = 'https://us-central1-unipi-aps.cloudfunctions.net/emvolioDate';
        try{
          setLoading(true);
          const response = await fetch(url,{
            method:'POST',
            mode: 'cors',
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
          });
          if (response.status===200){
            alert('Το ραντεβού έκλεισε με επιτυχία !');
          }else if (response.status===400){
            alert('Το αίτημα απορριφθηκε.');
          }
        }catch(error){
          alert("Παρουσιάστηκε σφάλμα .");
        }finally{
          setLoading(false);
        }
     }else{
       window.location.replace("/"); 
     }
   
  });
  
  useEffect(()=>{
    setTimeout(()=>{
     if(window.confirm('Θα θέλατε να συμπληρωθεί ένα ραντεβού αυτόματα ;')){
        setDateTime(generateRandomDate(new Date().getDay() ,new Date().getDay()+ 19));
        window.scrollTo({
          top:500,
          behavior:'smooth'
        })
     }else{
      window.scrollTo({
        top:100,
        behavior:'smooth'
      })
     }
    },500);
  },[]);

  return (
  <div className="mt-12 p-2">
    <form
      onSubmit = {sendRequestAfterSubmit}
      className="maxW-screen-xl mt-24 px-8 grid gap-16 grid-cols-1 lg:grid-cols-2  md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-gray-900 rounded-lg shadow-lg">
      <div className="flex items-center flex-col justify-between">
        <div> <br/>
          <h2 className=" text-2xl md:text-4xl text-FQAItem lg:text-5xl font-bold leading-tight">Συμπληρώστε τα στοιχεία σας για να κλείσετε ραντεβού. </h2>
        </div>
        <div className="mt-2">
            <div className="xl:block hidden">
              <Lottie  options={defaultOptions} width={600} height={350}/>
            </div>
            <div className="lg:block hidden xl:hidden">
              <Lottie  options={defaultOptions} width={405} height={250}/>
            </div>
            <div className="hidden md:block lg:hidden">
              <Lottie  options={defaultOptions} width={650} height={400}/>
            </div>
            <div className="md:hidden block">
              <Lottie options={defaultOptions} width={220} height={250}/>
            </div>
        </div>
      </div>
      <div className="">
        <div>
          <span className="uppercase text-sm text-FQAItem font-bold ">ΟΝΟΜΑ</span>
          <input className="w-full focus:bg-gray-100 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline "
            disabled = {loading}
            {...register("fname" , {required:true})}
            type="text" placeholder="" />
            {errors.fname && <span className="text-red-400 text-sm"> Το όνομα είναι υποχρεωτικό.  </span> }
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-FQAItem font-bold">Επιθετο</span>
          <input className="w-full focus:bg-gray-100 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            disabled = {loading}
            {...register("sname" , {required:true})}
            type="text" placeholder="" />
            {errors.sname && <span className="text-red-400 text-sm"> Το επίθετο είναι υποχρεωτικό .  </span> }

        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-FQAItem font-bold">Email</span>
          <input className="w-full focus:bg-gray-100 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            disabled = {loading}
            {...register("mail" , {required:true})}
            type="email" 
            />
            {errors.mail && <span className="text-red-400 text-sm"> Συμπληρώστε το σωστό email  </span> }

        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-FQAItem font-bold">ΤΗΛΕΦΩΝΟ</span>
          <input
            type = "text"
            {...register("phone" , {required:true})}
            disabled = {loading}

            className="w-full focus:bg-gray-100 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" />
            {errors.phone && <span className="text-red-400 text-sm"> Το τηλέφωνο δεν είναι στη σωστή μορφή .  </span> }
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-FQAItem font-bold">AMKA</span>
          <input
            type = "text"
            disabled = {loading}
            {...register("AMKA" , {required:true , minLength:10})}
            className="w-full focus:bg-gray-100 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" />
            {errors.AMKA && 
              <span className="text-red-400 text-sm"> 
                Το ΑΜΚΑ πρέπει να περίεχει τουλάχιστον 10 χαρακτήρες . 
              </span> 
            }
        </div>
        <div className="mt-8">
          <label htmlFor = "rantevou" className="uppercase text-sm text-FQAItem font-bold">ΗΜΕΡΟΜΗΝΙΑ ΚΑΙ ΩΡΑ</label>
          <input 
            {...register("rantevou" , {required:true})}
            className ="w-full focus:bg-gray-100 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none 
            focus:shadow-outline"
            min={new Date().toISOString().slice(0, -8)}
            max = {addDays(20).toISOString().slice(0,-8)}
            value = {dateTime}
            onChange = {(e)=>setDateTime(e.target.value)}
            type = "datetime-local"
            disabled = {loading}
          />

          {errors.rantevou && 
            <span className="text-red-400 text-sm"> 
              Η ημερομηνία και ώρα είναι υποχρεωτικές . 
           </span> 
          }
        </div>
        <div className="mt-8">
          <button
            disabled = {loading}
            className="uppercase text-sm font-bold trackingWide bg-indigo-500 hover:bg-indigo-400 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
            ΥΠΟΒΟΛΗ
          </button>
        </div>
      </div>
    </form>
  </div>
  )
}
