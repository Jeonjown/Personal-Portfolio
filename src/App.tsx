import "./App.css";
import Book from "./components/Book";
import Header from "./components/Header";
import useMode from "./hooks/useMode";
import { AnimatePresence, motion } from "framer-motion";
import Website from "./pages/Website";

function App() {
  const { mode } = useMode();

  return (
    <div className="flex min-h-screen flex-col">
      <Header journalMode={!mode} />

      <main className="flex items-center justify-center">
        <AnimatePresence mode="wait">
          {mode ? (
            <motion.div
              key="website"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="max-w-2xl p-5 font-sans text-white"
            >
              <Website />
            </motion.div>
          ) : (
            <motion.div
              key="book"
              initial={{ opacity: 0, x: -400 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="font-garamond z-50 mx-auto my-15 flex max-h-[700px] w-full justify-center"
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
