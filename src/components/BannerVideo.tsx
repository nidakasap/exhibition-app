import bannerVideo from '../assets/video/banner-video.mp4' 
const BannerVideo = () => {
  return (
    <div>
      <video src={bannerVideo} loop autoPlay muted className="w-screen h-fit">
      </video>
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center text-xl">
        <h1>Explore the Future: Click Here to Unveil Tomorrow!</h1>
      </div>
    </div>
  )
}

export default BannerVideo