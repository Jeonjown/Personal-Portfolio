// App.tsx
import "./App.css";
import Book from "./components/Book";

function App() {
  return (
    <div className="font-garamond flex min-h-screen flex-col bg-blue-950">
      {/* Header */}
      <header className="flex h-16 items-center bg-gray-900 px-6 text-white">
        <h1 className="text-lg font-bold">My Website</h1>
      </header>

      {/* Main container */}
      <main className="flex items-center justify-center">
        <div className="mx-auto my-10 flex max-h-[800px] w-full justify-center">
          <Book />
        </div>
      </main>
    </div>
  );
}

export default App;
