interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  path: string;
}

export default function ProjectCard({ title, description, image, path }: ProjectCardProps) {
  return (
    <a href={path}>
      <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md p-8 hover:bg-neutral-200 hover:dark:bg-neutral-700 transition-colors">
        <div>
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <p className="text-sm min-h-14">{description}</p>
        </div>
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            height="315"
            className="max-w-full mx-auto"
          />
        </div>
      </div>
    </a>
  );
}