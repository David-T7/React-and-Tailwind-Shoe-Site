export default function Card({ item, setSelectedShoe }) {
  return (
    <div
    onClick={() => setSelectedShoe(item)} className={`${item.className} m-4 max-w-2xl transform cursor-pointer transition hover:scale-105`}
    >
      <div  className="p-4">
        <div className="text-2xl font-bold">{item.title} </div>
        <div
          className="mt-10 font-semibold underline underline-offset-4 transition duration-300 ease-in-out"
        >
          SHOP NOW+
        </div>
      </div>
      <img className="absolute left-[35%] top-0 h-40 w-56" src={item.src}></img>
    </div>
  );
}
