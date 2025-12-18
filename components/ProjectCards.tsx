// src/components/ProjectCards.tsx
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectCards() {
    return (
        <section className="mt-20">
            <h2 className="text-2xl font-bold mb-8">Projects</h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
}
