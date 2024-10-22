// app/redux-provider.js
"use client";

import { Provider } from "react-redux";
import { store } from "@/lib/store/store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

NProgress.configure({ showSpinner: false });

export function ReduxProvider({ children }) {
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    // Start NProgress on route change
    NProgress.start();

    // Complete NProgress after a short delay
    const completeNProgress = () => {
      NProgress.done();
    };

    // Listen to the pathname change to trigger the completion of the progress
    completeNProgress(); // Call it immediately for the initial load

    // Return a cleanup function to avoid memory leaks
    return () => {
      completeNProgress();
    };
  }, [pathname]); // Run effect on pathname change

  return <Provider store={store}>{children}</Provider>;
}
