
import MainPage from './Components/MainPage';
import { WorkoutPlanPage } from './Pages/WorkoutPlanPage';

function App() {
  return (
    <>
      <MainPage children={<WorkoutPlanPage />} />
    </>
  );
}

export default App;
