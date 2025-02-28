interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  path: string;
}

export default function ProjectCard({ title, description, image, path }: ProjectCardProps) {
  return (
    <a href={path}>
      <div className="bg-neutral-200 dark:bg-neutral-800 rounded-md p-8 hover:scale-95 transition-all">
        <div>
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
        <div className="overflow-hidden rounded-md">
          <img
            src={image}
            alt={title}
            height="315"
            className="max-w-full mx-auto rounded-md transition-transform duration-300"
          />
        </div>
      </div>
    </a>
  );
}