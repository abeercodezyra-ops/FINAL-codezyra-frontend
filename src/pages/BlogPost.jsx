import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from 'lucide-react';


// Sample data lookup
const blogData = {
    'why-we-switched-to-astro': {
        title: 'Why we chose Vite + React for blazing-fast development',
        category: 'Development',
        date: 'Oct 12, 2025',
        readTime: '6 min read',
        image: 'linear-gradient(135deg, #0D8ABC 0%, #00f3ff 100%)',
        content: `
      <h2>The Need for Speed</h2>
      <p>Modern web development requires fast iteration cycles. Traditional build tools were slowing us down with long compilation times and complex configurations.</p>
      
      <h2>Enter Vite</h2>
      <p>Vite's lightning-fast HMR (Hot Module Replacement) and optimized build process allowed us to develop at the speed of thought. We can see changes instantly without waiting for full rebuilds.</p>
      
      <div class="callout">
        <strong>Key Takeaway:</strong> Use the right tool for the job. Vite + React gives us the perfect balance of developer experience and production performance.
      </div>

      <h2>The Results</h2>
      <ul>
         <li>Dev server starts in under 1 second</li>
         <li>HMR updates in milliseconds</li>
         <li>Production builds are optimized and fast</li>
         <li>Developer experience is unmatched</li>
      </ul>

      <p>We use Vite + React for all our client-side applications. The combination of React's component model and Vite's build tooling creates an unbeatable development experience.</p>
    `
    },
    'psychology-dark-mode': {
        title: 'The psychology of dark mode in fin-tech apps',
        category: 'Design',
        date: 'Oct 08, 2025',
        readTime: '4 min read',
        image: 'linear-gradient(135deg, #bd00ff 0%, #ff5f56 100%)',
        content: `
      <h2>Trust in the Shadows</h2>
      <p>Dark mode isn't just a trend. In FinTech, it conveys a sense of premium quality and security. Users associate darker interfaces with professional "pro" tools (think Bloomberg Terminal).</p>
      
      <h2>Eye Strain & Engagement</h2>
      <p>Users spend 40% more time on apps with a well-implemented dark mode. It reduces eye strain during late-night trading sessions or budget checks.</p>
    `
    }
};

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogData[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Background */}
            <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0" style={{ background: post.image }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-0"></div>
                
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-6 sm:mb-8 text-base sm:text-lg font-semibold group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
                    </Link>
                    
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent text-white text-sm sm:text-base font-bold shadow-lg">{post.category}</span>
                        <span className="flex items-center gap-2 text-white/90 text-sm sm:text-base font-medium">
                            <Calendar size={16} /> {post.date}
                        </span>
                        <span className="flex items-center gap-2 text-white/90 text-sm sm:text-base font-medium">
                            <Clock size={16} /> {post.readTime}
                        </span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
                        {post.title}
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        
                        {/* Share Sidebar */}
                        <div className="lg:w-20 flex lg:flex-col gap-3 lg:sticky lg:top-24 h-fit order-2 lg:order-1 justify-center lg:justify-start">
                            <p className="text-base font-bold text-gray-700 mb-0 lg:mb-3 hidden lg:block">Share</p>
                            <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 touch-manipulation">
                                <Twitter size={20} />
                            </button>
                            <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 touch-manipulation">
                                <Linkedin size={20} />
                            </button>
                            <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-700 hover:text-white transition-all flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 touch-manipulation">
                                <Facebook size={20} />
                            </button>
                            <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-accent hover:text-white transition-all flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 touch-manipulation">
                                <Share2 size={20} />
                            </button>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 order-1 lg:order-2">
                            <div 
                                className="prose prose-lg max-w-none
                                    prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mb-4 prose-headings:mt-8
                                    prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:border-b-2 prose-h2:border-accent prose-h2:pb-3
                                    prose-p:text-base sm:prose-p:text-lg prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                                    prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                                    prose-li:text-base sm:prose-li:text-lg prose-li:text-gray-700 prose-li:mb-2 prose-li:leading-relaxed
                                    prose-strong:text-gray-900 prose-strong:font-bold
                                    [&_.callout]:bg-gradient-to-r [&_.callout]:from-accent/10 [&_.callout]:to-primary/10 
                                    [&_.callout]:border-l-4 [&_.callout]:border-accent [&_.callout]:p-6 [&_.callout]:rounded-r-xl 
                                    [&_.callout]:my-8 [&_.callout]:shadow-md
                                    [&_.callout>strong]:text-accent [&_.callout>strong]:text-xl [&_.callout>strong]:block [&_.callout>strong]:mb-2"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12">Related Articles</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                            <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500"></div>
                            <div className="p-6">
                                <h4 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-accent transition-colors leading-tight">
                                    MVP vs MLP: Why Minimum Lovable Product wins
                                </h4>
                            </div>
                        </div>
                        <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                            <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500"></div>
                            <div className="p-6">
                                <h4 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-accent transition-colors leading-tight">
                                    5 Mistakes Startups Make with AWS
                                </h4>
                            </div>
                        </div>
                        <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                            <div className="h-48 bg-gradient-to-br from-green-500 to-teal-500"></div>
                            <div className="p-6">
                                <h4 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-accent transition-colors leading-tight">
                                    React Server Components Guide
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPost;
