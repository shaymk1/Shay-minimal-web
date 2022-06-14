import { projects } from '@/data/config';
import Image from 'next/image';

export default function Projects() {
  return (
    <div className="">
      <div className="w-full overflow-x-hidden">
        <h2 className="relative p-6 mx-0 mb-4 text-left landingSectionTitle max-w-max md:w-max">
          {projects.title}
        </h2>
      </div>
      <p className="text-lg">{projects.desc}</p>
      <div className="mt-8 ">
        {projects.projects.map((item, index) => {
          return (
            <div
              key={index}
              className="p-6 mb-4 border border-lightText rounded-xl"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="flex flex-wrap items-center pt-5 -m-3">
                {item.link && (
                  <a
                    href={item.link}
                    className="flex items-center px-3 py-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/static/icons/link.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    />
                    <span className="ml-2 transition-colors duration-500 text-lightText">
                      {item.link}
                    </span>
                  </a>
                )}
                {item.github && (
                  <a
                    href={`https://github.com/${item.github}`}
                    className="flex items-center px-3 py-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/static/icons/github.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    />
                    <span className="ml-2 transition-colors duration-500 text-lightText">
                      {item.github}
                    </span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
