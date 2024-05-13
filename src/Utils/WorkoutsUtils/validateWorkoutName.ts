import { checkIfWorkoutAlreadyExist } from "./checkIfWorkoutAlreadyExist";
import { checkIfWorkoutsExist } from "./checkIfWorkoutsExist";

export const validateWorkoutName = (formData: string) => {

    const errors = {
        NameError: '',
    };

    if (!formData.trim()) {
        errors.NameError = 'Workout name cannot be empty';
    } else if (formData.length > 30) {
        errors.NameError = 'Workout name cannot be longer than 30 characters';
    }

    if (errors.NameError)
        return errors;
    else
        return null



}


