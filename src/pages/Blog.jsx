import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Rss } from 'lucide-react';

const posts = [
    {
        title: 'Why we chose Vite + React for blazing-fast development',
        slug: 'why-we-switched-to-astro',
        category: 'Development',
        date: 'Oct 12, 2025',
        excerpt: 'Lightning-fast development with Vite and React. Here is our deep dive into why this stack works so well.',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop'
    },
    {
        title: 'Mastering TypeScript: Advanced Patterns for Modern Development',
        slug: 'typescript-advanced-patterns',
        category: 'Development',
        date: 'Oct 10, 2025',
        excerpt: 'Learn advanced TypeScript patterns, generics, and type manipulation techniques that will elevate your code quality.',
        image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop'
    },
    {
        title: 'Node.js Performance Optimization: Best Practices',
        slug: 'nodejs-performance',
        category: 'Development',
        date: 'Oct 05, 2025',
        excerpt: 'Discover how to optimize your Node.js applications for better performance, scalability, and efficiency.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop'
    },
    {
        title: 'Building Scalable APIs with Express.js and MongoDB',
        slug: 'express-mongodb-api',
        category: 'Development',
        date: 'Oct 01, 2025',
        excerpt: 'A comprehensive guide to building RESTful APIs that scale with Express.js and MongoDB best practices.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop'
    },
    {
        title: 'Docker Containerization: From Development to Production',
        slug: 'docker-containerization',
        category: 'Development',
        date: 'Sep 28, 2025',
        excerpt: 'Learn how to containerize your applications with Docker and deploy them efficiently across environments.',
        image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop'
    },
    {
        title: 'The psychology of dark mode in fin-tech apps',
        slug: 'psychology-dark-mode',
        category: 'Design',
        date: 'Oct 08, 2025',
        excerpt: 'How color theory impacts user trust and session duration. Dark mode is not just aesthetic; it is functional.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
    },
    {
        title: 'Figma to Code: Bridging Design and Development',
        slug: 'figma-to-code',
        category: 'Design',
        date: 'Sep 30, 2025',
        excerpt: 'Learn how to convert Figma designs into clean, production-ready code using modern tools and techniques.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d93794c5?w=800&h=600&fit=crop'
    },
    {
        title: 'UI/UX Design Patterns for Web Applications',
        slug: 'ui-ux-design-patterns',
        category: 'Design',
        date: 'Sep 22, 2025',
        excerpt: 'Essential UI/UX design patterns that every developer should know when building modern web applications.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop'
    },
    {
        title: 'Responsive Design with CSS Grid and Flexbox',
        slug: 'responsive-design-grid-flexbox',
        category: 'Design',
        date: 'Sep 15, 2025',
        excerpt: 'Master CSS Grid and Flexbox to create responsive, mobile-first designs that work across all devices.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
    },
    {
        title: 'Accessibility in Modern Web Development',
        slug: 'web-accessibility',
        category: 'Design',
        date: 'Sep 05, 2025',
        excerpt: 'Building accessible web applications that work for everyone, including users with disabilities.',
        image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&h=600&fit=crop'
    },
    {
        title: 'Python for Web Development: Django vs Flask',
        slug: 'python-django-flask',
        category: 'Development',
        date: 'Sep 25, 2025',
        excerpt: 'Comparing Django and Flask frameworks to help you choose the right Python web framework for your project.',
        image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop'
    },
    {
        title: 'React Server Components: A Practical Guide',
        slug: 'rsc-guide',
        category: 'Development',
        date: 'Sep 01, 2025',
        excerpt: 'Understanding the paradigm shift in React 19. When to use client vs server components.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop'
    },
    {
        title: 'Tailwind CSS: Building Modern UIs Faster',
        slug: 'tailwind-css-guide',
        category: 'Development',
        date: 'Sep 20, 2025',
        excerpt: 'Master Tailwind CSS utility-first approach to build beautiful, responsive interfaces in record time.',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop'
    },
    {
        title: 'Git Workflow Strategies for Team Collaboration',
        slug: 'git-workflow-strategies',
        category: 'Development',
        date: 'Sep 18, 2025',
        excerpt: 'Best practices for Git workflows, branching strategies, and collaboration techniques for development teams.',
        image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop'
    },
    {
        title: 'MVP vs MLP: Why Minimum Lovable Product wins',
        slug: 'mvp-vs-mlp',
        category: 'Strategy',
        date: 'Sep 29, 2025',
        excerpt: 'Stop building bare-bones MVPs. Start building products users advocate for from day one.',
        image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&h=600&fit=crop'
    },
    {
        title: 'Agile Development Methodology: Best Practices',
        slug: 'agile-development-best-practices',
        category: 'Strategy',
        date: 'Sep 27, 2025',
        excerpt: 'Implementing Agile methodologies effectively in your development team for faster delivery and better collaboration.',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop'
    },
    {
        title: 'Technical Debt Management Strategies',
        slug: 'technical-debt-management',
        category: 'Strategy',
        date: 'Sep 23, 2025',
        excerpt: 'How to identify, prioritize, and manage technical debt without slowing down your development velocity.',
        image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&h=600&fit=crop'
    },
    {
        title: 'Code Review Best Practices for Teams',
        slug: 'code-review-best-practices',
        category: 'Strategy',
        date: 'Sep 17, 2025',
        excerpt: 'Establishing effective code review processes that improve code quality and team knowledge sharing.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop'
    },
    {
        title: 'Microservices vs Monolith: Architecture Decisions',
        slug: 'microservices-vs-monolith',
        category: 'Strategy',
        date: 'Sep 13, 2025',
        excerpt: 'When to choose microservices architecture and when a monolith is the better choice for your project.',
        image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop'
    },
    {
        title: '5 Mistakes Startups Make with AWS',
        slug: 'aws-mistakes',
        category: 'DevOps',
        date: 'Sep 15, 2025',
        excerpt: 'Cloud bills scaling faster than your user base? You might be making these common infrastructure errors.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop'
    },
    {
        title: 'CI/CD Pipeline Setup with GitHub Actions',
        slug: 'cicd-github-actions',
        category: 'DevOps',
        date: 'Sep 11, 2025',
        excerpt: 'Setting up continuous integration and deployment pipelines using GitHub Actions for automated testing and deployment.',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop'
    },
    {
        title: 'Kubernetes Orchestration for Container Management',
        slug: 'kubernetes-container-orchestration',
        category: 'DevOps',
        date: 'Sep 07, 2025',
        excerpt: 'Master Kubernetes to orchestrate and manage containerized applications at scale in production environments.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop'
    },
    {
        title: 'Monitoring and Logging Best Practices',
        slug: 'monitoring-logging-practices',
        category: 'DevOps',
        date: 'Sep 03, 2025',
        excerpt: 'Implement effective monitoring and logging strategies to track application performance and debug issues quickly.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
    },
    {
        title: 'Infrastructure as Code with Terraform',
        slug: 'terraform-infrastructure-code',
        category: 'DevOps',
        date: 'Aug 30, 2025',
        excerpt: 'Learn how to manage cloud infrastructure as code using Terraform for reproducible and scalable deployments.',
        image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&h=600&fit=crop'
    },
    {
        title: 'Vue.js 3 Composition API: Complete Guide',
        slug: 'vue3-composition-api',
        category: 'Development',
        date: 'Sep 12, 2025',
        excerpt: 'Deep dive into Vue.js 3 Composition API and how it revolutionizes component logic organization.',
        image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=600&fit=crop'
    },
    {
        title: 'PostgreSQL vs MySQL: Choosing the Right Database',
        slug: 'postgresql-vs-mysql',
        category: 'Development',
        date: 'Sep 10, 2025',
        excerpt: 'A detailed comparison of PostgreSQL and MySQL to help you make the right database choice for your project.',
        image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop'
    },
    {
        title: 'Redis Caching Strategies for High-Performance Apps',
        slug: 'redis-caching-strategies',
        category: 'Development',
        date: 'Sep 08, 2025',
        excerpt: 'Learn how to implement effective Redis caching strategies to boost your application performance.',
        image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=800&h=600&fit=crop'
    }
];

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All');
    const [visibleCount, setVisibleCount] = useState(9); // number of grid cards (excluding featured) to show

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Reset visible count on filter/search change so pagination feels natural
    useEffect(() => {
        setVisibleCount(9);
    }, [category, searchTerm]);

    const filteredPosts = posts.filter(post =>
        (category === 'All' || post.category === category) &&
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const gridPosts = filteredPosts.slice(1, 1 + visibleCount); // skip featured
    const hasMore = filteredPosts.length - 1 > gridPosts.length;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="text-center">
                        <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-extrabold mb-5 sm:mb-6 md:mb-7 px-2">
                            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Insights & </span>
                            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Innovation</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto px-4 font-semibold leading-relaxed">
                            <span className="text-accent font-bold">Tech guides</span>, <span className="text-accent font-bold">startup strategies</span>, and <span className="text-accent font-bold">design thinking</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Controls */}
            <section className="py-4 sm:py-5 md:py-6 bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-md bg-white/98 shadow-sm">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5 md:gap-6">
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md w-full">
                            <Search size={18} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 sm:w-5 sm:h-5" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-gray-50 focus:bg-white text-sm sm:text-base touch-manipulation"
                        />
                    </div>
                        {/* Category Filters */}
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full md:w-auto justify-center md:justify-start">
                        {['All', 'Development', 'Design', 'Strategy', 'DevOps'].map(cat => (
                            <button
                                key={cat}
                                    className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 touch-manipulation ${
                                        category === cat
                                            ? 'bg-accent text-white shadow-lg shadow-accent/30 scale-105'
                                            : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-accent hover:text-accent hover:bg-accent/5'
                                    }`}
                                onClick={() => setCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {filteredPosts.length > 0 && (
                <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                        <div className="mb-6 sm:mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2 px-2">Featured Article</h2>
                            <p className="text-sm sm:text-base text-gray-600 px-2">Our latest and most popular content</p>
                        </div>
                        <Link to={`/blog/${filteredPosts[0].slug}`} className="group block bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100">
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="relative h-64 sm:h-80 md:h-auto min-h-[300px] sm:min-h-[400px] md:min-h-[450px] overflow-hidden bg-gray-100">
                                    <img 
                                        src={filteredPosts[0].image} 
                                        alt={filteredPosts[0].title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        onError={(e) => {
                                            e.target.src = `https://placehold.co/800x600/10b981/fff?text=${filteredPosts[0].title}`;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                                        <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold bg-accent text-white shadow-lg">
                                            {filteredPosts[0].category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-center bg-white">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-5 md:mb-6 leading-tight group-hover:text-accent transition-colors">
                                        {filteredPosts[0].title}
                                    </h2>
                                    <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
                                        {filteredPosts[0].excerpt}
                                    </p>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 pt-4 border-t border-gray-200">
                                        <span className="text-xs sm:text-sm text-gray-500 font-medium">{filteredPosts[0].date}</span>
                                        <span className="flex items-center gap-2 text-accent font-bold group-hover:gap-4 transition-all text-sm sm:text-base md:text-lg">
                                            Read More <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* Grid */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    {filteredPosts.length > 1 && (
                        <div className="mb-8 sm:mb-10 md:mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2 px-2">All Articles</h2>
                            <p className="text-sm sm:text-base text-gray-600 px-2">Explore our complete collection of tech insights</p>
                        </div>
                    )}
                    {filteredPosts.length > 1 ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                                {gridPosts.map((post, i) => (
                                    <Link to={`/blog/${post.slug}`} className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-gray-100" key={i}>
                                        <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
                                            <img 
                                                src={post.image} 
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                onError={(e) => {
                                                    e.target.src = `https://placehold.co/800x600/10b981/fff?text=${post.title}`;
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold bg-accent text-white shadow-lg">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-4 sm:p-5 md:p-6">
                                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent mb-3">
                                                {post.category}
                                            </span>
                                            <h3 className="text-xl font-bold text-black mb-3 group-hover:text-accent transition-colors line-clamp-2 leading-tight">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 mb-5 leading-relaxed text-sm line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <span className="text-gray-500 text-sm font-medium">{post.date}</span>
                                                <span className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                                                    Read <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                                </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                            {hasMore && (
                                <div className="text-center mt-10 sm:mt-12 md:mt-16">
                                    <button
                                        onClick={() => setVisibleCount(count => Math.min(count + 6, filteredPosts.length - 1))}
                                        className="bg-white text-accent px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-xl font-bold border-2 border-accent hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base touch-manipulation"
                                    >
                                        Load More Articles
                                    </button>
                                </div>
                            )}
                        </>
                    ) : filteredPosts.length === 0 ? (
                        <div className="text-center py-12 sm:py-16 md:py-24 bg-white rounded-2xl sm:rounded-3xl shadow-lg border-2 border-gray-100 px-4">
                            <div className="max-w-md mx-auto">
                                <Search size={48} className="sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-gray-300" />
                                <p className="text-xl sm:text-2xl font-bold text-gray-700 mb-2 sm:mb-3">No articles found</p>
                                <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6">Try adjusting your search or filter criteria</p>
                                <button 
                                    onClick={() => { setSearchTerm(''); setCategory('All'); }}
                                    className="bg-accent text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-sm sm:text-base touch-manipulation"
                                >
                                    Clear Filters
                                </button>
                    </div>
                        </div>
                    ) : null}
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
                    <div className="bg-gradient-to-br from-accent/5 via-white to-accent/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center shadow-2xl border-2 border-gray-100">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                            <Rss size={32} className="sm:w-10 sm:h-10 text-accent" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4 px-2">Subscribe to our newsletter</h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-4">
                            Get the latest tech trends, development tips, and industry insights delivered directly to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto px-4">
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                className="flex-1 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-xl border-2 border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white text-gray-900 placeholder-gray-400 text-sm sm:text-base md:text-lg touch-manipulation"
                            />
                            <button className="bg-accent text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-xl font-bold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap text-sm sm:text-base md:text-lg touch-manipulation">
                                Subscribe Now
                            </button>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6 px-4">No spam. Unsubscribe anytime.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
