export let count = 0;
export default function increase() {
  count++;
  console.log(count);
}

export function decrease() {
  count--;
  console.log(count);
}

export function getCount() {
  return count;
}
