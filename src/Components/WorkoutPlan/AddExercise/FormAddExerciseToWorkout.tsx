import React, { FC, useState } from "react"
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { RootState } from "../../../State/store";
import { updateWorkoutPlan } from "../../../State/WorkoutPlan/workoutPlanSlice";
import { findWorkout } from "../../../Utils/CurrentWorkoutUtils/findWorkout";
import { useWorkoutPlanStatesSelector } from "../../../Hooks/useWorkoutPlanStatesSelector";
import { DisplayAddExerciseForm } from "./DisplayAddExerciseForm";
import { Exercise, ExerciseErrors } from "../../../Types";
import { validateNewExercise } from "../../../Utils/CurrentWorkoutUtils/validateNewExercise";

interface Props extends PropsFromRedux {
    onCloseModal: () => void;

};



export const FormAddExerciseToWorkout: FC<Props> = ({ onCloseModal, updateWorkoutPlan, workoutPlan }) => {
    const dispatch = useDispatch();
    const workoutPlanStates = useWorkoutPlanStatesSelector();
    const currentWorkout = findWorkout(workoutPlanStates.CurrentWorkoutId, workoutPlan);
    const [choosedExercise, setChoosedExercise] = useState<string>();

    const [exercise, setExercise] = useState<Exercise>({
        Id: 0,
        Name: '',
        Muscle: '',
        Sets: {
            Sets: 0,
            Reps: 0,
            Weight: 0,
            Rest: 0,

        }
    })

    const [errors, setErrors] = useState<ExerciseErrors>({
        NameError: '',
        MuscleError: '',
    });

    const handleInputExerciseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setExercise({ ...exercise, [name]: value });
    }

    const handleInputSetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setExercise(prevExercise => ({
            ...prevExercise,
            Sets: {
                ...prevExercise.Sets,
                [name]: parseFloat(value)
            }
        }));
    };

    const handleSubmitForm = () => {
        const validationErrors = validateNewExercise(exercise);
        if (validationErrors) {
            setErrors(validationErrors);
        }
        else {
            setErrors({ NameError: '', MuscleError: '' });
            const updatedWorkoutList = workoutPlan.Workouts.map((w) => {
                if (w.Id === currentWorkout?.Id) {
                    return {
                        ...w,
                        Exercises: [...w.Exercises, exercise],
                    };
                }
                return w;
            });
            dispatch(updateWorkoutPlan({
                ...workoutPlan,
                Workouts: updatedWorkoutList,
            }));
            onCloseModal();
        }
    }


    return (
        <DisplayAddExerciseForm
            exercise={exercise}
            onExerciseChange={handleInputExerciseChange}
            onSetChange={handleInputSetChange}
            onFormSubmit={handleSubmitForm}
            validationErrors={errors}
            choosedExercise={choosedExercise}
            setChoosedExercise={setChoosedExercise}
        />

    )
}

const mapStateToProps = (state: RootState) => ({
    workoutPlan: state.workoutPlan.workoutPlan,
});

const mapDispatchToProps = {
    updateWorkoutPlan
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(FormAddExerciseToWorkout);




