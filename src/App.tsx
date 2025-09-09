import "./App.css";
import Book from "./components/Book";
import Header from "./components/Header";
import useMode from "./hooks/useMode";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const { mode } = useMode();

  return (
    <div className="font-garamond flex min-h-screen flex-col bg-blue-950">
      <Header />

      <main className="flex items-center justify-center">
        <AnimatePresence mode="wait">
          {mode ? (
            <motion.div
              key="website"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex items-center justify-center"
            >
              <p className="text-white">Website</p>
            </motion.div>
          ) : (
            <motion.div
              key="book"
              initial={{ opacity: 0, x: -400 }} // start off-screen to the left
              animate={{ opacity: 1, x: 0 }} // slide into center
              exit={{ opacity: 0, x: 300 }} // slide out to the right
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="mx-auto my-10 flex max-h-[800px] w-full justify-center"
            >
              <Book />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
