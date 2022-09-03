import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { SalesPage } from '~/pages/SalesPage'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/famous-method" element={<SalesPage />} />
      </Routes>
    </BrowserRouter>
  )
}
