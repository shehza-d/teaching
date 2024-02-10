export default function Button({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button className={`${className} bg-white/10 backdrop-blur-[20px] px-3 py-1 rounded-xl`}>
      {children}
    </button>
  );
}

// transition //background-color 0.2s cubic-bezier(0.05, 0, 0.2, 1) 0s