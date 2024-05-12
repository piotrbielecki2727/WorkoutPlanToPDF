import { WorkoutPlan, Workout, WorkoutPlanStatesTypes } from "../../Types";

export const createNewWorkout = (workoutPlan: WorkoutPlan, workoutPlanStates: WorkoutPlanStatesTypes, formData: string, dispatch: Function, updateWorkoutPlan: Function, updateWorkoutPlanStates: Function) => {

    let id = 1;
    if (workoutPlan.Workouts.length > 0) {
        const lastId = workoutPlan.Workouts[workoutPlan.Workouts.length - 1].Id;
        if (typeof lastId === 'number') {
            id = lastId + 1;
        }
    }

    const newWorkout: Workout = {
        Id: id,
        Name: formData,
        Exercises: [],
    };

    dispatch(updateWorkoutPlan({
        ...workoutPlan,
        Workouts: [...workoutPlan.Workouts, newWorkout],
    }));

    dispatch(updateWorkoutPlanStates({ ...workoutPlanStates, doWorkoutsExist: true }));

}


