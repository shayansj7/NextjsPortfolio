import Image from "next/image";
import { ProjectCards } from "@/components/ProjectCards";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-5">
        {/* Welcome */}
        <p className="text-gray-500 text-sm mb-2">
          Welcome to my portfolio
        </p>

        <h2 className="text-4xl font-bold mb-8">
          Hi, I'm Shayan 👋
        </h2>

        {/* Profile section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile image */}
          <div className="w-48 h-48 relative rounded-full overflow-hidden shrink-0">
            <Image
              src="/profile.jpeg"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Description */}
          <div className="text-gray-700 leading-relaxed max-w-xl">
            <p className="mb-4">
              I'm a full-stack software engineer interested in building
              scalable web applications and cloud-based systems.
            </p>

            <p className="mb-4">
              I mainly work with React, Next.js, and AWS,
              and I enjoy designing clean architectures
              and improving developer experience.
            </p>

            <p>
              Currently based in Japan 🇯🇵
            </p>
          </div>
        </div>

      </section>
      {/*Project Section*/}

      <ProjectCards />


      {/* <section className="max-w-6xl mx-auto px-40 py-5">
        <Sidebar />
      </section> */}
    </main>
  );
}
