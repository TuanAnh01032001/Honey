import { AboutSection, DailyUseSection, TotalActivitySection, WAUniqueBenefitsSection, WhyChooseSection } from "@/components";
import { SEO } from "@/components/SEO";

const About = () =>{
    return(
     <>
        <SEO
            title="About HanaHoney – Our Story"
            description="Get to know the mission and vision behind HanaHoney – Australia's trusted honey brand."
            url="https://hanahoney.com.au/about"
            type="about"
            image=''
        />

        <div>
            <AboutSection/>
            <WhyChooseSection/>
            <TotalActivitySection/> 
            <WAUniqueBenefitsSection/> 
            <DailyUseSection/>
        </div>
     </>
    );
}

export default About;