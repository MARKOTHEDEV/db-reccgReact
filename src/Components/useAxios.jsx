import axios from "axios"
import {useEffect,useState } from "react"





const useAxios =(url="")=>{
    const [axiosError,setAxiosError] = useState(false);
    const [axiosIspending,setAxiosIspending] = useState(true);
    const [axiosData,setAxiosData] = useState([]);
    const [axiosErrorMessage,setAxiosErrorMessage]= useState("")
    let mainUrl = 'https://rccgbackend.herokuapp.com/api/'


        useEffect(() => {   

        setAxiosIspending(true)
        setAxiosError(false)
            axios.get(mainUrl+url)
            .then((response) => {

                    setAxiosError(false)
                    setAxiosIspending(false)
                    setAxiosData(response.data.data)

              },
               (error) => {
                
                let errorMessage =''


                try {   
                    errorMessage = (error.response.detail || error.response.data)
                } catch (error) {
                    errorMessage = error.message
                }
                setAxiosError(true)
                setAxiosIspending(false)
                setAxiosErrorMessage(errorMessage)

              });


            
        }, [url])


return {
axiosError,axiosIspending,axiosData,axiosErrorMessage
}

}


export default useAxios