interface SortButtonProps {
  title: string;
  tag?: string;
}

export default function SortButton({ title, tag }: SortButtonProps) {
  return (
    <div
      id="tag"
      className="py-2 px-6 rounded-full border  uppercase flex items-center justify-center  hover:text-accent transition-all duration-300 hover:cursor-pointer hover:border-accent border-grey/50"
    >
      {title}
    </div>
  );
}
