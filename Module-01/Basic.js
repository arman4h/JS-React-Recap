// > **Q: Difference Betwwen Var, Let , Const?**
// >
// > **A:** **Short Answer:**
// > * **`var`** → Function-scoped, can be re-declared & re-assigned
// > * **`let`** → Block-scoped, cannot be re-declared, can be re-assigned
// > * **`const`** → Block-scoped, cannot be re-declared or re-assigned (but object properties can change)

// > ✅ **Best practice:** Use `const` by default, `let` if value changes, avoid `var`.


const dress = ['shirt', 'pant', 'jacket']  
console.log (dress)
dress.push('maflar')

console.log (dress)