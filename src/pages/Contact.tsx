import { BannerHeader, ContactInfor } from "@/components";
import { SEO } from "@/components/SEO";
import banner_contact from "../../public/images/banner_contact.jpg"

const Contact =()=>{
    return (
        <>
            <SEO
                title="Contact HanaHoney – We're Here to Help"
                description="Reach out to HanaHoney for questions, support or business inquiries."
                url="https://hanahoney.com.au/contact"
                type="contact"
                image=''
            />

            <div>
                <BannerHeader 
                className="text-center"
                title="Contact Us" 
                backgroundImage={banner_contact}
                >
                    <span className="text-xl md:text-2xl font-medium text-honey-500">HANA HONEY</span>
                  
                </BannerHeader>
                <ContactInfor/>
            </div>
        </>
    )
}

export default Contact;