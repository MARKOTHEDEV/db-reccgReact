import { useState,useEffect } from "react"



const useGetYouTubeVideo =(getHowMany=5)=>{
    let channelID ='UC8NebOyUmvNWRKmE_dekq-g'
    const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=${getHowMany}&order=date&type=video&key=AIzaSyC25rMPK8tc3iIeAigQtbtcDvfOKviD3TI`


    const [youtubeVideosData,setYoutubeVideosData] = useState([]);
    const [isPending,setIsPending] =useState(true);
    const [error,setError] = useState(false);


    useEffect(()=>{


        fetch(youtubeUrl)
        .then(resp=>resp.json())
        .then(resp=>{
    
    
        setYoutubeVideosData(resp.items.map((eachData)=>{
        return {'videoID':eachData.id.videoId,'title':eachData.snippet.title,
                    "datePlublished":eachData.snippet.publishedAt}
    }))
    
    setIsPending(false)
    setError(false)
    
        })
        .catch(error=>{
    setIsPending(false)
            
            setError(true)
        })

        


    },[])



    

    return {
        youtubeVideosData,
        isPending,
        error
    }


}

export default useGetYouTubeVideo