export const validateWorkoutName = (formData: string) => {

    const errors = {
        NameError: '',
    };


    if (formData.length < 1) {
        errors.NameError = 'Workout name cannot be empty';
    } else if (formData.length > 30) {
        errors.NameError = 'Workout name cannot be longer than 30 characters';
    }

    if (errors.NameError)
        return errors;
    else
        return null



}


