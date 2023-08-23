import { useState } from 'react'
import voteTable from './assets/vote-table.png'
import breeds from './assets/pet-breeds.png'
import gallery from './assets/images-search.png'
import logo from './assets/logo.png'
import Hero from './components/hero'
import Cats from './components/Cats'
import './App.css'

function App() {


  return (
    <>
      <div className='app-container'>
        <div className="left-section">
          <div className='sticky'>
            <div className="logo">
              <img src={logo} alt="" srcset="" />
            </div>
            <div className="header">
              <h1>Hi! 👋</h1>
              <h4>Welcome to MacPaw Bootcamp 2023</h4>
            </div>
            <div className="nav">
              <h3>Lets start using The Cat Api</h3>
              <div className="nav-menu">
              <div className="nav-item">
                <div className="nav-icon vote">
                  <img src={voteTable} alt="" srcset="" />
                </div>
                <button>Voting</button>
              </div>
              <div className="nav-item">
                <div className="nav-icon breeds">
                  <img src={breeds} alt="" srcset="" />
                </div>
                <button>Breeds</button>
              </div>
              <div className="nav-item">
                <div className="nav-icon gallery">
                  <img src={gallery} alt="" srcset="" />
                </div>
                <button>Gallery</button>
              </div>
              
            </div>
          </div>
          </div>
          
        </div>
        <div className="right-section">
          <Hero></Hero>
          
        </div>
      </div>
    </>
  )
}

export default App
