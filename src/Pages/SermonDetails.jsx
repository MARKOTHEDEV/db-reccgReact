import useAxios from "../Components/useAxios";
import {useParams,useHistory} from "react-router-dom";
import Preloader from "../Components/Preloader"
import Navbar from "../Components/Navbar"


const SermonDetails = ()=>{
	const {pk} = useParams();
	console.log(pk)
	const history = useHistory()
 // 
    const{"axiosError":sermonError,"axiosIspending":isSermonDataLoading,"axiosData":sermonData,"axiosErrorMessage":sermonErrorMessage } =useAxios(`sermon_detail/${pk}/`);

	console.log(sermonData)
    return (
        <>
		<Navbar/>
      <Preloader show={isSermonDataLoading?true:false} />

        	<div class="container w-full md:max-w-7xl mx-auto pt-20">


 {
            sermonData.length!=0?
            
		<div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style={{fontFamily:"Georgia,serif"}}>

			{/* <!--Title--> */}
			<div class="font-sans">
				<p class="text-base md:text-sm text-green-500 font-bold">&lt; <a href="#" onClick={(e)=>history.go('-1')} class="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">BACK TO BLOG</a></p>
						<h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{sermonData.title }</h1>
						{/* <p class="text-sm md:text-base font-normal text-gray-600">Published 19 February 2019</p> */}
			</div>


			{/* <!--Post Content--> */}


			{/* <!--Lead Para--> */}
			
			{

				sermonData.all_content.map(data=>(
			<p class="py-6" key={data.id}>{data.paragraph  }</p>
					
				))
			}

			{/* <ol>
				<li class="py-3">Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.</li>
				<li class="py-3">Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.</li>
				<li class="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus.</li>
			</ol> */}

			{/* <blockquote class="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">Example of blockquote - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</blockquote> */}



			{/* <!--/ Post Content--> */}

		</div>:""
		}

		{/* <!--Tags --> */}
		{/* <div class="text-base md:text-sm text-gray-500 px-4 py-6">
			Tags: <a href="#" class="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a> . <a href="#" class="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a>
		</div> */}

		{/* <!--Divider--> */}
		{/* <hr class="border-b-2 border-gray-400 mb-8 mx-4" /> */}





		{/* <!--Author--> */}
		{/* <div class="flex w-full items-center font-sans px-4 py-12">
			<img class="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
			<div class="flex-1 px-2">
				<p class="text-base font-bold text-base md:text-xl leading-none mb-2">Jo Bloggerson</p>
				<p class="text-gray-600 text-xs md:text-base">Minimal Blog Tailwind CSS template by <a class="text-green-500 no-underline hover:underline" href="https://www.tailwindtoolbox.com">TailwindToolbox.com</a></p>
			</div>
			<div class="justify-end">
				<button class="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">Read More</button>
			</div>
		</div> */}
		{/* <!--/Author--> */}

		{/* <!--Divider--> */}
		<hr class="border-b-2 border-gray-400 mb-8 mx-4" />

		{/* <!--Next & Prev Links--> */}
		{/* <div class="font-sans flex justify-between content-center px-4 pb-12">
			<div class="text-left">
				<span class="text-xs md:text-sm font-normal text-gray-600">&lt; Previous Post</span><br/>
				<p><a href="#" class="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline">Blog title</a></p>
			</div>
			<div class="text-right">
				<span class="text-xs md:text-sm font-normal text-gray-600">Next Post &gt;</span><br/>
				<p><a href="#" class="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline">Blog title</a></p>
			</div>
		</div> */}


		{/* <!--/Next & Prev Links--> */}

	</div>

        </>
    )
}


export default SermonDetails