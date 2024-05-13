import { Errors, WorkoutPlan } from "../../Types";

export const validateWorkoutPlanForm = (formData: WorkoutPlan): Errors | null => {
    const errors: Errors = {
        NameError: '',
        PersonError: '',
        AuthorError: '',
    };

    if (!formData.Name.trim()) {
        errors.NameError = 'Please provide a name for the workout plan';
    }

    else if (formData.Name.length > 40) {
        errors.NameError = 'Workout plan name is too long';
    }

    if (!formData.Person.trim()) {
        errors.PersonError = 'Please provide the full name of the person';
    }

    else if (formData.Person.length > 40) {
        errors.PersonError = 'Person name is too long';
    }

    if (!formData.Author.trim()) {
        errors.AuthorError = 'Please provide the name of the author';
    }

    else if (formData.Author.length > 40) {
        errors.AuthorError = 'Author name is too long';
    }



    if (errors.NameError || errors.PersonError || errors.AuthorError) {
        return errors;
    }
    

    return null;
};
