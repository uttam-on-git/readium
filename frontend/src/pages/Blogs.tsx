import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    if(loading){
        return <div>
            loading...
        </div>
    }
    return <div>
        <Appbar/>
        <div>
            {blogs.map(blog => <BlogCard
                authorName={blog.author.name || "anonymos"}
                title={blog.title}
                content={blog.content}
                publishedDate="24 Feb 2024"
            />)}
        </div>
    </div>
}