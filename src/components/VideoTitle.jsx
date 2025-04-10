const VideoTitle = ({title, overview}) =>{
    return (
        <div className=" pt-25 md:pt-50  pl-5 md:pl-20 absolute bg-gradient-to-r from-black w-screen aspect-video">
            <h1 className="font-bold text-xl md:text-4xl text-white">{title}</h1>
            <p className="w-2/4 hidden md:inline-block sm:w-1/4 py-4 text-[12px] md:text-md text-white">{overview}</p>
            <div className="mt-5 md:mt-0">
                <button className="py-1 px-3 md:px-5 md:py-2 text-[15px] md:text-none bg-white rounded-md text-black cursor-pointer"> ▶️ Play</button>
                <button className="py-1 px-3 md:px-5 md:py-2 text-[15px] mx-4 bg-gray-600 rounded-md opacity-80 text-white cursor-pointer">  Pause </button>
            </div>
            
        </div>
    )
}
 
export default VideoTitle;