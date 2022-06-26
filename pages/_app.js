import { AnimatePresence } from "framer-motion";

import "./App.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
