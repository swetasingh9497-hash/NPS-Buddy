export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        bg-white 
        dark:bg-[#112240]
        border border-gray-200 dark:border-slate-700 
        rounded-2xl 
        p-6 
        shadow-sm 
        transition-all duration-300 
        hover:shadow-xl 
        hover:-translate-y-1
      "
    >
      {children}
    </div>
  );
}
