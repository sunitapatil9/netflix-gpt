const VideoTitle = ({title, overview}) =>{
    return (
        <div className="pt-80 pl-20 absolute bg-gradient-to-r from-black w-screen aspect-video">
            <h1 className="font-bold text-4xl text-white">{title}</h1>
            <p className="w-1/4 py-4 text-md text-white">{overview}</p>
            <div>
                <button className="px-5 py-2  bg-white rounded-md text-black cursor-pointer"> ▶️ Play</button>
                <button className="px-5 py-2 mx-4 bg-gray-600 rounded-md opacity-80 text-white cursor-pointer">  Pause </button>
            </div>
            
        </div>
    )
}
 
export default VideoTitle;