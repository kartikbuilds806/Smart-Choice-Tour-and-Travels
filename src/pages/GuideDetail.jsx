import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { guidesData } from '../data/guidesData';
import Breadcrumb from '../components/Breadcrumb';
import NotFound from './NotFound';
import { FaClock, FaTag } from 'react-icons/fa';

const GuideDetail = () => {
  const { id } = useParams();
  const guide = guidesData.find(g => g.id === id);

  if (!guide) {
    return <NotFound />;
  }

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: guide.title,
      description: guide.excerpt,
      image: `https://www.thesmartchoicetours.com${guide.image}`,
      author: {
        '@type': 'Organization',
        name: 'Smart Choice Tour and Travels',
        url: 'https://www.thesmartchoicetours.com',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Smart Choice Tour and Travels',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.thesmartchoicetours.com/favicon.png',
        },
      },
      datePublished: guide.datePublished || '2026-05-01',
      dateModified: '2026-06-01',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://www.thesmartchoicetours.com/guides/${guide.id}`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.thesmartchoicetours.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Travel Guides',
          item: 'https://www.thesmartchoicetours.com/guides',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: guide.title,
          item: `https://www.thesmartchoicetours.com/guides/${guide.id}`,
        },
      ],
    },
  ];

  // Other guides excluding current
  const relatedGuides = guidesData.filter(g => g.id !== id).slice(0, 3);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-20">
      <Helmet>
        <title>{guide.metaTitle || `${guide.title} | Smart Choice Tour & Travels`}</title>
        <meta name="description" content={guide.excerpt} />
        <link rel="canonical" href={`https://www.thesmartchoicetours.com/guides/${guide.id}`} />
        <meta property="og:title" content={guide.metaTitle || `${guide.title} | Smart Choice Tour & Travels`} />
        <meta property="og:description" content={guide.excerpt} />
        <meta property="og:image" content={`https://www.thesmartchoicetours.com${guide.image}`} />
        <meta property="og:url" content={`https://www.thesmartchoicetours.com/guides/${guide.id}`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Travel Guides', path: '/guides' },
        { label: guide.title.length > 40 ? guide.title.substring(0, 40) + '...' : guide.title },
      ]} />

      {/* Hero Header */}
      <div className="relative h-80 md:h-[400px] w-full">
        <img
          src={guide.image}
          alt={guide.title}
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/65 z-10" />
        <div className="absolute inset-0 z-20 flex items-center justify-center container mx-auto px-4">
          <div className="text-center max-w-4xl">
            <div className="flex items-center justify-center space-x-4 mb-4">
              {guide.category && (
                <span className="bg-primary/80 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center">
                  <FaTag className="mr-1" size={10} /> {guide.category}
                </span>
              )}
              {guide.readTime && (
                <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full flex items-center">
                  <FaClock className="mr-1" size={10} /> {guide.readTime}
                </span>
              )}
            </div>
            <h1 className="text-2xl md:text-4xl font-bold font-poppins text-white mb-4 leading-tight">
              {guide.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Article Content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 prose prose-slate prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => <h2 className="text-3xl font-bold font-poppins text-slate-800 mt-8 mb-4 border-b pb-2" {...props} />,
                  h2: ({ node, ...props }) => <h3 className="text-2xl font-bold font-poppins text-slate-800 mt-8 mb-4" {...props} />,
                  h3: ({ node, ...props }) => <h4 className="text-xl font-bold text-slate-800 mt-6 mb-3" {...props} />,
                  p: ({ node, ...props }) => <p className="text-slate-600 leading-relaxed mb-6" {...props} />,
                  strong: ({ node, ...props }) => <strong className="font-bold text-slate-800" {...props} />,
                  ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2" {...props} />,
                  ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-6 text-slate-600 space-y-2" {...props} />,
                  li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
                  table: ({ node, ...props }) => <div className="overflow-x-auto mb-6"><table className="w-full border-collapse text-sm" {...props} /></div>,
                  th: ({ node, ...props }) => <th className="bg-primary text-white py-2 px-4 text-left font-semibold" {...props} />,
                  td: ({ node, ...props }) => <td className="border border-slate-200 py-2 px-4" {...props} />,
                  a: ({ node, href, ...props }) => <Link to={href || '#'} className="text-primary font-medium hover:underline" {...props} />,
                }}
              >
                {guide.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* CTA */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white text-center">
                <h3 className="text-xl font-bold font-poppins mb-3">Ready to Book?</h3>
                <p className="text-slate-300 text-sm mb-5">Get a free custom itinerary for your Uttarakhand trip.</p>
                <a
                  href="https://wa.me/918273490102?text=Hello%20I%20need%20help%20planning%20my%20trip"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold mb-3 transition-colors"
                >
                  📱 WhatsApp Us
                </a>
                <Link
                  to="/book"
                  className="block w-full bg-accent text-slate-900 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-colors"
                >
                  Book Tour Package
                </Link>
              </div>

              {/* Popular Packages */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-4">Popular Packages</h3>
                <ul className="space-y-3">
                  <li><Link to="/packages/char-dham-yatra" className="text-primary hover:underline text-sm flex items-start">→ Char Dham Yatra Package (12 Days)</Link></li>
                  <li><Link to="/packages/kedarnath" className="text-primary hover:underline text-sm">→ Kedarnath Tour (4 Days)</Link></li>
                  <li><Link to="/packages/mussoorie" className="text-primary hover:underline text-sm">→ Mussoorie Package (3 Days)</Link></li>
                  <li><Link to="/packages/nainital" className="text-primary hover:underline text-sm">→ Nainital Tour (3 Days)</Link></li>
                  <li><Link to="/packages/haridwar-sightseeing" className="text-primary hover:underline text-sm">→ Haridwar Sightseeing</Link></li>
                </ul>
              </div>

              {/* Related Guides */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-4">Related Travel Guides</h3>
                <ul className="space-y-3">
                  {relatedGuides.map(rg => (
                    <li key={rg.id}>
                      <Link to={`/guides/${rg.id}`} className="text-primary hover:underline text-sm line-clamp-2">
                        → {rg.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GuideDetail;
