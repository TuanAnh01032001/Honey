// import React from 'react';
// import Header from '../components/Layout/Header';
// import Footer from '../components/Layout/Footer';
// import { SEO } from '@/components/SEO';
// import { Award, Heart, Leaf } from 'lucide-react';
// import { ArrowRight } from 'lucide-react';
import ProductList from '@/components/Home/productlist ';

import VideoSection from '@/components/Home/Video';

// Home DataData
import {
  bannerData,
  richText1,
  richText2,
  textBlockSection, 
  imageWithText1,
  imageWithText2, 
  imageWithText3,
  imageWithText4,
  textBlockSlider,
  textSaleHeroData,
} from '@/data/homeData';


const Home = () => {
  
  return (
    <>
     <main id="MainContent" className="content-for-layout focus-none" role="main" tabIndex={-1}>
      <div className="main-site-container max-w-8xl mx-auto px-4 sm:px-6 lg:px-40">
        {/* Banner */}
        <section
          className="relative overflow-hidden rounded-t-xl"
          style={{ backgroundColor: bannerData.backgroundColor }}
        >
          {/* Background Image */}
          <div className="relative">
            <img
              src={bannerData.imageUrl}
              alt=""
              className="w-full h-[700px] object-cover"
              loading="lazy"
            />

            {/* Lớp phủ màu đen trong suốt */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

            {/* Overlay với heading + button */}
            <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16 z-20">
              <div className="text-white max-w-2xl space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg text-white">
                  {bannerData.heading}
                </h1>

                <a
                  href={bannerData.button.link}
                  className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                >
                  {bannerData.button.label}
                </a>
              </div>
            </div>
          </div>
        </section>



        
        {/* Rich text 1 */}
        <section className="shopify-section section section-rich-text text-center">
          <div className="isolate">
            <div className="rich-text content-container gradient rich-text--full-width content-container--full-width">
              <div className="rich-text__blocks py-10 md:py-20">
                <h1 className="text-1x1 md:text-3xl font-normal leading-tight">{richText1.title}</h1>
                <div className="rich-text__text rte text-xl">
                  {richText1.content}
                  <p className="text-xl font-bold ">
                    {richText1.saleText.map((p, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rich text 2 video */}
        <section className="shopify-section section section-rich-text text-center ">
          <div className="isolate">
            <div className="rich-text content-container gradient rich-text--full-width content-container--full-width">
              <div className="rich-text__blocks ">
                <h1 className="h1 text-1x1 md:text-3xl font-normal leading-tight ">{richText2.title}</h1>
              <VideoSection />
              </div>
               
            </div>
          </div>
        </section>

      
     {/* Text Title Section */}
        <section className="shopify-section section section-rich-text text-center">
          <div className="isolate">
            <div className="rich-text content-container gradient rich-text--full-width content-container--full-width">
              <div className="rich-text__blocks py-10 md:py-10">
                <h1 className="text-1x1 md:text-3xl font-normal leading-tight">{textBlockSection.title}</h1>
                <div className="rich-text__text rte text-xl ">
                  {textBlockSection.content}
                  <p className="text-xl font-bold py-4 md:py-4">
                    {textBlockSection.saleText.map((p, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Image with Text 1 */}
        <section id="home" className="relative py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {imageWithText1.title}
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {imageWithText1.description}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-amber-200 to-orange-300 shadow-2xl">
                  <img
                    src={imageWithText1.imageUrl}
                    alt={imageWithText1.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
                                    
        {/* Image with Text 2 */}
        <section className="relative py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-100 to-orange-300 shadow-2xl">
                  <img
                    src={imageWithText2.imageUrl}
                    alt={imageWithText2.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Text */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {imageWithText2.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {imageWithText2.description}
                  </p>
                </div>   
              </div>
            </div>
          </div>
        </section>

        {/* Image with Text 3 */}
        <section className="relative py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
              {/* Text */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {imageWithText3.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {imageWithText3.description}
                  </p>
                </div>
              </div>
              {/* Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-100 to-orange-300 shadow-2xl">
                  <img
                    src={imageWithText3.imageUrl}
                    alt={imageWithText3.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


              {/* Image with Text 4 */}
        <section id={`shopify-section-${imageWithText4.id}`} className="relative py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-100 to-orange-300 shadow-2xl">
                  <img
                    src={imageWithText4.image.src}
                    alt={imageWithText4.image.alt}
                    width={imageWithText4.image.width}
                    height={imageWithText4.image.height}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {imageWithText4.heading}
                  </h2>
                  <div
                    className="text-lg text-gray-700 leading-relaxed prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: imageWithText4.text }}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

          {/* Text slider */}
        <section className="shopify-section section section-rich-text text-center">
          <div className="isolate">
            <div className="rich-text content-container gradient rich-text--full-width content-container--full-width">
              <div className="rich-text__blocks py-10 md:py-20">
                <h1 className="text-1x1 md:text-3xl font-normal leading-tight">{textBlockSlider.title}</h1>
                <div className="rich-text__text rte text-xl">
                  <p className="text-xl">
                    {textBlockSlider.content.map((p, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
          {/* Slider product*/}
          <section id="shopify-section-template--14429389520970__featured_collection" className="shopify-section section section-featured-collection">
            <div className="color-background-1 isolate gradient">
              <div className="collection page-width page-width-desktop section-template--14429389520970__featured_collection-padding">
               <ProductList/>
              </div>
            </div>
          </section>

          {/* text sale hero */}
          <section
            id={`shopify-section-${textSaleHeroData.id}`}
            className="grid bg-[#f7d47a] text-black max-w-6xl mx-auto px-6 py-12"
          >
            <div className="w-full max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-normal md:text-4xl mb-6">{textSaleHeroData.heading}</h2>
              <div className="text-lg md:text-xl mb-2 font-normal">
                Honey Lovers, Unite! Subscribe for exclusive access to our premium honey varieties. Pure, golden sweetness awaits – join the buzz today
              </div>
              <div className="text-xl font-bold mb-8">AND GET $10 OFF - LOOK IN YOUR INBOX NOW!</div>
              <form
                method="post"
                action={textSaleHeroData.form.action}
                id="contact_form"
                acceptCharset="UTF-8"
                className="flex w-full max-w-xl mx-auto"
              >
                <input type="hidden" name="form_type" value={textSaleHeroData.form.hiddenFields.form_type} />
                <input type="hidden" name="utf8" value={textSaleHeroData.form.hiddenFields.utf8} />
                <input type="hidden" name="contact[tags]" value={textSaleHeroData.form.hiddenFields.tags} />
                <input
                  id={`NewsletterForm--${textSaleHeroData.id}`}
                  type="email"
                  name="contact[email]"
                  className="flex-1 border border-black border-r-0 rounded-l-md px-4 py-3 text-lg focus:outline-none bg-transparent"
                  autoComplete="email"
                  placeholder={textSaleHeroData.form.emailPlaceholder || 'Email'}
                  required
                  aria-required="true"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 rounded-r-md flex items-center justify-center hover:bg-gray-900 transition-colors"
                  name="commit"
                  id="Subscribe"
                  aria-label={textSaleHeroData.form.submitLabel}
                >
                  <svg
                    viewBox="0 0 14 10"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </section>

        </div>
      </main>
    
    </>
  );
};

export default Home;
