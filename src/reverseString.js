export default function ReverseString(str) {
  return str
    .split("")
    .reduce((acc, curr) => (acc.push(curr), acc), [])
    .reverse()
    .join("");
}

console.log(ReverseString("mark"));
