import { CardProps } from "../@types/cards";

export default function Cards(props: CardProps) {
  return (
    <a 
      href={props.url} 
      target="_blank" 
      rel="noreferrer" 
      className="relative flex flex-col gap-3 p-3 border rounded-lg shadow-md bg-white hover:bg-gray-100 transition-colors duration-300 group"
    >
      <div className="flex gap-3 items-start">
        <img src={props.image} alt={props.title} className="w-16 h-16 rounded-lg object-cover" />
        <div className="flex-1 flex flex-col justify-start">
          <h1 className="text-lg font-semibold text-left">{props.title}</h1>
          <div className="relative">
            <img 
              src="/img/Vector.png" 
              alt="Arrow" 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
            />
            <p className="text-sm text-gray-500 overflow-hidden whitespace-nowrap truncate max-w-[250px]">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}