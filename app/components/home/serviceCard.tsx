interface ServiceCardProps {
  title: string;
  content: string;
}

export default function ServiceCard({ title, content }: ServiceCardProps) {
  return (
    <article className="h-56 w-96 flex flex-col items-center justify-start py-8 text-center bg-grey rounded-xl px-12 shadow-2xl gap-2">
      <h1 className="text-xl text-white">{title}</h1>
      <hr className="w-full border-[1px] border-accent" />
      <p className="text-white py-2">{content}</p>
    </article>
  );
}
