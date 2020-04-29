//Type Aliases
type Size = "small" | "medium" | "large";
type Callback = (size: Size) => void;
let size: Size = "small";

let pickSize: Callback = (x) => {
  size = x;
};

pickSize("medium");
console.log(size);

//Type Assertions

type Pizza = { name: string; topping: number };

const pizza = { name: "Kaprioza", topping: 5 };

const serialized = JSON.stringify(pizza);

function getNameFromJSON(obj: string): string {
  return (JSON.parse(obj) as Pizza).name;
}

console.log(getNameFromJSON(serialized));
