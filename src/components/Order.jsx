import React, { useState } from "react";

export default function Order({ todos, setOrder }) {
  const order = todos.sort((a, b) => b.trueCount - a.trueCount);
  let sorted = [];
  order.forEach((task) => {
    task.complete === false ? sorted.unshift(task) : sorted.push(task);
  });
  return <div>Order</div>;
}
