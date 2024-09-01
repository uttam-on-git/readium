interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}
export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}:BlogCardProps) => {

    return <div className="pt-5 pl-4">
        <div>
            <Avatar name={authorName}/> {authorName} . {publishedDate}
        </div>
        <div>
            {title}
        </div>
        <div>
            {content.slice(0,100) + "..."}
        </div>
        <div>
            {`${Math.ceil(content.length / 100)} minutes`}
        </div>
        <div className="bg-slate-200 h-1 w-full"></div>
    </div>
}

export function Avatar( {name} : {name:string}){
    return <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>
}