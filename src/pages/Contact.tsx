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
                <BannerHeader title="Contact Us" backgroundImage={banner_contact}>
                   <p className="text-honey-600">HANA HONEY FOR LIFE</p>
                </BannerHeader>
                <ContactInfor/>
            </div>
        </>
    )
}

export default Contact;