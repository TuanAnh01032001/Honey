
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        </Routes>
      </BrowserRouter>
  </QueryClientProvider>
);

export default App;
