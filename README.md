# JavaScript Data Structures and Algorithms

This repository contains implementations of common data structures and algorithms in JavaScript.

## Data Structures and Algorithms

This repository contains implementations of the following data structures and algorithms:

### LRU Cache
- **LRU/index.js:** Implements the Least Recently Used (LRU) cache eviction algorithm.

### List Operations
- **List/hasCycle.js:** Contains functions to detect cycles in a linked list.
- **List/index.js:** Basic linked list operations.
- **List/revert.js:** Reverses a linked list.

### String Operations
- **String/LCP.js:** Finds the Longest Common Prefix among a set of strings.
- **String/revertWords.js:** Reverses the order of words in a string.

### Tree Operations
- **Tree/traversal.js:** Implements different tree traversal algorithms (e.g., inorder, preorder, postorder).

### Array Operations
- **array/d1.js:** General array operations or a specific algorithm.
- **array/intersection.js:** Finds the intersection of two arrays.
- **array/mergeTwo.js:** Merges two sorted arrays.
- **array/twoSum.js:** Finds two numbers in an array that add up to a specific target.

### Sorting Algorithms
- **sort/bubbleSort.js:** Implements the Bubble Sort algorithm.
- **sort/bucketSort.js:** Implements the Bucket Sort algorithm.
- **sort/countingSort.js:** Implements the Counting Sort algorithm.
- **sort/heapSort.js:** Implements the Heap Sort algorithm.
- **sort/insertionSort.js:** Implements the Insertion Sort algorithm.
- **sort/mergeSort.js:** Implements the Merge Sort algorithm.
- **sort/quickSort.js:** Implements the Quick Sort algorithm.
- **sort/radixSort.js:** Implements the Radix Sort algorithm.
- **sort/selectionSort.js:** Implements the Selection Sort algorithm.
- **sort/shellSort.js:** Implements the Shell Sort algorithm.
- **sort/shuffle.js:** Implements an algorithm to shuffle an array (e.g., Fisher-Yates shuffle).
- **sort/triangleNumber.js:** Operations related to triangle numbers.

## Usage

Each file can be run directly using Node.js. For example, to run the Bubble Sort algorithm:
```bash
node sort/bubbleSort.js
```

For modules exporting classes or functions, you can import them into your own JavaScript projects.

### Example: LRU Cache (`LRU/index.js`)

To use the LRU cache:

```javascript
const LRUCache = require('./LRU/index.js'); // Adjust path as needed

// Create a new cache with a capacity of 3
const cache = new LRUCache(3);

// Add items to the cache
cache.put(1, 'apple');
cache.put(2, 'banana');
cache.put(3, 'cherry');

// Access an item (makes it recently used)
console.log(cache.get(1)); // Output: apple

// Add another item, exceeding capacity (least recently used item 'banana' will be evicted)
cache.put(4, 'date');

// Try to get the evicted item
console.log(cache.get(2)); // Output: -1 (or appropriate not found indicator)

// Get current cache contents
console.log(cache.cache); // Observe the current state of the cache
```

### Example: Bubble Sort (`sort/bubbleSort.js`)

The `sort/bubbleSort.js` file likely contains a sample array that is sorted when the file is run. To test with different inputs, you can modify this array directly in the file.

For example, if the file has:
```javascript
// sort/bubbleSort.js
function bubbleSort(arr) {
  // ... sort logic ...
  return arr;
}

let exampleArray = [5, 1, 4, 2, 8];
console.log("Original array:", exampleArray);
console.log("Sorted array:", bubbleSort(exampleArray.slice())); // Use slice to keep original intact
```

You can change `exampleArray` to your desired test case:
```javascript
// sort/bubbleSort.js
// ... (bubbleSort function) ...

let exampleArray = [10, -3, 7, 29, 0, 15]; // Modified array
console.log("Original array:", exampleArray);
console.log("Sorted array:", bubbleSort(exampleArray.slice()));
```
Then run `node sort/bubbleSort.js` to see the output for your new array. If the file exports the `bubbleSort` function, you can also import it into another script:

```javascript
// your-test-script.js
const bubbleSort = require('./sort/bubbleSort.js'); // Adjust path as needed

const myArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(myArray));
```

## Contributing

Contributions are welcome! If you have any improvements or new algorithms/data structures to add, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
