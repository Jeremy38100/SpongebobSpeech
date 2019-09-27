#!/usr/bin/env node

const [,, ...args] = process.argv

console.log([...args.join(' ')].map((e,i) => i % 2 ? e : e.toUpperCase()).join(''));