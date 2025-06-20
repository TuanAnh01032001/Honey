
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {  RouterProvider } from "react-router-dom";
import routes from "./routes";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary fallback = {<div>something, Please reload pages</div>}>
        <Suspense fallback= {<div>...loading</div>}>
          <RouterProvider router={routes}/>
        </Suspense>
    </ErrorBoundary>
  </QueryClientProvider>
);

export default App;
