import { AppProps } from "next/app";
import "../styles/globals.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navbar from "@/templates/LandingPage/components/NavBar";
import Footer from "@/templates/LandingPage/components/Footer";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Navbar/>
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </>
  );
};

export default App;
