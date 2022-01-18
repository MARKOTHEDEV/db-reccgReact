import { Link } from "react-router-dom"
import pastor from "../Images/pastor.png";
import pbg from "../Images/Pbg.jpg";
import belief from "../Images/belief.png";
import useAxios from "../Components/useAxios";
import Preloader from "../Components/Preloader"
import Header from "../Components/Header";
import heroBg3 from "../Images/hero3.jpg";


const AllMinisters = ()=>{

  const{"axiosError":departmentsError,"axiosIspending":isMinisterDataLoading,"axiosData":ministerData,"axiosErrorMessage":ministerErrorMessage } =useAxios('all-ministers/');


    return (

<>
<Header bgImage={heroBg3} homeTitle="See All Our Ministers" />

      <Preloader show={isMinisterDataLoading?true:false} />







        <div
        className="bg-no-repeat bg-center py-10"
        style={{ background: `url(${pbg})` }}
      >
        <div className="myContainer">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{
isMinisterDataLoading==false && ministerData.length!=0?
ministerData.map(data=>(
<div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20" key={data.id}>
                    <div class="flex justify-center md:justify-end -mt-16">
                        <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={data.minister_image}/>
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">{data.name}</h2>
                        <p class="mt-2 text-gray-600">
                          {data.paragraph}
                        </p>
                    </div>
                    <div class="flex justify-end mt-4">
                        <a  class="text-xl font-medium text-indigo-500">{data.position}</a>
                    </div>
                    </div>


)):""
}


                    



                    
            <div>


            </div>
          </div>
        </div>
      </div>

      </>
    )
}

export default AllMinisters