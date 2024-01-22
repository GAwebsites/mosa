interface SortButtonProps {
  title: string;
  tag?: string;
}

export default function SortButton({ title, tag }: SortButtonProps) {
  return (
    <div
      id="tag"
      className="py-2 px-6 rounded-full border border-accent uppercase flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 hover:cursor-pointer"
    >
      {title}
    </div>
  );
}
