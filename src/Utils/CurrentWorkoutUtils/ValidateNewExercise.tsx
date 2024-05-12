import { Exercise, ExerciseErrors } from "../../Types"

export const validateNewExercise = (exercise: Exercise): ExerciseErrors | null => {

    const errors: ExerciseErrors = {
        NameError: '',
        MuscleError: '',
    }

    if (!exercise.Name.trim()) {
        errors.NameError = "Name of exercise cannot be empty!"
    }
    else if (exercise.Name.length > 40) {
        errors.NameError = "Name of exercise cannot be longer than 40!"
    }
    else if (exercise.Name.length < 3) {
        errors.NameError = "Name of exercise cannot be shorter than 3!"
    }

    if (!exercise.Muscle.trim()) {
        errors.MuscleError = "Muscle field cannot be empty!"
    }
    else if (exercise.Muscle.length > 30) {
        errors.MuscleError = "Muscle field cannot be longer than 30!"
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
