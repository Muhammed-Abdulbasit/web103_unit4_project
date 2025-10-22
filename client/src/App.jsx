import React from 'react'
import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation'
import ViewMugs from './pages/ViewMugs'
import EditMug from './pages/EditMug'
import CreateMug from './pages/CreateMug'
import MugDetails from './pages/MugDetails'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <CreateMug title='MUG MAKER | Customize' />
    },
    {
      path:'/custommugs',
      element: <ViewMugs title='MUG MAKER | All Mugs' />
    },
    {
      path: '/custommugs/:id',
      element: <MugDetails title='MUG MAKER | Details' />
    },
    {
      path: '/edit/:id',
      element: <EditMug title='MUG MAKER | Edit' />
    }
  ])

  return (
    <div className='app'>
      <Navigation />
      { element }
    </div>
  )
}

export default App
