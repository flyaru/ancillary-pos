import BookingCard from "@/components/BookingCard";

export default function POSLanding() {
  return (
    <div className="relative h-full blur-hero">
      <div className="absolute inset-0 flex items-center justify-center">
        <BookingCard />
      </div>
      <div className="absolute top-3 right-6 text-xs text-white/90">
        GIZ Station
        <div className="opacity-80">Jizan, Saudi Arabia</div>
      </div>
    </div>
  );
}
