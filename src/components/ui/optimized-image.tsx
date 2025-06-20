import { useState } from "react";

 const OptimizedImage = ({
    src,
    alt = "image",
    className = "",
    fallbackSrc = "https://cdnmedia.baotintuc.vn/Upload/YZmStSDTjb0M07hFJ2gA/files/2021/09/24/ong-240921.jpg",
    width = "100%",
    height = "100%",
    ...props
  }) => {
    const [imgSrc, setImgSrc] = useState(src);
    const handleError = () =>{
        setImgSrc(fallbackSrc);
    }
    return (
        <img
         src={imgSrc}
         alt={alt}
         width={width}
         height= {height}
         loading="lazy"
         className={`object-cover ${className}`}
         onError={handleError}
        {...props}
        />
    )
 }
 export default OptimizedImage