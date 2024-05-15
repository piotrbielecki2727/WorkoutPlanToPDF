import MainApplication from './Components/MainApplication';
import { useWorkoutPlanStatesSelector } from './Hooks/useWorkoutPlanStatesSelector';
import { StartPage } from './Pages/StartPage';


function App() {

  const doWorkoutPlanExist = useWorkoutPlanStatesSelector();

  return (
    <>
      {doWorkoutPlanExist.isWorkoutPlanCreated ? (<MainApplication />
      ) : (
        <StartPage />
      )}
    </>
  );
}

export default App;
