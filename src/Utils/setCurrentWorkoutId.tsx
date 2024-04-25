import { ConnectedProps, connect } from "react-redux";
import { updateWorkoutPlanStates } from "../State/WorkoutPlan/workoutPlanStatesSlice";
import { RootState } from "../State/store";


interface setCurrentWorkoutProps extends PropsFromRedux {
    Id: number,
}



export const setCurrentWorkoutId: React.FC<setCurrentWorkoutProps> = ({ Id }) => {



    return (<>

    </>)
}

const mapStateToProps = (state: RootState) => ({
    workoutPlan: state.workoutPlan.workoutPlan,
    workoutPlanStates: state.workoutPlanStates.workoutPlanStates,
});

const mapDispatchToProps = {
    updateWorkoutPlanStates
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(setCurrentWorkoutId);