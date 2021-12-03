import { Link } from "react-router-dom"
import pastor from "../Images/pastor.png";
import pbg from "../Images/Pbg.jpg";
import belief from "../Images/belief.png";


const AllMinisters = ()=>{



    return (









        <div
        className="bg-no-repeat bg-center py-10"
        style={{ background: `url(${pbg})` }}
      >
        <div className="myContainer">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                    <div class="flex justify-center md:justify-end -mt-16">
                        <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={pastor}/>
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">Pastor Aro</h2>
                        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                    </div>
                    <div class="flex justify-end mt-4">
                        {/* <a href="#" class="text-xl font-medium text-indigo-500">John Doe</a> */}
                    </div>
                    </div>



                    
            <div>


            </div>
          </div>
        </div>
      </div>
    )
}

export default AllMinisters