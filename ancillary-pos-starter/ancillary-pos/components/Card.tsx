export default function Card({ title, children, className="" }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white shadow-card rounded-xl2 ${className}`}>
      {title && <div className="px-4 py-3 border-b text-sm font-semibold">{title}</div>}
      <div className="p-4">{children}</div>
    </div>
  );
}
