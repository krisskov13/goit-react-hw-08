import "./App.css";
import { Suspense, lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";
import toast, { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("../../pages/Home"));
const RegisterPage = lazy(() => import("../../pages/Registration"));
const LoginPage = lazy(() => import("../../pages/Login"));
const ContactsPage = lazy(() => import("../../pages/Contacts"));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    dispatch(refreshUser())
      .unwrap()
      .then(() => {
        setIsSuccess(true);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("'User refreshed successfully");
    } else if (isError) {
      toast.error("Error refreshing user");
    }
  }, [isSuccess, isError]);

  return (
    <Layout>
      {isRefreshing ? (
        <p>Refreshing user, please await...</p>
      ) : (
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegisterPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
          </Routes>
        </Suspense>
      )}
      <Toaster />
    </Layout>
  );
}
