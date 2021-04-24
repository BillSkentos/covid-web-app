import React from 'react';
import Lottie from 'react-lottie';
import ContactAnimation from '../Animations/37147-contact-us.json';
import {useAppContext} from '../Components/ContextProvider';
import {useForm} from 'react-hook-form';


interface UserInput {
  firstName:string,
  lastName:string,
  email:string,
  message:string,
}

export default function Contact() {
  
  const {width} =  useAppContext();
  const {register,handleSubmit,formState:{errors}} = useForm<UserInput>();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ContactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  }

  const submitFunction = handleSubmit((data:UserInput)=>{
    alert('Your message has been sent .');
    window.location.reload();
  })

  return (
   <div className="-mt-12">
      <form
        onSubmit={submitFunction}
        className="maxW-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl text-FQAItem lg:text-5xl font-bold leading-tight">Επικοινωνήστε μαζί μας </h2>
          </div>
          <div className="mt-8 text-center">
            {width >=1024 && <Lottie options={defaultOptions} width={450} height={450}/> }
            {(width <1024 && width >=768) && <Lottie options={defaultOptions} width={350} height={350}/> }
            {width <768 && <Lottie options = {defaultOptions} width = {200} height={200} />}
          </div>
        </div>
        <div className="">
          <div>
            <span className="uppercase text-sm text-FQAItem font-bold ">First Name</span>
            <input className="w-full focus:bg-gray-100 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              {...register("firstName" , {required:true})}
              type="text" placeholder="" />
              {errors.firstName && <span className="text-red-400 text-sm"> First Name is required .  </span> }
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-FQAItem font-bold">Last Name</span>
            <input className="w-full focus:bg-gray-100 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              {...register("lastName" , {required:true})}
              type="text" placeholder="" />
              {errors.lastName && <span className="text-red-400 text-sm"> Last Name is required .  </span> }

          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-FQAItem font-bold">Email</span>
            <input className="w-full focus:bg-gray-100 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              {...register("email" , {required:true})}

              type="email" />
              {errors.email && <span className="text-red-400 text-sm"> Enter a correct email.  </span> }

          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-FQAItem font-bold">Message</span>
            <input
              {...register("message" , {required:true , minLength:10})}
              className="w-full h-32 focus:bg-gray-100 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></input>
              {errors.message && <span className="text-red-400 text-sm"> Message should be at least 10 characters .  </span> }
          </div>
          <div className="mt-8">
            <button
              className="uppercase text-sm font-bold trackingWide bg-indigo-500 hover:bg-indigo-400 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  

  )
}
