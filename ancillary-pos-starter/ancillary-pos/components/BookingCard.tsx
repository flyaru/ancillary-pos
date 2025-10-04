'use client';
import { useState } from 'react';
import Card from './Card';

export default function BookingCard() {
  const [mode, setMode] = useState<'PNR'|'GOSHOW'|'NOREC'|'REFUND'>('PNR');
  const [pnr, setPnr] = useState('');

  return (
    <Card className="w-[420px] backdrop-blur bg-white/95">
      <div className="text-lg font-semibold mb-2">New Booking</div>
      <div className="space-y-3">
        <label className="flex items-center gap-2">
          <input type="radio" name="mode" checked={mode==='PNR'} onChange={()=>setMode('PNR')} />
          <span>PNR</span>
        </label>
        {mode==='PNR' && (
          <div className="flex gap-2">
            <input value={pnr} onChange={e=>setPnr(e.target.value)} placeholder="Enter PNR (e.g., 62681)" className="flex-1 rounded-md border px-3 py-2 text-sm"/>
            <button className="rounded-md bg-aa-red text-white px-4 py-2 text-sm hover:bg-aa-redDark">Search PNR</button>
          </div>
        )}
        <label className="flex items-center gap-2">
          <input type="radio" name="mode" checked={mode==='GOSHOW'} onChange={()=>setMode('GOSHOW')} />
          <span>Go-Show</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="mode" checked={mode==='NOREC'} onChange={()=>setMode('NOREC')} />
          <span>NOREC</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="mode" checked={mode==='REFUND'} onChange={()=>setMode('REFUND')} />
          <span>Modify / Refund</span>
        </label>
      </div>
    </Card>
  );
}
