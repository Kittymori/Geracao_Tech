import React from 'react';
import { Link } from 'react-router-dom';

function Section({ title, titleAlign = 'left', link, children }) {
  return (
    // Equivalent of .app-section
    // mb-10: margin-bottom de 40px
    // px-5: padding horizontal de 20px
    <section className="mb-10 px-5">
      {/* Equivalent of .section-header */}
      {/* flex: display: flex;
          items-center: align-items: center;
          mb-5: margin-bottom de 20px
          pb-2.5: padding-bottom de 10px
          border-b: border-bottom: 1px;
          border-drip-border: cor personalizada da borda #928d8d
          justify-center/justify-between: Condicional para o alinhamento do título */}
      <div className={`flex items-center mb-5 pb-2.5 border-b border-drip-border ${titleAlign === 'center' ? 'justify-center' : 'justify-between'}`}>
        {/* Equivalent of .section-header h2 e titleStyle */}
        {/* m-0: margin: 0;
            text-drip-dark-text: sua cor personalizada #474747
            text-2xl: font-size: 24px;
            flex-grow: flex-grow: 1; */}
        <h2 className="m-0 text-drip-dark-text text-2xl flex-grow">{title}</h2>
        {link && (
          // Equivalent of linkStyle e .section-link:hover
          // text-drip-primary: sua cor personalizada #C92071
          // text-lg: font-size: 18px;
          // no-underline: text-decoration: none;
          // whitespace-nowrap: white-space: nowrap; (evita quebra de linha)
          // hover:underline: text-decoration: underline no hover
          <Link to={link.href} className="text-drip-primary text-lg no-underline whitespace-nowrap hover:underline">
            {link.text}
          </Link>
        )}
      </div>
      {/* O section-content não tinha estilos no seu CSS, então não precisa de classes Tailwind específicas,
          a menos que você queira adicionar espaçamento ou outras propriedades padrão aqui. */}
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}

export default Section;