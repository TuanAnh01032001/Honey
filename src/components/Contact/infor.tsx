const ContactInfor = ()=> {
 return(
    <section className="container">
        {/* information */}
        <div className=" w-full h-auto max-w-7xl mx-auto py-6">
            <div className="max-w-3xl mx-auto text-center space-y-4 p-6">
                <h1 className="text-3xl md:text-4xl text-gray-900">Visit us in-store or shop online 24/7</h1>
                
                <p className="text-gray-700 leading-relaxed ">
                 Honey For Life is a Western Australian Beekeeping & Honey Company. You can purchase our delicious bio-active honey, premium bee products, and Mated Queen Bees in-store or online now.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    <span className="text-xl text-gray-900 font-bold">Store Details: </span><br />
                    274 King Road, Olbury WA 6121
                    <a href="tel: 0429 001 133"> Ph: 0429 001 133</a>
                </p>
                <p className="text-gray-700 leading-relaxed">
                    <span className="text-xl text-gray-700 font-bold">Store opening and customer service hours:</span><br />
                    Monday - Thursday: 10AM - 3PM
                </p>
            </div>

            {/* location */}

            <div className="max-w-4xl mx-auto px-4 py-10 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Locations</h2>
                <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg border">
                <iframe
                    title="Our Location"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    className="border-0 w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.528097246362!2d115.8574807151193!3d-32.03818888106312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bfbc40370c55%3A0x1234567890abcdef!2sBaldivis%2C%20WA%206173%2C%20Australia!5e0!3m2!1sen!2sau!4v1719035000000"
                ></iframe>
                </div>
            </div>

            {/* form infor */}
            <div className="my-8 p-6">
                <div className="max-w-4xl mx-auto ">
                    <h1 className=" text-center text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-wide">Contact Us</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className=" mb-5 w-ful ">
                            <input className="w-full bg-honey-200 border border-gray-900 hover:border-2 hover:border-gray-900" type="text" placeholder="Name" />
                        </div>
                        <div className="mb-5 w-ful">
                            <input className="w-full bg-honey-200 border-gray-900 hover:border-2 hover:border-gray-900" type="email" placeholder="Email"/>
                        </div>
                    </div>
                    <div className=" mb-5 w-ful">
                            <input className="w-full bg-honey-200 border-gray-900 hover:border-2 hover:border-gray-900" type="text" placeholder="Phone"/>
                    </div>
                    <div className="mb-5 w-ful">
                            <textarea className="w-full bg-honey-200 border-gray-900 hover:border-2 hover:border-gray-900" rows={5} placeholder="Message"/>
                    </div>
                    <div className=" text-center bg-black text-white mb-5 w-ful cursor-pointer">
                         <button  className="text-xl text-white px-6 py-4">Send</button>
                    </div>
                   
                </div>
            </div>
            {/* business contact */}
            <div className="max-w-3xl mx-auto text-center  space-y-4 p-6">
                <h1 className="text-3xl md:text-4xl text-gray-900">Business Contact Details</h1>
                <div className=" max-w-sm mx-auto space-y-4 text-center">
                    <span className="text-xl text-gray-900 font-bold">General Enquiries</span><br/>
                    <a href="">hello@honeyforlife.com.au</a>
                    <p className="text-gray-700 leading-relaxed ">
                        Chat online now, or you can also contact us on Facebook and Instagram.
                    </p>
                </div>
                <div className=" max-w-sm mx-auto space-y-4 text-center">
                    <span className="text-xl text-gray-900 font-bold">Wholesale & Export Enquiries:</span><br/>
                    <a href="#">sales@honeyforlife.com.au</a>
                </div>
               
                
            </div>
        </div>
    </section>
 )
}
export default ContactInfor