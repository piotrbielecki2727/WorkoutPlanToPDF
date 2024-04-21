import { WorkoutPlan } from "../Types"
import { useSelector } from "react-redux";
import { RootState } from "../State/store";

export const DisplayWorkoutPlan: React.FC = () => {

    const workoutPlan: WorkoutPlan = useSelector((state: RootState) => state.workoutPlan.workoutPlan);


    return (
        <div>
            <ul>
                <li>Name: {workoutPlan.Name}</li>
                <li>Person: {workoutPlan.Person}</li>
                <li>Author: {workoutPlan.Author}</li>
            </ul>
        </div>
    )
}