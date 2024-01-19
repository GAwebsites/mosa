interface ProjectCardProps {
  title: string;
  tags: string[];
}

export default function ProjectCard({ title, tags }: ProjectCardProps) {
  return (
    <article className="bg-hero object-cover h-[450px] w-[350px] hover:cursor-pointer">
      <a href="">
        <div className="text-white font-semibold font-montserrat flex flex-col items-center justify-center w-full h-full uppercase hover:backdrop-blur-[2px] hover:backdrop-brightness-75 transition-all duration-700 ease-in-out relative opacity-0 hover:opacity-100">
          <p className="block text-xl">{title}</p>
          <div className="w-full flex items-center justify-around absolute bottom-5">
            {tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className="border-2 py-1 px-3 rounded-full text-sm"
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
      </a>
    </article>
  );
}
