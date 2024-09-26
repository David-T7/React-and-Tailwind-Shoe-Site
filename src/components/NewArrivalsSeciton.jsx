import Card from "./Card";
export default function NewArrivalsSeciton({ items, setSelectedShoe }) {
  return (
    <div className="">
      <div className="flex-center mt-20 bg-[url('./assets/lines.png')] text-4xl font-extrabold dark:text-white">
        NEW ARRIVALS
      </div>
      <div className="mt-10 grid grid-cols-1 justify-between gap-y-20 md:grid-cols-2 xl:grid-cols-[repeat(3,30%)]">
        {items.map((item) => (
          <Card key={item} item={item} setSelectedShoe={setSelectedShoe} />
        ))}
      </div>
    </div>
  );
}
