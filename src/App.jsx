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
    <Suspense fallback={<div>Loading...</div>}>
    {isLoading && <p>Loading</p>}
    {error && <p>an error occurred</p>}
    {contacts.length > 0 && (<ContactList />)}
    <ContactForm />
    <SearchBox />
    </Suspense>
    </>
  )
}

export default App