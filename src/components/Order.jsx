import React, { useEffect } from "react";

export default function Order({ todos, setOrder }) {
  const order = todos.sort((a, b) => b.trueCount - a.trueCount);
  let sorted = [];
  const newOrder = order.forEach((task) => {
    task.complete === false ? sorted.unshift(task) : sorted.push(task);
  });
  useEffect(() => setOrder(sorted), [todos]);
  return null;
}

/*Order makes sure that the complete tasks are displayed
in the correct order when marked complete
*/
