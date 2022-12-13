import { differenceInMinutes, minutesToHours, millisecondsToHours } from 'date-fns';

export function dateTransform(orders) {
  orders.forEach((order) => {
    const date = new Date(order.createdAt);
    const newDate = date.toLocaleString();
    order.createdAt = newDate;
  });
}

export const timeDuration = (processed, created) => {
  const processedAt = new Date(processed);
  const createdAt = new Date(created);
  const time = differenceInMinutes(processedAt, createdAt);
  const module = time % 60;
  if (time > 60) {
    const final = minutesToHours(time);
    return `${final}:${module} horas`;
  }
  return `${time}:${module} min`;
};

export function cookingTime(created, time) {
  const date = new Date(created);
  const startPrepare = time - date.getUTCMilliseconds();
  const transform = millisecondsToHours(startPrepare);
  return transform;
}
