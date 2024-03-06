# DSA for Frontend

- React Font Size Fitting App
  - This React app utilizes the binary search algorithm to dynamically adjust the font size, demonstrating the application of DSA principles for frontend development.

## Topics

1. [Binary Search Algorithm](#binary-search-algorithm)
2. (Future Topics...)

## Binary Search Algorithm

The binary search algorithm efficiently finds the optimal font size that fits within the given container width, showcasing the integration of DSA in frontend solutions.

### Algorithm Steps

1. **Initialization:**

   - Set the minimum font size (`min`) to 1.
   - Set the maximum font size (`max`) to 2000.

2. **Binary Search Loop:**

   - While `min` is less than or equal to `max`, perform the following steps:
     - Calculate the middle font size (`mid`) as the floor of the average of `min` and `max`.
     - Set the font size of the text element to `mid` pixels.
     - If the text element's width is less than or equal to the container width, update `min` to `mid + 1`.
     - Otherwise, update `max` to `mid - 1`.

3. **Final Result:**
   - Set the font size of the text element to the maximum font size (`max`) that fits within the container.

## Usage

To apply DSA principles for frontend font size adjustment:

1. Clone the repository.
2. Install dependencies with `npm install` or `yarn install`.
3. Run the app with `npm start` or `yarn start`.
4. Open the app in your browser and observe the font size adjustment based on the container width.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
