import { hero } from '@/data/config';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Hero() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mb-20">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="relative w-20 h-20 overflow-hidden rounded-[50%]">
          <Image
            src="/../public/static/profile.jpeg"
            layout="fill"
            objectFit="contain"
            alt="me"
          />
        </div>
        <Image
          src="/static/icons/sun.svg"
          width={30}
          height={30}
          alt="Toggle theme"
          className="cursor-pointer toggleTheme"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </div>
      <h1 className="mt-5 mb-4">{hero.title}</h1>
      <p className="text-lg">{hero.desc}</p>
    </div>
  );
}
