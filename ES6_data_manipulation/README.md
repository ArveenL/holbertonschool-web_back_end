Based on the sources provided, here are the primary methods associated with each data structure concept that should be used for effective data manipulation:

### **1. Array**
Arrays are versatile collections that support a vast number of methods for different purposes:
*   **Transformation & Iteration:** Use **`map()`** to transform elements, **`filter()`** to select specific items, and **`reduce()`** or **`reduceRight()`** to aggregate data into a single value. Other iterative methods include **`forEach()`**, **`every()`**, **`some()`**, **`find()`**, and **`findIndex()`**.
*   **Modification (Mutating):** To change the original array, use **`push()`** and **`pop()`** (end), **`unshift()`** and **`shift()`** (beginning), or **`splice()`** for complex additions and removals.
*   **Non-Mutating Alternatives:** Modern JavaScript provides safer alternatives that return a new array instead of modifying the original, such as **`toSorted()`**, **`toReversed()`**, **`toSpliced()`**, and **`with()`**.
*   **Searching & Utilities:** Use **`indexOf()`**, **`lastIndexOf()`**, or **`includes()`** to find values, and **`join()`** to create strings.

### **2. TypedArray**
TypedArrays handle raw binary data and share many methods with regular arrays, but have specific specialized methods:
*   **Specific Methods:** Use **`set()`** to copy multiple values into the typed array at once and **`subarray()`** to create a new view of the same buffer without copying the data.
*   **Shared Methods:** They support most non-mutating array methods like **`map()`**, **`filter()`**, and **`reduce()`**.
*   **Omitted Methods:** Because they are fixed-length, they **do not** support methods that change length, such as `push`, `pop`, `shift`, `unshift`, or `splice`.

### **3. Map**
Maps are optimized for key-value pairs where keys can be of any type:
*   **Data Management:** Use **`set(key, value)`** to add or update entries, **`get(key)`** to retrieve values, and **`has(key)`** to check for existence.
*   **Removal:** Use **`delete(key)`** to remove a specific entry or **`clear()`** to empty the entire map.
*   **Iteration:** Use **`keys()`**, **`values()`**, or **`entries()`** to obtain iterators for the map's contents.
*   **Advanced:** **`Map.groupBy()`** (static) is used to group elements of an iterable into a new Map.

### **4. Set**
Sets are used for collections of unique values:
*   **Basic Operations:** Use **`add(value)`** to insert new items, **`has(value)`** to check for presence, and **`delete(value)`** or **`clear()`** for removal.
*   **Mathematical Composition:** Newer methods allow for set logic: **`union()`**, **`intersection()`**, **`difference()`**, **`symmetricDifference()`**, **`isSubsetOf()`**, **`isSupersetOf()`**, and **`isDisjointFrom()`**.
*   **Iteration:** Like Maps, they support **`keys()`** (alias for values), **`values()`**, **`entries()`**, and **`forEach()`**.

### **5. WeakMap**
WeakMaps are specialized for associating metadata with objects without preventing garbage collection:
*   **Limited API:** They only support **`set()`**, **`get()`**, **`has()`**, and **`delete()`**.
*   **Notable Omissions:** Because they are not enumerable to ensure non-deterministic garbage collection, they **lack** methods like `clear()`, `keys()`, `values()`, and the `size` property.