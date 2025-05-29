import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { SEO } from '@/components/SEO';
import { Award, Heart, Leaf } from 'lucide-react';

import { ArrowRight } from 'lucide-react';
import ProductList from '@/components/Home/productlist';

const Home = () => {
  return (
    <>
 

      <main id="MainContent" className="content-for-layout focus-none" role="main" tabIndex={-1}>
        <div className="main-site-container">
          {/* Banner  */}
          <section className="shopify-section section section-image-banner" style={{backgroundColor: '#f7d47a', padding: 0, borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
            <div className="banner banner--content-align-left banner--content-align-mobile-center banner--large banner--desktop-transparent">
              <div className="banner__media media has-mobile-image mobile-banner--top">
                <img src="//honeyforlife.com.au/cdn/shop/files/Fixed_labels_1950_x_700_px.png?v=1734489793&width=1500" alt="" width="1950" height="700" className="small-hide" loading="lazy" />
              </div>
              <div className="banner__content banner__content--middle-left page-width">
                <div className="banner__box content-container content-container--full-width-mobile color-accent-1">
                  <h1 className="banner__heading h0">
                    <span>AUSTRALIA'S FINEST MEDICINAL HONEY  &amp; BEE PRODUCTS</span>
                  </h1>
                  <div className="banner__text subtitle">
                    <span></span>
                  </div>
                  <div className="banner__buttons">
                    <a href="/collections/shop-all-premium-australian-honey-products" className="button button_1 button--primary">SHOP NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* text-hero*/}
          <section className="shopify-section section section-rich-text">
            <div className="isolate">
              <div className="rich-text content-container gradient rich-text--full-width content-container--full-width section-template--14429389520970__rich_text_Lk8emz-padding">
                <div className="rich-text__blocks">
                  <h1 className="h1">AUSTRALIA'S MOST PREMIUM AND AWARD WINNING HONEYS</h1>
                  <div className="rich-text__text rte">
                    <p>At Honey For Life, our passion lies in crafting the finest premium honey products. Our honey is 100% raw, natural, and sustainably sourced from the pristine old-growth forests, unique desert gold-fields, and our own reclaimed farmland Manuka plantations, in Western Australia. We believe in minimal human interaction because that’s the way nature intended it, and we aim to keep it that way.</p>
                    <p><strong>Discover the purest form of</strong><a href="/collections/super-active-honey" title="Super Active Honey TA50+"><strong> Australian medicinal honey</strong></a><strong> and elevate your life with the wholesome goodness of </strong><a href="/collections/shop-all-premium-australian-honey-bee-products" title="Shop Raw Honey"><strong>Western Australian raw honey</strong></a><strong> today.</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* text-video */}
          <section className="shopify-section section section-rich-text">
            <div className="isolate">
              <div className="rich-text content-container gradient rich-text--full-width content-container--full-width section-template--14429389520970__rich_text_t4VjVG-padding">
                <div className="rich-text__blocks">
                  <h1 className="h1">FROM OUR HIVE TO YOUR HOME:  THE STORY OF OUR HONEY</h1>
                </div>
              </div>
            </div>
          </section>

          {/* video */}
          <section className="shopify-section section section-video">
            <div className="color-background-1 gradient">
              <div className="video-section isolate section-template--14429389520970__video_fwYy8f-padding">
                <div className="page-width"></div>
                <noscript>
                  <div className="video-section__media" style={{paddingBottom: '56.25%'}}>
                    <a href="https://youtu.be/5RLirWPNTLw" className="video-section__poster media media--transparent media--landscape">
                      <img src="//honeyforlife.com.au/cdn/shop/files/HONEYFORLIFE_MARRI_WIDE_EDIT_V4.00_01_11_05.Still008.jpg?v=1707724504&width=1920" sizes="100vw" alt="Load video: The Story of Honey For Life and our honey." loading="lazy" width="1920" height="1080" />
                    </a>
                  </div>
                </noscript>
                <div className="video-section__media deferred-media no-js-hidden gradient global-media-settings global-media-settings--full-width" data-media-id="5RLirWPNTLw" > 
                  {/* The template tag is not valid in React, so render the iframe directly or conditionally as needed */}
                  <iframe src="https://www.youtube.com/embed/5RLirWPNTLw?enablejsapi=1" className="js-youtube" allow="autoplay; encrypted-media" allowFullScreen title="The Story of Honey For Life and our honey."></iframe>
                </div>
              </div>
            </div>
          </section>

           {/* text title */}
          <section className="shopify-section section section-rich-text">
            <div className="isolate">
              <div className="rich-text content-container gradient rich-text--full-width content-container--full-width section-template--14429389520970__c9073740-8723-46cf-9a0b-39015333efb4-padding">
                <div className="rich-text__blocks">
                  <h2 className="h2">WHAT MAKES OUR AUSTRALIAN RAW HONEY SO GOOD?</h2>
                  <div className="rich-text__text rte">
                    <p>Wondering where to buy raw honey that also tastes amazing? Well, look no further, because you’ve struck gold – liquid gold that is. Rich in taste, with an incredible fragrance and a smooth consistency, Honey For Life is renowned for producing some of the best tasting active honey in Australia and the world. In 2022, our Organic Jarrah Honey and Organic Karri Honey were awarded Gold at the International Organic Food Awards. In 2024 our Desert Mallee won the International Best Taste Awards in USA.</p>
                    <p><strong>So, what exactly makes our honey taste so good? Find out below...</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* image with text 1*/}
          <section id="home" className="relative py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Text Content 1*/}
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        HAPPY, HEALTHY BEES:THE WESTERN AUSTRALIA ADVANTAGE
                      </h1>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Western Australia boasts one of the world's healthiest bee populations, free from several significant bee diseases and pests.
                        This unique advantage positions us as one of only two regions globally with thriving, disease-free bees.
                        The absence of these threats allows our beekeeping operations to remain completely chemical-free,
                        ensuring the utmost purity and quality in our honey.
                      </p>
                    </div>
                  </div>

                  {/* Image 1*/}
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-amber-200 to-orange-300 shadow-2xl">
                      <img
                        src="//honeyforlife.com.au/cdn/shop/files/Home_page_images_1080_x_1080_1.png?v=1701932375&width=1500"
                        alt="Happy, healthy bees"
                        className="w-full h-full object-cover"
                      />
                    </div>           
                  </div>
                </div>
              </div>
          </section>
                   


          {/* image with text 2*/}
          <div id="shopify-section-template--14429389520970__image_with_text_fKqaFB" className="shopify-section section section-image-with-banner">
            <div data-section-id="template--14429389520970__image_with_text_fKqaFB" className="image-with-text image-with-text--no-overlap page-width isolate section-template--14429389520970__image_with_text_fKqaFB-padding">
              <div className="image-with-text__grid grid grid--gapless grid--1-col grid--2-col-tablet">
                <div className="image-with-text__media-item image-with-text__media-item--medium image-with-text__media-item--middle grid__item">
                  <div className="image-with-text__media image-with-text__media--small gradient color-background-1 global-media-settings media">
                    <img src="//honeyforlife.com.au/cdn/shop/files/Karri_Marri_mobile.png?v=1698823188&width=1500" sizes="(min-width: 1500px) 700px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)" alt="" loading="lazy" width="1000" height="1000" />
                  </div>
                </div>
                <div className="image-with-text__text-item grid__item">
                  <div id="ImageWithText--template--14429389520970__image_with_text_fKqaFB" className="image-with-text__content image-with-text__content--middle image-with-text__content--desktop-left image-with-text__content--mobile-left image-with-text__content--small gradient color-background-1 content-container">
                    <h3 className="image-with-text__heading h2"> 100% RAW AND COLD PROCESSED IN ITS PUREST FORM </h3>
                    <div className="image-with-text__text rte body">
                      <p>Our entire range of honey is raw and cold processed through a 100-micron filter. Thanks to Western Australia's disease-free bee population, we avoid the need for heat treatment or pasteurization. This ensures that the active ingredients retain their optimal effectiveness, making our honeys the strongest medicinal honeys available on the shelf.</p>
                    </div>
                    <a href="/blogs/discover-honey-blog/the-health-benefits-of-raw-honey-a-superfood-for-everyday-wellness" className="button button--primary"> FIND OUT MORE </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* image with text 3*/}
          <div id="shopify-section-template--14429389520970__image_with_text_wnjqLa" className="shopify-section section section-image-with-banner">
            <div data-section-id="template--14429389520970__image_with_text_wnjqLa" className="image-with-text image-with-text--no-overlap page-width isolate section-template--14429389520970__image_with_text_wnjqLa-padding">
              <div className="image-with-text__grid grid grid--gapless grid--1-col grid--2-col-tablet image-with-text__grid--reverse">
                <div className="image-with-text__media-item image-with-text__media-item--medium image-with-text__media-item--middle grid__item">
                  <div className="image-with-text__media image-with-text__media--small gradient color-background-1 global-media-settings media">
                    <img src="//honeyforlife.com.au/cdn/shop/files/manuka-mgo400-260-500_3.png?v=1710318454&width=1500" sizes="(min-width: 1500px) 700px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)" alt="" loading="lazy" width="1000" height="1000" />
                  </div>
                </div>
                <div className="image-with-text__text-item grid__item">
                  <div id="ImageWithText--template--14429389520970__image_with_text_wnjqLa" className="image-with-text__content image-with-text__content--middle image-with-text__content--desktop-left image-with-text__content--mobile-left image-with-text__content--small gradient color-background-1 content-container">
                    <h3 className="image-with-text__heading h2"> OUR HONEY IS PACKED WITH HEALTH BENEFITS </h3>
                    <div className="image-with-text__text rte body">
                      <p>Our <a href="/pages/medical-benefits" title="Honey Tales: Customer Stories of Sweet Success"><strong>raw honey</strong></a> is a powerhouse of natural goodness, packed with enzymes, antioxidants, and other beneficial compounds. Thanks to our Eucalypt honeys' high <a href="/blogs/sweet-honey-news/honey-ta-rating-vs-mgo-rating-explained" title="Honey MGO VS Honey TA Rating Explained"><strong>Total Activity (TA) ratings</strong></a> and our Australian Manuka honey's high <a href="/blogs/sweet-honey-news/honey-ta-rating-vs-mgo-rating-explained" title="Honey MGO VS Honey TA Rating Explained"><strong>MGO ratings</strong></a>, Honey For Life's medicinal honey offers exceptional antimicrobial, antioxidant, and anti-inflammatory properties. Additionally, our <a href="/collections/marri-karri-honey" title="Marri &amp; Karri Honey"><strong>Marri</strong></a> and <a href="/collections/jarrah-honey" title="Jarrah Honey"><strong>Jarrah</strong></a> honeys are low GI, making them a healthier choice for those mindful of their sugar intake. These attributes make our honey not just delicious but also a potent ally in promoting overall wellness.<br /><a href="/pages/medical-benefits" title="Honey Tales: Customer Stories of Sweet Success"><strong>Read our customer success stories</strong></a> to see how our honey has made a difference in their lives.</p>
                    </div>
                    <a href="/pages/medical-benefits" className="button button--primary"> READ NOW </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* image with text 4*/}
          <div id="shopify-section-template--14429389520970__d0d11084-e28e-4f42-aea0-10738af6afba" className="shopify-section section section-image-with-banner">
            <div data-section-id="template--14429389520970__d0d11084-e28e-4f42-aea0-10738af6afba" className="image-with-text image-with-text--no-overlap page-width isolate section-template--14429389520970__d0d11084-e28e-4f42-aea0-10738af6afba-padding">
              <div className="image-with-text__grid grid grid--gapless grid--1-col grid--2-col-tablet">
                <div className="image-with-text__media-item image-with-text__media-item--medium image-with-text__media-item--middle grid__item">
                  <div className="image-with-text__media image-with-text__media--small gradient color-background-1 global-media-settings media">
                    <img src="//honeyforlife.com.au/cdn/shop/files/Home_page_images_1080_x_1080.png?v=1701931117&width=1500" sizes="(min-width: 1500px) 700px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)" alt="" loading="lazy" width="1080" height="1080" />
                  </div>
                </div>
                <div className="image-with-text__text-item grid__item">
                  <div id="ImageWithText--template--14429389520970__d0d11084-e28e-4f42-aea0-10738af6afba" className="image-with-text__content image-with-text__content--middle image-with-text__content--desktop-left image-with-text__content--mobile-left image-with-text__content--small gradient color-background-1 content-container">
                    <h3 className="image-with-text__heading h2"> ANTIOXIDANT-RICH EUCALYPT HONEYS: JARRAH, MARRI, KARRI, BLACKBUTT, AND DESERT MALLEE &amp; MORE... </h3>
                    <div className="image-with-text__text rte body">
                      <p>Sourced from our own beekeeping sites within the pristine, biodiverse old-growth forests of Western Australia, our Eucalypt honeys—<a href="/collections/jarrah-honey" title="Jarrah Honey"><strong>Jarrah</strong></a><strong>, </strong><a href="/collections/marri-karri-honey" title="Marri &amp; Karri Honey"><strong>Marri</strong></a><strong>, </strong><a href="/collections/marri-karri-honey" title="Marri &amp; Karri Honey"><strong>Karri</strong></a><strong>, </strong><a href="/products/super-blackbutt-ta50-500g" title="SUPER BLACKBUTT HONEY TA50+"><strong>Blackbutt</strong></a>, and <a href="/products/organic-desert-mallee-honey" title="DESERT MALLEE HONEY"><strong>Desert Mallee</strong></a>—are produced in an untouched, bio-diverse environment. These exceptional honeys are known for their high <a href="/blogs/sweet-honey-news/honey-ta-rating-vs-mgo-rating-explained" title="Honey MGO VS Honey TA Rating Explained"><strong>Total Activity (TA) ratings</strong></a>, offering some of the highest medicinal and antioxidant properties. The unique flora in these forests creates an ecosystem that supports the production of nutrient-rich, <a href="/collections/super-active-honey" title="Super Active Honey TA50+"><strong>potent honeys</strong></a>, making them a natural choice for health-conscious consumers.</p>
                    </div>
                    <a href="/collections/shop-all-premium-australian-honey-products" className="button button--primary"> SHOP OUR RANGE </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* image with text 5*/}
          <div id="shopify-section-template--14429389520970__16505317172ada3f07" className="shopify-section section section-image-with-banner">
            <div data-section-id="template--14429389520970__16505317172ada3f07" className="image-with-text image-with-text--no-overlap page-width isolate section-template--14429389520970__16505317172ada3f07-padding">
              <div className="image-with-text__grid grid grid--gapless grid--1-col grid--2-col-tablet image-with-text__grid--reverse">
                <div className="image-with-text__media-item image-with-text__media-item--medium image-with-text__media-item--middle grid__item">
                  <div className="image-with-text__media image-with-text__media--small gradient color-background-1 global-media-settings media">
                    <img src="//honeyforlife.com.au/cdn/shop/files/12_75a347fa-5f07-4d7f-85bd-5b424bcc4014.png?v=1747285641&width=1500" sizes="(min-width: 1500px) 700px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)" alt="" loading="lazy" width="2000" height="2000" />
                  </div>
                </div>
                <div className="image-with-text__text-item grid__item">
                  <div id="ImageWithText--template--14429389520970__16505317172ada3f07" className="image-with-text__content image-with-text__content--middle image-with-text__content--desktop-left image-with-text__content--mobile-left image-with-text__content--small gradient color-background-1 content-container">
                    <h3 className="image-with-text__heading h2"> SUSTAINABLY MANAGED, HIGH-POTENCY AUSTRALIAN MANUKA HONEY </h3>
                    <div className="image-with-text__text rte body">
                      <p>Our Australian Manuka honey is sustainably managed and sourced from reclaimed farmland, ensuring both environmental responsibility and product purity. Boasting the highest <a href="/blogs/sweet-honey-news/honey-ta-rating-vs-mgo-rating-explained" title="Honey MGO VS Honey TA Rating Explained"><strong>MGO ratings</strong></a>, <a href="/products/manuka-honey-mgo263" title="MANUKA HONEY MGO263+"><strong>MGO263</strong></a>, <a href="/products/manuka-honey-mgo514" title="MANUKA HONEY MGO514+"><strong>MGO514</strong></a>, <a href="/products/manuka-honey-mgo829" title="MANUKA HONEY MGO829+"><strong>MGO829</strong></a>, including the impressive <a href="/products/manuka-mgo-1500" title="MANUKA HONEY MGO1500+"><strong>Manuka MGO1500+</strong></a>, our Manuka honey is recognized for its powerful antibacterial properties. This honey is a potent ally in wellness, providing exceptional <a href="/pages/health-benefits-of-manuka-honey" title="Health Benefits of Manuka Honey"><strong>health benefits</strong></a> and setting a gold standard in the medicinal honey market.</p>
                    </div>
                    <a href="/collections/manuka-honey" className="button button--primary"> SHOP OUR RANGE </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* text */}
          <section id="shopify-section-template--14429389520970__660467a1-da11-4ce2-9f19-c6951b93945d" className="shopify-section section section-rich-text">
            <div className="isolate">
              <div className="rich-text content-container gradient rich-text--full-width content-container--full-width section-template--14429389520970__660467a1-da11-4ce2-9f19-c6951b93945d-padding">
                <div className="rich-text__blocks">
                  <div className="h1">OUR COMMITMENT TO PREMIUM HONEY &amp; BEE PRODUCTS</div>
                  <div className="rich-text__text rte">
                    <p>From our premium range of <a href="https://honeyforlife.com.au/collections/jarrah-honey"><strong>Jarrah</strong></a>, <a href="https://honeyforlife.com.au/collections/marri-karri-honey"><strong>Marri</strong></a>, <a href="https://honeyforlife.com.au/collections/marri-karri-honey"><strong>Karri</strong></a>, or our popular <a href="https://honeyforlife.com.au/products/super-active-jarrah-honey"><strong>Super Jarrah</strong></a>, to our <a href="https://honeyforlife.com.au/collections/organic-honey"><strong>certified organic range</strong></a>, or our <a href="https://honeyforlife.com.au/products/bees-wax"><strong>decadent beeswax;</strong></a> every product we produce right here in Western Australia is made to be as natural and of the highest quality as possible. Honey For Life follows B-QUAL best practice standards and some of our honeys are organically certified by the <a href="https://organicfoodchain.com.au/" target="_blank" title="Organic Food Chain"><strong>Organic Food Chain</strong></a>&nbsp;company, and <a href="/pages/honey-testing" title="Honey Testing"><strong>testing</strong></a> regimes on all honey batches.<br /><br /><a href="/collections/shop-all-our-honeys" title="Shop our honey's"><strong>Shop honey now</strong></a> or find out about our Australian <a href="/pages/faqs" title="WHOLESALE &amp; EXPORT HONEY"><strong>honey products wholesale and export options</strong></a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slider */}
          <section id="shopify-section-template--14429389520970__featured_collection" className="shopify-section section section-featured-collection">
            <div className="color-background-1 isolate gradient">
              <div className="collection page-width page-width-desktop section-template--14429389520970__featured_collection-padding">
                {/* Slider: Chuyển slider-component thành div, loại bỏ style custom property không hợp lệ, sửa lỗi thẻ đóng mở */}
               <ProductList/>
              </div>
            </div>
          </section>

          {/* text sale hero */}
          <section id="shopify-section-template--14429389520970__1650513370adc7ef06" className="shopify-section section section-newsletter">
            <div className="newsletter center newsletter--narrow page-width">
              <div className="newsletter__wrapper color-accent-2 gradient content-container isolate section-template--14429389520970__1650513370adc7ef06-padding">
                <div className="h1">JOIN THE HIVE</div>
                <div className="newsletter__subheading rte">
                  <p>Honey Lovers, Unite! Subscribe for exclusive access to our premium honey varieties. Pure, golden sweetness awaits – join the buzz today <br /><strong>AND GET $10 OFF - LOOK IN YOUR INBOX NOW!</strong></p>
                </div>
                <div>
                  <form method="post" action="/contact#contact_form" id="contact_form" acceptCharset="UTF-8" className="newsletter-form">
                    <input type="hidden" name="form_type" value="customer" />
                    <input type="hidden" name="utf8" value="✓" />
                    <input type="hidden" name="contact[tags]" value="newsletter" />
                    <div className="newsletter-form__field-wrapper">
                      <div className="field">
                        <input id="NewsletterForm--template--14429389520970__1650513370adc7ef06" type="email" name="contact[email]" className="field__input" value="" aria-required="true" autoComplete="email" placeholder="Email" required />
                        <label className="field__label" htmlFor="NewsletterForm--template--14429389520970__1650513370adc7ef06"> Email </label>
                        <button type="submit" className="newsletter-form__button field__button" name="commit" id="Subscribe" aria-label="Subscribe">
                          <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" role="presentation" className="icon icon-arrow" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor">
                            </path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    
    </>
  );
};

export default Home;
