import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import Header from "../Components/Header";
import { DepList } from "../Components/SubComponents";
import heroBg3 from "../Images/hero3.jpg";
import useAxios from "../Components/useAxios";



const OurBeliefDetail = ()=>{

  const { id } =useParams()


  const{"axiosError":believeError,"axiosIspending":isbelieveLoading,"axiosData":believeData,"axiosErrorMessage":believeErrorMessage } =useAxios(`our_belief_detail/${id}/`);


    return (
        <>
      <Header bgImage={heroBg3} homeTitle="Our Beliefs" />
        
        
        
      <section class=" mx-auto   px-4 sm:px-6 lg:px-4 py-12" style={{backgroundColor:"#ccf6ff"}}>
  

  <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">

 {
    isbelieveLoading==false && believeData.length!=0?believeData.all_content.map(data=>( 
        <DepList key={data.id}
        title={data.heading}
        desc={data.paragraph}
        phone_number={""}
      />
     )):""

  } 
  </div>
  



</section>
        </>
    )
}




export default OurBeliefDetail
