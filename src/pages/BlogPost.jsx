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
        <div className="page-wrapper video-wrapper">
            <div className="container blog-post-container">

                {/* Header */}
                <div className="post-header">
                    <Link to="/blog" className="back-link"><ArrowLeft size={16} /> Back to Blog</Link>
                    <div className="post-meta-top">
                        <span className="post-cat">{post.category}</span>
                        <span className="post-date"><Calendar size={14} /> {post.date}</span>
                        <span className="post-time"><Clock size={14} /> {post.readTime}</span>
                    </div>
                    <h1 className="post-title">{post.title}</h1>
                </div>

                {/* Cover Image */}
                <div className="post-cover" style={{ background: post.image }}></div>

                <div className="post-layout">

                    {/* Sidebar / Share */}
                    <div className="post-sidebar">
                        <div className="share-sticky">
                            <p>Share</p>
                            <button className="share-btn"><Twitter size={18} /></button>
                            <button className="share-btn"><Linkedin size={18} /></button>
                            <button className="share-btn"><Facebook size={18} /></button>
                            <button className="share-btn"><Share2 size={18} /></button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>

                </div>

            </div>

            {/* Related */}
            <section className="section-padding bg-card mt-5">
                <div className="container">
                    <h3 className="mb-4">Related Articles</h3>
                    <div className="related-posts-grid">
                        <div className="related-p-card">
                            <div className="rp-img"></div>
                            <h4>MVP vs MLP: Why Minimum Lovable Product wins</h4>
                        </div>
                        <div className="related-p-card">
                            <div className="rp-img"></div>
                            <h4>5 Mistakes Startups Make with AWS</h4>
                        </div>
                        <div className="related-p-card">
                            <div className="rp-img"></div>
                            <h4>React Server Components Guide</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPost;
