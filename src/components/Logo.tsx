export function Logo() {
  return (
    <div className="flex items-center gap-1">
      <div className="flex-shrink-0">
        <img 
          src="/images/Detoifyr_Logo.png" 
          alt="Detoxifyr Logo" 
          className="w-13 h-14 object-cover"
        />
      </div>
      <div>
        <span className="text-2xl font-bold text-white">Detoxifyr</span>
      </div>
    </div>
  );
}