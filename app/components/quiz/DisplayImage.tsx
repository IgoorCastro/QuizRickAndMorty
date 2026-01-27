import Image from "next/image";

type DisplayImageProps = {
    src: string,
    alt: string
}

export default function DisplayImage({ src, alt }: DisplayImageProps) {
    return(
        <Image 
            src={src}
            alt={alt}
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
    );
}