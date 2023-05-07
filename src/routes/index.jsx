import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Dashboard from '@/pages/Dashboard'
import NotFound from './NotFound'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Orders from '../pages/Orders'
import Customers from '../pages/Customers'
import Users from '../pages/Users'
import Settings from '../pages/Settings'
import Sales from '../pages/Reports/Sales'
import UsersPerformance from '../pages/Reports/Users'
import ScrollToTop from './ScrollToTop'


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />

            <Route path="/reports/sales" element={<Sales />} />
            <Route path="/reports/users-performance" element={<UsersPerformance />} />

            <Route path="/system/users" element={<Users />} />
            <Route path="/system/settings" element={<Settings />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes