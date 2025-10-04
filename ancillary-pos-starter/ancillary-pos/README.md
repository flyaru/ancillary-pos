# Air Arabia Ancillary POS (Starter)

Zero-cost starter using Next.js 14 + Tailwind + Supabase.

## Quick start
1) Supabase project is ready. Enable **Email OTP**.
2) Add env vars on Vercel (or locally copy `.env.example` to `.env.local`).  
   - `NEXT_PUBLIC_SUPABASE_URL`  
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`  
   - `SUPABASE_SERVICE_ROLE_KEY` (server only)
3) Deploy on Vercel.

### CSV format for Excess Rates
```
airline_id,scope,origin,destination,region,country,price_per_kg,currency,effective_from,effective_to,is_active,notes
1488...7744,p2p,GIZ,CAI,,,60,SAR,2025-10-04,NULL,TRUE,GIZ-CAI 60/kg
1488...7744,p2p,GIZ,SHJ,,,57,SAR,2025-10-04,NULL,TRUE,GIZ-SHJ 57/kg
1488...7744,connect_gcc,,,GCC,,55,AED,2025-10-04,NULL,TRUE,Root GCC
1488...7744,connect_other,,,NETWORK,,70,AED,2025-10-04,NULL,TRUE,Root global
```
