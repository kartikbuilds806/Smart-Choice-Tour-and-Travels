// src/components/Breadcrumb.jsx
// Breadcrumb navigation with BreadcrumbList Schema

import { Link } from 'react-router-dom';
import { FaChevronRight, FaHome } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Breadcrumb = ({ items }) => {
  // items = [{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'Current Page' }]
  if (!items || items.length === 0) return null;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.path && { item: `https://www.thesmartchoicetours.com${item.path}` }),
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <nav
        aria-label="Breadcrumb"
        className="bg-slate-50 border-b border-slate-200 py-3"
      >
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <ol className="flex flex-wrap items-center space-x-1 text-sm text-slate-500">
            <li className="flex items-center">
              <Link to="/" className="flex items-center hover:text-primary transition-colors">
                <FaHome className="mr-1" size={12} />
                Home
              </Link>
            </li>
            {items.slice(1).map((item, index) => (
              <li key={index} className="flex items-center">
                <FaChevronRight size={10} className="mx-2 text-slate-400 flex-shrink-0" />
                {item.path ? (
                  <Link to={item.path} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-slate-800 font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumb;
