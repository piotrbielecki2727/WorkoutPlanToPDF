
import SideBarAndMobile from './Components/SideBarAndMobile';
import { useWorkoutPlanStatesSelector } from './Hooks/useWorkoutPlanStatesSelector';
import { StartPage } from './Pages/StartPage';


function App() {

  const doWorkoutPlanExist = useWorkoutPlanStatesSelector();

  return (
    <>
      {doWorkoutPlanExist.isWorkoutPlanCreated ? (<SideBarAndMobile children />
      ) : (
        <StartPage />
      )}
    </>
  );
}

export default App;
