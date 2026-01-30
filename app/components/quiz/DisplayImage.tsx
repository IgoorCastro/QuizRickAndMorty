import Image, { ImageProps } from "next/image";

type DisplayImageProps = ImageProps; // tipagem exclusiva do Image do next/image

export default function DisplayImage({ src, alt, className, onLoad }: DisplayImageProps) {
    return(
        <Image 
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={className}
            onLoad={onLoad}
        />
    );
}