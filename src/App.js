
import Login from "./pages/login";
import {
  Route, Routes, useNavigate, useLocation, Navigate,
} from 'react-router-dom';
import Dashboard from "./pages/dashboard";
import Order from "./pages/order";
import Menu from "./pages/menu";
import Coupon from "./pages/coupon";
import Review from './pages/review';
import ReviewDetails from "./pages/reviewDetails";
import { useEffect } from "react";
import Cookies from "js-cookie";

function App() {
  return (
    <>
    <Routes>
        <Route path="/login" element={<Login></Login>} />
        <Route index element={<Navigate to="/dashboard" />} />
        <Route
          index
          path="/dashboard"
          element={(
            <RequireAuth redirectTo="/login">
              <Dashboard></Dashboard>
            </RequireAuth>
          )}
        />

        <Route
          index
          path="/orders"
          element={(
            <RequireAuth redirectTo="/login">
              <Order></Order>
            </RequireAuth>
          )}
        />
        <Route
          index
          path="/menu"
          element={(
            <RequireAuth redirectTo="/login">
              <Menu></Menu>
            </RequireAuth>
          )}
        />
        <Route
          index
          path="/coupons"
          element={(
            <RequireAuth redirectTo="/login">
              <Coupon></Coupon>
            </RequireAuth>
          )}
        />
        <Route
          index
          path="/review"
          element={(
            <RequireAuth redirectTo="/login">
              <Review></Review>
            </RequireAuth>
          )}
        />
        <Route
          index
          path="/menu/:id"
          element={(
            <RequireAuth redirectTo="/login">
              <ReviewDetails/>
            </RequireAuth>
          )}
        />
      </Routes>
    </>
  );
}

const RequireAuth = ({ redirectTo, children }) => {
  const navigate = useNavigate();
  const loc = useLocation();
  useEffect(() => {
    const id = Cookies.get('token');
    if (!id) {
      navigate(redirectTo, { replace: true, state: { from: loc.pathname } });
    }
  }, []);
  return children;
};

export default App;
