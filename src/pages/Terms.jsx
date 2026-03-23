import { legal } from '../config';
export default function Terms() {
  return (
    <section className="legal-page">
      <div className="container legal-content">
        {legal.termsOfService.split('\n').map((line, i) => {
          if (line.startsWith('# ')) return <h1 key={i}>{line.replace('# ', '')}</h1>;
          if (line.startsWith('## ')) return <h2 key={i}>{line.replace('## ', '')}</h2>;
          if (line.startsWith('**') && line.endsWith('**')) return <p key={i} style={{ fontWeight: 600, fontStyle: 'italic', color: 'var(--medium-gray)' }}>{line.replace(/\*\*/g, '')}</p>;
          if (line.startsWith('*')) return <p key={i} style={{ fontStyle: 'italic', color: 'var(--medium-gray)' }}>{line.replace(/\*/g, '')}</p>;
          if (line.trim()) return <p key={i}>{line}</p>;
          return null;
        })}
      </div>
    </section>
  );
}
