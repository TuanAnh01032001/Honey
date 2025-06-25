import { BannerHeader, ImageSlider, PartnerShipIntro, PartnerTestimonials } from "@/components"
import banner_partnership from "/images/banner-partnetship.jpg"

const Partnerships = ()=>{
  return(
    <>
        <BannerHeader title="" className="w-full h-full" backgroundImage={banner_partnership}>
            <div className="text-center max-auto px-6 h-full">
                <h1 className="text-5xl md:text-7xl font-bold text-amber-800 mb-6 leading-tight animate-fade-in">
                Together, We Bring Premium 
                <span className="text-amber-600 block">Australian Honey</span>
                to the World
                </h1>
                
                <p className="text-xl md:text-2xl text-honey-600 mb-12 animate-fade-in">
                Proud to work with trusted partners in Singapore, Vietnam, Australia, and beyond.
                </p>
                
            </div>
        </BannerHeader>
        <PartnerShipIntro/>
        <ImageSlider/>
        <PartnerTestimonials/>
    </>
  )
}
export default Partnerships