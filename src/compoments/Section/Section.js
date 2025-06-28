import React from 'react';
import { Link } from 'react-router-dom';

function Section({ title, titleAlign = 'left', link, children }) {
  return (
    <section className="mb-10 px-5">
      <div className={`flex items-center mb-5 pb-2.5 border-b border-drip-border ${titleAlign === 'center' ? 'justify-center' : 'justify-between'}`}>
        <h2 className="m-0 text-drip-dark-text text-2xl flex-grow">{title}</h2>
        {link && (
          <Link to={link.href} className="text-drip-primary text-lg no-underline whitespace-nowrap hover:underline">
            {link.text}
          </Link>
        )}
      </div>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}

export default Section;