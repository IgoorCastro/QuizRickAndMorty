import Skeleton from "../components/ui/Skeleton";

export default function Loading() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <Skeleton className="w-24 h-24" />
        </div>     
    )
}