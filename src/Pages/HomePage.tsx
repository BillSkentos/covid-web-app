import {useState} from 'react';
import Lottie from 'react-lottie';
import DoctorAnimation from '../Animations/53912-doctor-consultation-online-animation.json';
import {Link} from 'react-router-dom';
import Carousel from '../Components/Carousel';
import VideoSlider from '../Components/VideoSlider.js';

export default function HomePage() {
  
  const [data,setData] = useState([]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: DoctorAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  }

  
  return (
    <>
    <div className = "p-4 flex lg:flex-row flex-col items-center justify-center md:mt-28 lg:mt-12 mt-36">
      <div className="lg:w-1/2 w-full flex flex-col space-y-8 items-center">
        <h1 className="mt-12 text-lg sm:mt-4 font-mono sm:pl-12 sm:text-4xl text-bold text-FQAItem">Κλέισε ραντεβού για εμβολιασμό και <br/> δες πληροφορίες για τον κωροναϊό εδώ
        </h1>
        <Link to="/FQA" className="shadow-buttonShadow  w-32 h-12 font-sans sm:ml-12 text-base text-center rounded-md py-3  font-bold cursor-pointer tracking-wider text-white   bg-lightBlue hover:bg-orange transition ease-out duration-700">
          Ξεκινήστε
        </Link>

      </div>
      <div className="lg:w-1/2 w-full "> <br/>
        <div className="hidden lg:block">
          <Lottie options = {defaultOptions} width={500} height={500} />
        </div>
        <div className="hidden lg:hidden md:block">
          <Lottie options = {defaultOptions} width={400} height={400} />
        </div>
        <div className="md:hidden block">
          <Lottie options = {defaultOptions} width={300} height={300} /> 
        </div>
      </div>
    </div> <br/>
    <Carousel /> <br/>
    <VideoSlider /> 
    <div className="flex items-center justify-center">
      <img width="540" height="540" src="https://covid19.gov.gr/wp-content/uploads/2020/03/ethelontis-site-omzu8wccaavysccne1b931jzizqqh4qlb9pzpq48wo.png" className="attachment-large size-large" alt="Γίνε Εθελοντής" srcSet="https://covid19.gov.gr/wp-content/uploads/2020/03/ethelontis-site-omzu8wccaavysccne1b931jzizqqh4qlb9pzpq48wo.png 540w, https://covid19.gov.gr/wp-content/uploads/2020/03/ethelontis-site-omzu8wccaavysccne1b931jzizqqh4qlb9pzpq48wo-300x300.png 300w, https://covid19.gov.gr/wp-content/uploads/2020/03/ethelontis-site-omzu8wccaavysccne1b931jzizqqh4qlb9pzpq48wo-150x150.png 150w" sizes="(max-width: 540px) 100vw, 540px" />
    </div>

    </>
  );

}
