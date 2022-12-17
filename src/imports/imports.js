import {
  differenceInMinutes,
  hoursToSeconds,
  minutesToSeconds,
  minutesToHours,
  millisecondsToHours,
  millisecondsToMinutes,
  millisecondsToSeconds,
} from 'date-fns';

export function dateTransform(orders) {
  orders.forEach((order) => {
    const date = new Date(order.createdAt);
    const newDate = date.toLocaleString();
    order.createdAt = newDate;
  });
}

export function timeDuration(processed, created) {
  const processedAt = new Date(processed);
  const createdAt = new Date(created);
  const time = differenceInMinutes(processedAt, createdAt);
  const minutes = time % 60;
  if (time > 60) {
    const final = minutesToHours(time);
    return `${final}:${minutes} horas`;
  }
  return `${time}:${minutes} min`;
}

export function cookingTime(created, time) {
  const date = new Date(created);
  const startPrepare = time - date;
  const hours = millisecondsToHours(startPrepare);
  const minutes = millisecondsToMinutes(startPrepare) % 60;
  const seconds = millisecondsToSeconds(startPrepare)
                  - hoursToSeconds(hours)
                  - minutesToSeconds(minutes);
  return `${hours}:${minutes}:${seconds}`;
}
