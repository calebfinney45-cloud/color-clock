# React Color Clock
A dynamic digital clock application built with **React** and **date-fns**. This project displays the current time and date, updating every second to provide a real-time interface.

## 🚀 Features
*   **Real-time Updates**: Uses React's `useState` and `useEffect` hooks combined with `setInterval` to sync with the system clock.
*   **Date Formatting**: Leverages the `format` function from the `date-fns` library.
*   **State Management**: Updates the `time` object every 1000ms.

## 🛠️ Tools Used
* **React**: For UI components and state managememnt
* **date-fns**: For efficiency in date parsing and formatting
* **CSS**: Custom styling using external stylesheet and flex

## 📦 How to Run
1.Clone the repository or download the files.
2.Run `npm install` to download the `date-fns` dependency.
3.Run `npm run dev`/`npm start` to launch the clock in your browser.