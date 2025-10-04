import Link from "next/link";

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white hover:text-[#D10028] transition">
    {children}
  </Link>
);

export default function Sidebar() {
  return (
    <aside className="w-56 bg-aa-red text-white flex flex-col">
      <div className="px-4 py-5 border-b border-white/10">
        <div className="text-xl font-semibold">Air Arabia</div>
        <div className="text-xs opacity-90">Ancillary POS</div>
      </div>
      <nav className="flex-1 px-2 py-3 space-y-1">
        <NavItem href="/pos">POS</NavItem>
        <NavItem href="/dashboard">Dashboard</NavItem>
        <NavItem href="/flights">Flights</NavItem>
        <NavItem href="/rates">Rates</NavItem>
        <NavItem href="/reports">Reports</NavItem>
        <NavItem href="/settings">Settings</NavItem>
      </nav>
      <div className="mt-auto px-3 py-4 border-t border-white/10 text-xs">
        <div className="opacity-90">agent@airarabia.com</div>
        <div className="opacity-80">Agent</div>
        <button className="mt-3 w-full rounded-md bg-white/10 hover:bg-white/20 px-3 py-2">Logout</button>
      </div>
    </aside>
  );
}
