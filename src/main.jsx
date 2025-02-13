import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import YAYYY from './pages/YAYYY'
import BroCmon from './pages/bro-cmonn'
import AskQuestion from './pages/ask-question'
import PLEASEEE from './pages/PLEASEEEEEEE'
import BroPleaseeeeWTF from './pages/BRO-PLEASEEEEEEEE-WTF'
import NotFoundPage from './pages/not-found-page'
import './index.css'
import Survive from './pages/survive'
import Home from './pages/home'
import FuturePlans from './pages/future-plans'
import FavoritePics from './pages/favorite-pics'
import YAYYY2 from './pages/YAYYY2'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/YAYYY" element={<YAYYY />} />
      <Route path="/YAYYY2" element={<YAYYY2 />} />
      <Route path="/bro-cmonn" element={<BroCmon />} />
      <Route path="/ask-question" element={<AskQuestion />} />
      <Route path="/PLEASEEEEEEE" element={<PLEASEEE />} />
      <Route path="/BRO-PLEASEEEEEEEE-WTF" element={<BroPleaseeeeWTF />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/survive" element={<Survive />} />
      <Route path="/home" element={<Home />} />
      <Route path="/future-plans" element={<FuturePlans />} />
      <Route path="/favorite-pics" element={<FavoritePics />} />
    </Routes>
  </HashRouter>
)
