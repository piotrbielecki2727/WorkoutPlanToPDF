import { ChoosedExercise, Exercise, ExerciseErrors, WorkoutPlan } from "../../Types"
import { checkIfExerciseIsInWorkout } from "./checkIfExerciseIsInWorkout";

export const validateNewExercise = (exercise: Exercise, workoutPlan: WorkoutPlan, exerciseId: number, editingExerciseId: number | undefined): ExerciseErrors | null => {


    const errors = {
        NameError: '',
        SetsError: '',
        RepsError: '',
    };



    const checkIfExerciseExist = checkIfExerciseIsInWorkout(workoutPlan, exerciseId, editingExerciseId)


    if (checkIfExerciseExist) {
        errors.NameError = checkIfExerciseExist;
    }

    else if (!exercise.Name.trim()) {
        errors.NameError = "Name of exercise cannot be empty!"
    }
    else if (exercise.Name.length > 40) {
        errors.NameError = "Name of exercise cannot be longer than 40!"
    }
    else if (exercise.Name.length < 3) {
        errors.NameError = "Name of exercise cannot be shorter than 3!"
    }

    if (exercise.Sets.Sets < 1) {
        errors.SetsError = "Sets field cannot be shorter than 1!"
    }

    if (exercise.Sets.Reps < 1) {
        errors.RepsError = "Reps field cannot be shorter than 1!"
    }


    const errorsExist = Object.values(errors).some(error => error !== '')

    if (errorsExist)
        return errors;
    else
        return null;
}
