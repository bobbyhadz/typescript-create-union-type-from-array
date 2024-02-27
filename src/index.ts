export {};

// EXAMPLE 1 - Create a Union type from an Array in TypeScript

// 👇️ const sizes: readonly ["small", "medium", "large"]
const sizes = ['small', 'medium', 'large'] as const;

// 👇️ type SizesUnion = "small" | "medium" | "large"
type SizesUnion = (typeof sizes)[number];

// ---------------------------------------------------

// // EXAMPLE 2 - Create a Union type from an Object's Values or Keys in TS

// // 👇️ const obj: {readonly name: "Bobby Hadz"; readonly country: "Chile";}
// const obj = {
//   name: 'Bobby Hadz',
//   country: 'Chile',
// } as const;

// // 👇️ type UValues = "Bobby Hadz" | "Chile"
// type UValues = (typeof obj)[keyof typeof obj];

// // 👇️ type UKeys = "name" | "country"
// type UKeys = keyof typeof obj;

// ---------------------------------------------------

// // EXAMPLE 3 - Getting a union of an object's values

// // 👇️ const obj: {readonly name: "Bobby Hadz"; readonly country: "Chile";}
// const obj = {
//   name: 'Bobby Hadz',
//   country: 'Chile',
// } as const;

// // 👇️ type UValues = "Bobby Hadz" | "Chile"
// type UValues = (typeof obj)[keyof typeof obj];

// // 👇️ type UKeys = "name" | "country"
// type UKeys = keyof typeof obj;
