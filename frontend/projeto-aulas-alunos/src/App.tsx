import { useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';

const queryClient = new QueryClient();
function App() {
  
  return (  
    <QueryClientProvider client={queryClient}>
        <h1 className="text-3xl font-bold underline">
        Hello world!
        </h1>
    <div className="App">
      <Outlet/>
    </div>
    </QueryClientProvider>
  )
}

export default App;
