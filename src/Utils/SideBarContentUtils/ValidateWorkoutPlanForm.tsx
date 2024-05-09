import { Errors, WorkoutPlan } from "../../Types";

export const ValidateWorkoutPlanForm = (formData: WorkoutPlan): Errors | null => {
    const errors: Errors = {
        NameError: '',
        PersonError: '',
        AuthorError: '',
    };

    if (!formData.Name.trim()) {
        errors.NameError = 'Workout plan name is required';
    }

    if (!formData.Person.trim()) {
        errors.PersonError = 'Person full name is required';
    }

    if (!formData.Author.trim()) {
        errors.AuthorError = 'Author is required';
    }

    if (errors.NameError || errors.PersonError || errors.AuthorError) {
        return errors;
    }

    return null;
};
