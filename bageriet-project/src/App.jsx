import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './Layout/Layout';
import { ProductsPage } from './pages/Product/ProductsPage';
import { ProductDetail } from './pages/Product/ProductDetail';
import { ContactPage } from './pages/Contact/ContactPage';
import { LoginPage } from './pages/Login/LoginPage';
import { FrontPage } from './pages/FrontPage/FrontPage';
import { Notfound } from './pages/Notfoundpage/Notfound';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index={true} element={<FrontPage/>} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="*" element={<Notfound />} /> 
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
