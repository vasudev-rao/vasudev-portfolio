import BlogCard from './BlogCard'
import type { BlogPost } from '@/lib/data/blog'

interface BlogListProps {
  posts: BlogPost[]
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          excerpt={post.excerpt}
          date={post.date}
          readTime={post.readTime}
          slug={post.slug}
          tags={post.tags}
        />
      ))}
    </div>
  )
}
