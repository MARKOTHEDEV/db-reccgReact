import React from "react";
import Header from "../Components/Header";
import { DepList } from "../Components/SubComponents";
import heroBg3 from "../Images/hero3.jpg";
import Preloader from "../Components/Preloader"
import useAxios from "../Components/useAxios";



const Departments = () => {


  const{"axiosError":departmentsError,"axiosIspending":isdepartmentDataLoading,"axiosData":departmentData,"axiosErrorMessage":departmentErrorMessage } =useAxios('all_church_groups/');
  // console.log(departmentData)
  return (
    <>
      <Header bgImage={heroBg3} homeTitle="All Departments" />


          <Preloader show={isdepartmentDataLoading?true:false} />


      

      <section class=" mx-auto   px-4 sm:px-6 lg:px-4 py-12" style={{backgroundColor:"#ccf6ff"}}>
  

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">

  {
          isdepartmentDataLoading==false && departmentData.length!=0?departmentData.map(data=>(
              <DepList
              title={data.heading}
              desc={data.content}
              phone_number={data.phone_number}
            />
          )):""

        }

        </div>
        



</section>









    </>
  );
};

export default Departments;

// child comp




// <div>
//       <Header bgImage={heroBg3} homeTitle="All Departments" />
 
//     </div>