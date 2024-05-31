import React, { FC, useEffect, useState } from "react"
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { RootState } from "../../../State/store";
import { updateWorkoutPlan } from "../../../State/WorkoutPlan/workoutPlanSlice";
import { findWorkout } from "../../../Utils/CurrentWorkoutUtils/findWorkout";
import { useWorkoutPlanStatesSelector } from "../../../Hooks/useWorkoutPlanStatesSelector";
import { DisplayAddExerciseForm } from "./DisplayAddExerciseForm";
import { ChoosedExercise, Exercise, ExerciseErrors } from "../../../Types";
import { validateNewExercise } from "../../../Utils/CurrentWorkoutUtils/validateNewExercise";
import { checkIfExerciseIsInWorkout } from "../../../Utils/CurrentWorkoutUtils/checkIfExerciseIsInWorkout";
import { getDataExerciseToEdit } from "../../../Utils/CurrentWorkoutUtils/getDataExerciseToEdit";
import { updateExerciseList } from "../../../Utils/CurrentWorkoutUtils/updateExerciseList";

interface Props extends PropsFromRedux {
    onCloseModal: () => void;
    isEditing?: boolean,
    editingExerciseId?: number,

};

export const FormAddExerciseToWorkout: FC<Props> = ({ editingExerciseId, onCloseModal, updateWorkoutPlan, workoutPlan }) => {
    const dispatch = useDispatch();
    const workoutPlanStates = useWorkoutPlanStatesSelector();
    const currentWorkout = findWorkout(workoutPlanStates.CurrentWorkoutId, workoutPlan);
    const [choosedExercise, setChoosedExercise] = useState<ChoosedExercise>();
    const [editedData, setEditedData] = useState<Exercise>();

    const [exercise, setExercise] = useState<Exercise>({
        Id: 0, Name: '', Muscle: '',
        Sets: {
            Sets: 0,
            Reps: 0,
            Weight: 0,
            Rest: 0,
        }
    })

    const [errors, setErrors] = useState<ExerciseErrors>({
        NameError: '', SetsError: '', RepsError: '',
    });

    useEffect(() => {
        if (editingExerciseId) {
            const editingExerciseData = getDataExerciseToEdit(editingExerciseId, workoutPlan, workoutPlanStates);
            if (editingExerciseData) {
                setEditedData(editingExerciseData);
                setExercise(editingExerciseData);
                setChoosedExercise({
                    id: editingExerciseData.Id.toString(),
                    exerciseName: editingExerciseData.Name,
                    bodyPart: editingExerciseData.Muscle,
                });
            }
        }
    }, [editingExerciseId]);

    useEffect(() => {
        if (choosedExercise) {
            setErrors(prevErrors => ({
                ...prevErrors,
                NameError: '',
            }));
            setExercise(prevExercise => ({
                ...prevExercise,
                Id: parseInt(choosedExercise.id),
                Name: choosedExercise.exerciseName,
                Muscle: choosedExercise.bodyPart,
            }));
        }
    }, [choosedExercise]);

    const handleInputSetChange = (name: string, valueAsNumber: number) => {
        setExercise(prevExercise => ({
            ...prevExercise,
            Sets: {
                ...prevExercise.Sets,
                [name]: valueAsNumber
            }
        }));
    };

    const handleSubmitForm = () => {
        const validationErrors = validateNewExercise(exercise, workoutPlan, exercise.Id, editingExerciseId);
        if (validationErrors) {
            setErrors(validationErrors);
            return;
        } else {
            setErrors({ NameError: '', SetsError: '', RepsError: '' });
            const updatedExerciseList = updateExerciseList(workoutPlan, exercise, editingExerciseId, currentWorkout);
            dispatch(updateWorkoutPlan({
                ...workoutPlan,
                Workouts: updatedExerciseList,
            }));
            onCloseModal();
        }
    };


    return (
        <DisplayAddExerciseForm
            exercise={exercise}
            onSetChange={handleInputSetChange}
            onFormSubmit={handleSubmitForm}
            validationErrors={errors}
            choosedExercise={choosedExercise}
            setChoosedExercise={setChoosedExercise}
            editingExerciseId={editingExerciseId}
            editedData={editedData}
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




