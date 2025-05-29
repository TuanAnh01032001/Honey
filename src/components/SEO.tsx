import { Helmet } from 'react-helmet';
interface Props {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string    
}
export function SEO({ title, description, image, url, type = 'default' }:Props) {
  const defaultTitle = "HanaHoney - Pure Australian Honey for a Healthier Life";
  const defaultDescription = "Shop premium Australian honey from HanaHoney. 100% pure, raw, and healthy. Perfect for your daily nutrition and wellness.";
  const defaultImage = "https://hanahoney.com.au/images/default-thumbnail.jpg";
  const defaultUrl = "https://hanahoney.com.au";

  //  SEO keywords tùy theo loại trang
  const keywordMap = {
    product: 'raw honey, organic honey, manuka honey, buy honey online, HanaHoney products, premium honey Australia',
    blog: 'honey health tips, how to use honey, honey benefits, natural remedies, HanaHoney blog',
    contact: 'contact HanaHoney, honey store location, get in touch, HanaHoney support, customer service',
    about: 'about HanaHoney, Australian honey brand, sustainable beekeeping, HanaHoney story, natural honey company',
    default: 'HanaHoney, buy honey, pure honey, Australian honey, natural health, honey shop online'
  };

  const keywords = keywordMap[type] || keywordMap.default;

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph (for Facebook, Zalo, LinkedIn) */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
}
