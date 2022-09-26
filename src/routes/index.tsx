import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { SalesPage } from '~/pages/SalesPage'
import { QuestionOne } from '~/pages/Quiz/QuestionOne'
import { QuestionTwo } from '~/pages/Quiz/QuestionTwo'
import { QuestionThree } from '~/pages/Quiz/QuestionThree'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/famous-method" element={<SalesPage />} />
        <Route path="/question-one" element={<QuestionOne />} />
        <Route path="/question-two" element={<QuestionTwo />} />
        <Route path="/question-three" element={<QuestionThree />} />
      </Routes>
    </BrowserRouter>
  )
}
