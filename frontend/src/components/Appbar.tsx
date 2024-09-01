import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-6">
        <div>
            Readium
        </div>
        <div>
            <Avatar name={"uttam"}/>
        </div>
    </div>
}