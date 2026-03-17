
import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Award, ExternalLink } from 'lucide-react';

const CertificationsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => (
            <div key={idx} className="flex items-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-emerald-500/50 transition-colors group">
              <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl mr-6 group-hover:scale-110 transition-transform">
                <Award size={32} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">{cert.name}</h3>
                <p className="text-slate-500 text-sm">{cert.issuer} • {cert.date}</p>
              </div>
              <a 
                href={cert.link} 
                className="p-2 text-slate-400 hover:text-emerald-500 transition-colors"
                title="View Certificate"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
