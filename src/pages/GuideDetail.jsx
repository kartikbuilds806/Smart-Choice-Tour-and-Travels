import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { guidesData } from '../data/guidesData';

const GuideDetail = () => {
  const { id } = useParams();
  const guide = guidesData.find(g => g.id === id);

  if (!guide) {
    return <Navigate to="/guides" />;
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-20">
      <Helmet>
        <title>{guide.title} | Smart Choice Tour & Travels</title>
        <meta name="description" content={guide.excerpt} />
      </Helmet>
      
      {/* Hero Header */}
      <div className="relative h-80 md:h-[400px] w-full">
        <img 
          src={guide.image} 
          alt={guide.title} 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center container mx-auto px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4 leading-tight">
              {guide.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 max-w-4xl">
        <Link to="/guides" className="text-primary hover:text-accent font-semibold mb-8 inline-block transition-colors">
          ← Back to All Guides
        </Link>
        
        {/* Markdown Content rendered nicely */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 prose prose-slate prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h2 className="text-3xl font-bold font-poppins text-slate-800 mt-8 mb-4 border-b pb-2" {...props} />,
              h2: ({node, ...props}) => <h3 className="text-2xl font-bold font-poppins text-slate-800 mt-8 mb-4" {...props} />,
              p: ({node, ...props}) => <p className="text-slate-600 leading-relaxed mb-6" {...props} />,
              strong: ({node, ...props}) => <strong className="font-bold text-slate-800" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2" {...props} />,
              li: ({node, ...props}) => <li className="leading-relaxed" {...props} />,
            }}
          >
            {guide.content}
          </ReactMarkdown>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 bg-slate-900 rounded-2xl p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30 z-0"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold font-poppins mb-4">Ready to start your journey?</h3>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">Contact us today to get a free itinerary consultation and book your perfect trip.</p>
            <Link to="/contact" className="bg-accent text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors inline-block shadow-lg">
              Contact Us Now
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GuideDetail;
