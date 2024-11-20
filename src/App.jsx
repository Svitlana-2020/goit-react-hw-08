import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import SearchBox from './components/SearchBox'
import { selectContacts, selectError, selectIsLoading } from './redux/contacts/selectors.js'
import { useEffect } from 'react'
import { fetchContacts } from './redux/contacts/operations.js'
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";
import Navigation from './components/Navigation'
import PrivateRoute from './components/PrivateRoute.jsx';

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const LoginPage = lazy(() => import('./pages/LoginPage.jsx'))
const ContactsPage = lazy(() => import('./pages/ContactsPage.jsx'))
const RegistrationPage = lazy(() => import('./pages/RegistrationPage.jsx'))

function App() {
  const dispatch = useDispatch();
  useEffect (() => {dispatch(fetchContacts())}, [dispatch])
const isLoading = useSelector(selectIsLoading);
const error = useSelector(selectError);
const contacts = useSelector(selectContacts);
console.log(contacts)

  return (
    <>
    <Navigation/>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/register" element={<RegistrationPage/>} />
 
    <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/>}/>} >

    <Route path="/list" element={
<>
      {isLoading && <p>Loading</p>}
      {error && <p>an error occurred</p>}      
      {contacts.length > 0 && <PrivateRoute component={<ContactList />}/>}
 </>   
      }/>

    <Route path="/newcontact" element={<PrivateRoute component={<ContactForm/>}/>} />
    <Route path="/search" element={<PrivateRoute component={<SearchBox />} />} />
    </Route>
    </Routes>
    </Suspense>
    </>
  )
}

export default App
