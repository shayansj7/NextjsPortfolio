import Image from "next/image";

type ProjectCardProps = {
    title: string;
    logo: string;
    description: string,
    tech: string[];
    url: string;
};

export function ProjectCard({ title, logo, description, tech, url }: ProjectCardProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
        group rounded-2xl border bg-white p-6
        hover:shadow-lg transition
        flex flex-col gap-4
      "
        >
            {/* Logo */}
            <div className="h-16 w-16 rounded-xl bg-blue-50 flex items-center justify-center">
                <Image
                    src={logo}
                    alt={title}
                    width={40}
                    height={40}
                    className="object-contain"
                />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold">{title}</h3>

            {/* Description */}
            <h4 className="text-sm">{description}</h4>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mt-auto">
                {tech.map((t) => (
                    <span
                        key={t}
                        className="text-xs rounded-full bg-blue-100 text-blue-700 px-2 py-1"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </a>
    );
}
