import CartItem from "./CartItem";
export default function Cart({ cartItems, setAddedItems }) {
  return (
    <>
      <h2 className="mb-10 text-2xl font-bold dark:text-white">Cart</h2>
      <ul className="space-y-5">
        {/* {cartItems.map(cartItem =>  <li key={cartItem.product}> <cartItem item={cartItem.product} />  <li/> )  */}
        {cartItems.length > 0 &&
          cartItems.map((cartItem) => (
            <li key={cartItem.addedShoe.title}>
              {" "}
              <CartItem item={cartItem} setAddedItems={setAddedItems} />{" "}
            </li>
          ))}
      </ul>
    </>
  );
}
