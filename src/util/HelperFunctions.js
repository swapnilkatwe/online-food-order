export function getCartTotalAmount(items) {
  return items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
}
