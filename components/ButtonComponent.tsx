"use client";

const handler = () => {
  console.log("hii there");
};

export function Button() {
  return <button onClick={handler}>Click me </button>;
}
