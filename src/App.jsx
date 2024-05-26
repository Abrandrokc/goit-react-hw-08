
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import { useDispatch, useSelector } from "react-redux"
import { useEffect,  lazy, Suspense, } from "react"
import { selectIsRefreshing } from "./redux/auth/selectors"
import { refreshUser } from "./redux/auth/operations"
import RestrictedRoute from "./components/RestrictedRoute"
import PrivateRoute from "./components/PrivateRoute"
const HomePage = lazy(() => import("./pages/HomePage/HomePage"))
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"))
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"))
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"))

function App() {
   const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Loading user please wait...</h1>
  ) : <Layout>
      <Suspense fallback={null}>
   <Routes>
    <Route path="/" element={< HomePage />} />
    <Route
            path="/register"
            element={
              <RestrictedRoute component={<RegistrationPage />} redirectTo="/login" />
            }
          />
     <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
            }
          />
     <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Routes>
        </Suspense>
    </Layout>
}

export default App
