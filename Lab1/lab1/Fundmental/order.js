import { EventEmitter } from "node:events";

class OrderSystem extends EventEmitter {
  placeOrder(order) {
    console.log(`order received : #${order.id} for ${order.customerName}`);
    console.log("Saving order to database");
    
    // Emit the event so all registered listeners trigger
    this.emit("orderPlaced", order);
  }
}

const orderObj = new OrderSystem();

// 1. Sending email
orderObj.on("orderPlaced", (order) => {
  console.log(`Sending confirmation email to ${order.email}`);
});

// 2. Inventory service (Fixed: accessing order.items instead of order)
orderObj.on("orderPlaced", (order) => {
  order.items.forEach((item) => {
    console.log(`Reducing stock of ${item.name} by ${item.qty}`);
  });
});

// 3. Shipping service
orderObj.on("orderPlaced", (order) => {
  console.log(`Creating shipping label for order # ${order.id}`);
});

// 4. Logging
orderObj.on("orderPlaced", (order) => {
  console.log(`Logging order ${order.id} - total # ${order.total}`);
});

// 5. Error handling
orderObj.on("error", (err) => {
  console.error(`Error processing order: ${err.message}`);
});

// Execute
orderObj.placeOrder({
  id: "ORD10001",
  customerName: "Ramesh Solanki",
  email: "ramesh.sol27@gmail.com",
  items: [
    { name: "wireless mouse", qty: 1 },
    { name: "wireless headset", qty: 2 },
  ],
  total: 2399,
});