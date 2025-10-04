import Card from "@/components/Card";
import { Table } from "@/components/Table";

const rows = [
  ["2025-10-03","GIZ","Excess Baggage",15,"900.00 SAR"],
  ["2025-10-03","GIZ","Additional Baggage",8,"1200.00 SAR"],
  ["2025-10-03","SHJ","Excess Baggage",12,"684.00 AED"],
  ["2025-10-04","GIZ","Balance Payment",5,"1000.00 SAR"],
  ["2025-10-04","CAI","Excess Baggage",20,"1200.00 EGP"],
];

export default function Reports() {
  return (
    <div className="p-6">
      <Card title="Daily Sales Report">
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div>
            <div className="text-xs mb-1">From Date</div>
            <input type="date" className="w-full rounded-md border px-3 py-2 text-sm"/>
          </div>
          <div>
            <div className="text-xs mb-1">To Date</div>
            <input type="date" className="w-full rounded-md border px-3 py-2 text-sm"/>
          </div>
          <div>
            <div className="text-xs mb-1">Station</div>
            <select className="w-full rounded-md border px-3 py-2 text-sm">
              <option>All Stations</option>
              <option>GIZ</option><option>SHJ</option><option>CAI</option>
            </select>
          </div>
          <div className="flex items-end justify-end">
            <button className="rounded-md border px-4 py-2 text-sm">Export CSV</button>
          </div>
        </div>
        <Table
          columns={["Date","Station","Service","Quantity","Revenue"]}
          rows={[
            ...rows.map(r=>r.map((c,i)=><span className={i===4?'font-semibold':''}>{c}</span>)),
            ["","",<span className='font-semibold'>Total</span>,"60",<span className='text-aa-red font-semibold'>4984.00 SAR</span>]
          ] as any}
        />
      </Card>
    </div>
  );
}
