export function formatMoney(amount: number) {
  try {
    const money = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

    return money;
  } catch (error) {
    console.error("Error conversion money: " + amount);
  }
}
