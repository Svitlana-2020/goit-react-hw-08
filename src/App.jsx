import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { selectContacts } from './redux/contacts/selectors.js'
import { useEffect } from 'react'
import { Layout } from './components/Layout.jsx'
// import { fetchContacts } from './redux/contacts/operations.js'
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";
// import Navigation from './components/Navigation'
import PrivateRoute from './components/PrivateRoute.jsx';
import RestrictedRoute from './components/RestrictedRoute.jsx'
import { ApiRefreshUser } from './redux/auth/operations.js'
import { selectisLoggedIn } from './redux/auth/selectors.js'


const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const LoginPage = lazy(() => import('./pages/LoginPage.jsx'))
const ContactsPage = lazy(() => import('./pages/ContactsPage.jsx'))
const RegistrationPage = lazy(() => import('./pages/RegistrationPage.jsx'))

function App() {
  const dispatch = useDispatch();
  // useEffect (() => {dispatch(fetchContacts())}, [dispatch])
  useEffect (() => {dispatch(ApiRefreshUser())}, [dispatch])
// const isLoading = useSelector(selectIsLoading);
// const error = useSelector(selectError);
const contacts = useSelector(selectContacts);
console.log(contacts)
const isLoggedIn = useSelector(selectisLoggedIn);

  return (
    <>
    {/* <Navigation/> */}
    <Suspense fallback={<div>Loading...</div>}>

    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={!isLoggedIn && <HomePage/>} />
    <Route path="/login" element={<RestrictedRoute component={<LoginPage/>}/>} />
    <Route path="/register" element={<RestrictedRoute component={<RegistrationPage/>}/>} />
 
    <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/>}/>} />
</Route>
    </Routes>
    </Suspense>
    </>
  )
}

export default App

// {isLoading && <p>Loading</p>}
// {error && <p>an error occurred</p>}      
// {contacts.length > 0 && 


// <Route path="list" element={<PrivateRoute component={<ContactList />}/>}/>

// <Route path="newcontact" element={<PrivateRoute component={<ContactForm/>}/>} />
// <Route path="search" element={<PrivateRoute component={<SearchBox />} />} />
