import Image from "next/image"
import Link from "next/link"
import { Search, User, Calendar, Tag} from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: "/blog1.png",
    date: "14 Oct 2022",
    author: "Admin",
    category: "Wood"
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
    image: "/blog2.png",
    date: "14 Oct 2022",
    author: "Admin",
    category: "Handmade"
  },
  {
    id: 3,
    title: "Handmade pieces that took time to make",
    excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
    image: "/blog3.png",
    date: "14 Oct 2022",
    author: "Admin",
    category: "Wood"
  }
]

const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 }
]

const recentPosts = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
    image: "/recent-1.png"
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
    image: "/recent-2.png"
  },
  {
    id: 3,
    title: "Handmade pieces that took time",
    date: "03 Aug 2022",
    image: "/recent-3.png"
  },
  {
    id: 4,
    title: "Modern interior design studio",
    date: "03 Aug 2022",
    image: "/recent-4.png"
  },
  {
    id: 5,
    title: "Colorful Office redesign",
    date: "03 Aug 2022",
    image: "/recent-5.png"
  }
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Main Content */}
        <div className="w-full lg:w-2/3">
          {blogPosts.map((post) => (
            <article key={post.id} className="mb-8 lg:mb-12">
              <Link href={`#`}>
                <div className="relative h-[200px] sm:h-[300px] lg:h-[400px] mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
              </Link>
              {/* Post Metadata */}
              <div className="flex flex-wrap items-center gap-4 lg:gap-6 mb-3 lg:mb-4 text-gray-500 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span>{post.category}</span>
                </div>
              </div>
              <h2 className="text-xl lg:text-2xl font-serif mb-2 lg:mb-3">
                <Link href={`/blog/${post.id}`} className="hover:text-[#B88E2F] transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base leading-relaxed">
                {post.excerpt}
              </p>
              <Link 
                href={`#`}
                className="text-sm text-[#B88E2F] hover:text-[#B88E2F]/80 transition-colors"
              >
                Read More
              </Link>
            </article>
          ))}
          
          {/* Pagination */}
          <div className="mt-8 lg:mt-12">
            <ul className="flex space-x-2 lg:space-x-5 justify-center lg:justify-end items-center font-sans text-sm lg:text-base">
              <li className="flex items-center justify-center shrink-0 bg-[#B88E2F] cursor-pointer text-white w-8 h-8 lg:w-10 lg:h-10 rounded-md">
                1
              </li>
              <li className="flex items-center justify-center shrink-0 bg-[#F9F1E7] cursor-pointer text-black w-8 h-8 lg:w-10 lg:h-10 rounded-md">
                2
              </li>
              <li className="flex items-center justify-center shrink-0 bg-[#F9F1E7] cursor-pointer text-black w-8 h-8 lg:w-10 lg:h-10 rounded-md">
                3
              </li>
              <li className="flex items-center justify-center shrink-0 cursor-pointer bg-[#F9F1E7] text-black px-3 lg:px-5 h-8 lg:h-10 rounded-md">
                Next
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3">
          {/* Search */}
          <div className="mb-8 lg:mb-12">
            <div className="relative">
              <input
                type="text"
                className="outline-none border-2 w-full lg:w-[300px] px-3 h-[50px] lg:h-[58px] rounded-md border-[#9F9F9F] text-sm"
                placeholder="Search..."
              />
              <Search className="absolute right-3 lg:right-28 top-1/2 -translate-y-1/2 w-[19px] h-[19px] text-black" />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8 lg:mb-12">
            <h3 className="text-lg lg:text-xl font-serif mb-4 lg:mb-6">Categories</h3>
            <ul>
              {categories.map((category) => (
                <li key={category.name} className="flex items-center justify-between mb-2">
                  <Link
                    href={`#`}
                    className="text-gray-600 hover:text-[#B88E2F] transition-colors"
                  >
                    {category.name}
                  </Link>
                  <span className="text-gray-400">{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg lg:text-xl font-serif mb-4 lg:mb-6">Recent Posts</h3>
            <div className="space-y-4 lg:space-y-6">
              {recentPosts.map((post, index) => (
                <div key={index} className="flex gap-3 lg:gap-4">
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-sm"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm lg:text-base font-medium mb-1 leading-tight">
                      <Link href="#" className="hover:text-[#B88E2F] transition-colors">
                        {post.title}
                      </Link>
                    </h4>
                    <p className="text-xs lg:text-sm text-gray-500">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

