import Image from "next/image";

type SkeletonProps = {
    className: string,
};

export default function Skeleton({ className }: SkeletonProps) {
    return (
        <div className={`relative flex justify-center items-center ${className} overflow-hidden`}>
            <div className={`absolute inset-0 rounded-full border-4 border-gray-300 border-t-blue-500 animate-spin `} />
            <Image
                src="/rick_head.png"
                alt="Loading - Rick Head"
                fill
                className="p-3!"
            />
        </div>
    )
};