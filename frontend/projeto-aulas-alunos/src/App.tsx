import { useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
function App() {
  
  return (  
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Outlet/>
    </div>
    </QueryClientProvider>
  )
}

export default App
