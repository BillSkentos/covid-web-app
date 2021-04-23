import React from 'react';
import {questions} from '../Components/QuestionList';
import {integerToString} from '../Components/functions';


export default function FQA() {

  return (
    <div className= "w-full flex items-center flex-col space-y-4 bg-FQA p-8 ">
    
      <h2 className="text-blue-800 font-bold text-2xl mt-8">Συχνές Ερωτήσεις </h2>
      <div className="font-sans shadow-md md:w-3/5 w-full bg-FQAItem ">
          {
            questions.map((q,index)=>{
              let currentClass = index === 0 ? 'tab w-full overflow-hidden border-t':'tab w-full overflow-hidden border-t-8';
              let currentId = 'tab-multi-' + integerToString(index);
              return (
                <div className = {currentClass} key= {currentId}>
                  <input className='absolute opacity-0' type="checkbox" name="tabs" id = {currentId} />
                  <label className='block p-5   leading-7 sm:text-sm lg:text-lg md:text-base cursor-pointer text-white' htmlFor={currentId}>
                    {q.question}
                  </label>
                  <br/> 
                  <div className='tab-content overflow-hidden border-l-2 bg-gray-100 border-FQAItem  leading-normal'>
                    <p className='p-5'>
                      {q.answer}
                    </p>
                  </div>
                </div>  
              )
            })
          }

        </div>
      </div>
  )
}
