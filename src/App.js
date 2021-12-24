// import Todo from  './components/Todo';

// function App() {
//   return <div>
//     <h1>My Todos</h1>
//     <Todo text='Eat'/>
//     <Todo text='Read'/>
//     <Todo text='Pray'/>
//   </div>;
// }

// export default App;
  


import { Route, Routes } from 'react-router-dom';
import AllMeetUpsPage from './pages/AllMeetUps';
import NewMeetUpPage from './pages/NewMeetUps';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';




function App() {
  return (
  <Layout>
    
    <Routes>
      <Route path='/' element={<AllMeetUpsPage />} />
        
      <Route path='/new-meetup' element={<NewMeetUpPage />} />

      <Route path='/favorites' element={<FavoritesPage />} />
    </Routes>
  </Layout>
  );
}

export default App;