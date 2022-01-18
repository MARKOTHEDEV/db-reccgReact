


const CardWithImage=({ data })=>{


    return (

  <div class="max-w-lg shadow-lg rounded overflow-hidden m-4 sm:flex">
    <div class="h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden" 
// style={{backgroundImage:"url('https://unsplash.it/804/800')"}}
style={{backgroundImage:`url(${data.image})`}}
>
    </div>  
    
    {/* <!-- card-content --> */}
     <div class="px-6 py-4" style={{display:"flex",flexDirection:'column',alignItems:"center",justifyContent:"center"}}>
      <h5 class="mb-2 font-black"
    style={{fontWeight:"400",}}
    >{ data.name }</h5>
      <p class="mb-4 text-grey-dark text-sm">
        {/* Learning Tailwind is incredibly easy. The team has done a wonderful job with the documentation. This is pretty amazing, I must say. */}
    {/* { data.name } */}
    </p>
      
       {/* <!-- button --> */}
      <button class="py-3 px-6 bg-purple hover:bg-purple-light text-white font-bold rounded-full mt-1 mb-2">
        Hey, click me.
       </button>
       
    </div>

  </div>
  
  )
}

export default CardWithImage