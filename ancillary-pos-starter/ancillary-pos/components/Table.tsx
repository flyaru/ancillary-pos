export function Table({ columns, rows }: { columns: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-auto rounded-lg border">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((c, i) => (
              <th key={i} className="px-3 py-2 text-left font-semibold text-gray-700">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className="border-t">
              {r.map((cell, ci) => (
                <td key={ci} className="px-3 py-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
