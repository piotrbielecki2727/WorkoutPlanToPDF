import { Exercise, ExerciseErrors } from "../../Types"

export const ValidateNewExercise = (exercise: Exercise): ExerciseErrors | null => {

    const errors: ExerciseErrors = {
        NameError: '',
        MuscleError: '',
    }

    if (!exercise.Name.trim()) {
        errors.NameError = "Name of exercise cannot be empty!"
    }
    else if (exercise.Name.length > 5) {
        errors.NameError = "Name of exercise cannot be longer than 5!"
    }
    else if (exercise.Name.length < 3) {
        errors.NameError = "Name of exercise cannot be shorter than 3!"
    }

    if (!exercise.Muscle.trim()) {
        errors.MuscleError = "Muscle field cannot be empty!"
    }
    else if (exercise.Muscle.length > 10) {
        errors.MuscleError = "Muscle field cannot be longer than 10!"
    }
    else if (exercise.Muscle.length < 3) {
        errors.MuscleError = "Muscle field cannot be shorter than 3!"
    }

    const errorsExist = Object.values(errors).some(error => error !== '')

    if (errorsExist)
        return errors;
    else
        return null;
}
