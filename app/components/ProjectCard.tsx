interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  path: string;
}

export default function ProjectCard({ title, description, image, path }: ProjectCardProps) {
  return (
    <div>
      <div className={"mb-3 p-2"}>
        <h1 className={"text-2xl font-bold mb-2"}>{title}</h1>
        <p className={"text-sm h-16"}>{description}</p>
      </div>
      <a href={path}>
        <img src={image} alt={title} height={"315"} className={"max-w-full mx-auto rounded-md img-hover-zoom"}/>
      </a>
    </div>
  );
}