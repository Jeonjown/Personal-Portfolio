// App.tsx
import "./App.css";
import Book from "./components/Book";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-garamond">
      {/* Header */}
      <header className="h-16 bg-gray-900 text-white flex items-center px-6">
        <h1 className="text-lg font-bold">My Website</h1>
      </header>

      {/* Main container */}
      <main className="flex-1 flex items-center justify-center bg-blue-950">
        <Book />
      </main>
    </div>
  );
}

export default App;
