import styled from 'styled-components';
import { Link, BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import ArrayField from './components/ArrayField';
import MultipleStepsForm from './components/MultipleSteps';
import DefaultValues from './components/DefaultValues';
import QuickStart from './components/DefaultValues';
import Rerender from './components/Rerender';
import Dependencies from './components/Dependencies';
import Dynamic from './components/Dynamic';
import YupValidation from './components/NestedValidation';

import './app.module.scss';

const Wrapper = styled.div`
  max-width: 768px;
  padding: 1rem;
  margin: 1rem auto;
  background: #fefefe;
  border: 1px solid #eee;

  display: flex;
  flex-direction: row;

  nav {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    margin-right: 2rem;

    a {
      display: block;
      margin-bottom: 2px;
    }
  }
`;

const Index = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="quick-start">start</Link>
        <Link to="multiple-steps">Multiple Steps Form</Link>
        <Link to="array">Array Fields</Link>
        <Link to="default-values">Default Values</Link>
        <Link to="rerender">Mock Fetch Data</Link>
        <Link to="conditional">Conditional</Link>
        <Link to="dynamic">Dynamic</Link>
        <Link to="yup-validation">Yup Validation</Link>
      </nav>

      <div className="demo">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="/multiple-steps" element={<MultipleStepsForm />} />
          <Route path="/array" element={<ArrayField />} />
          <Route path="/default-values" element={<DefaultValues />} />
          <Route path="/quick-start" element={<QuickStart />} />
          <Route path="/rerender" element={<Rerender />} />
          <Route path="/conditional" element={<Dependencies />} />
          <Route path="/dynamic" element={<Dynamic />} />
          <Route path="/yup-validation" element={<YupValidation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
