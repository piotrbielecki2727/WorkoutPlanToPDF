import { Exercise, Workout, WorkoutPlan } from "../../Types";


export const updateExerciseList = (workoutPlan: WorkoutPlan , exercise: Exercise, editingExerciseId: number | undefined, currentWorkout: Workout | null) => {
    return workoutPlan.Workouts.map((w) => {
        if (w.Id === currentWorkout?.Id) {
            const updatedExercises = w.Exercises.map((ex) =>
                ex.Id === editingExerciseId ? exercise : ex
            );
            return {
                ...w,
                Exercises: editingExerciseId ? updatedExercises : [...w.Exercises, exercise],
            };
        }
        return w;
    });
};