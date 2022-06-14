import { stack } from '@/data/config';

export default function Stack() {
  return (
    <div>
      <div className="w-full overflow-x-hidden">
        <h2 className="relative p-6 mx-0 mb-4 text-left landingSectionTitle max-w-max md:w-max">
          {stack.title}
        </h2>
      </div>
      <div className="flex flex-wrap w-full -m-2">
        {stack.stack.map((item, index) => (
          <span
            className="px-3 py-1 m-2 border rounded-lg border-lightText"
            key={index}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
