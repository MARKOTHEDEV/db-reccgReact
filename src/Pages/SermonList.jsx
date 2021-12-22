import React from "react";
import Header from "../Components/Header";
import { DepList } from "../Components/SubComponents";
import heroBg3 from "../Images/hero3.jpg";
import Preloader from "../Components/Preloader"
import useAxios from "../Components/useAxios";
import pbg from "../Images/Pbg.jpg";




// isMinisterDataLoading==false && ministerData.length!=0?

const SermonList=()=>{
    const{"axiosError":sermonError,"axiosIspending":isSermonDataLoading,"axiosData":sermonData,"axiosErrorMessage":sermonErrorMessage } =useAxios('sermons/');


    return (
            <>
      <Header bgImage={heroBg3} homeTitle="All Sermons" />
      <Preloader show={isSermonDataLoading?true:false} />
            

      <div
        className="bg-no-repeat bg-center py-10"
        style={{ background: `url(${pbg})` }}
      >
        <div className="myContainer">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                  
          {
            sermonData.length!=0?
            sermonData.map(data=>(
              <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20" key={data.id}>
      
            <div>
                <h2 class="text-gray-800 text-3xl font-semibold">{data.title}</h2>
            
            </div>
            <div class="flex justify-end mt-4">
                <a href={`/sermonsDetail/${data.id}`} class="text-xl font-medium text-indigo-500">Read more</a>
            </div>
            </div>
            ))
            :""
          }
          
                    
                    
            <div>


            </div>


          </div>
        </div>
      </div>
            
            </>

    )
}

export default SermonList