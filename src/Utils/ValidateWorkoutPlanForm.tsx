import { Errors, WorkoutPlan } from "../Types";

export const ValidateWorkoutPlanForm = (workoutPlan: WorkoutPlan): Errors | null => {
    const errors: Errors = {
        NameError: '',
        PersonError: '',
        AuthorError: '',
    };

    if (!workoutPlan.Name.trim()) {
        errors.NameError = 'Workout plan name is required';
    }

    if (!workoutPlan.Person.trim()) {
        errors.PersonError = 'Person full name is required';
    }

    if (!workoutPlan.Author.trim()) {
        errors.AuthorError = 'Author is required';
    }

    if (errors.NameError || errors.PersonError || errors.AuthorError) {
        return errors;
    }

    return null;
};
