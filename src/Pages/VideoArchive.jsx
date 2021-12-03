import {Sermon } from "../Components/SubComponents";
import Navbar from "../Components/Navbar";
import useGetYouTubeVideo  from "../Components/useYouTubeVideo";



const VideoArchive = ()=>{

  const { youtubeVideosData , isPending ,error} = useGetYouTubeVideo(30);


    return (

        <>
    <Navbar />

 {/* sermon */}
 <div className="pt-16 pb-6 mt-14" style={{ backgroundColor: "#FF4370" }}>
        <div className="myContainer">
          <h2 className="pb-7 font-bold text-2xl" style={{'color':"white"}}>ALL SERMONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-16">
            {
                isPending?"":youtubeVideosData.map(data=>(
                  <Sermon
                  topic={data.title}
                  bText="Isaiah 61:1"
                  date={(()=>{

                    let date = new Date(data.datePlublished) 
                    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
                  })()}
                  vId={data.videoID}
                />
                ))
            }
           
              
            
          </div>

        
        </div>
      </div>




        </>

    )
}

export default VideoArchive