import { FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react"
import React, { useState } from "react"
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { FaSave } from "react-icons/fa";
import { Exercise } from "../../../Types";
import { CustomButton } from "../../CustomComponents/CustomButton";
import { RootState } from "../../../State/store";
import { updateWorkoutPlan } from "../../../State/WorkoutPlan/workoutPlanSlice";
import { findWorkout } from "../../../Utils/CurrentWorkoutUtils/findWorkout";
import { useWorkoutPlanStatesSelector } from "../../../Hooks/useWorkoutPlanStatesSelector";
import { FormExercise } from "./FormExercise";

interface Props extends PropsFromRedux {
    onCloseModal: () => void;

};



export const FormAddExerciseToWorkout: React.FC<Props> = ({ onCloseModal, updateWorkoutPlan, workoutPlan }) => {
    const dispatch = useDispatch();
    const workoutPlanStates = useWorkoutPlanStatesSelector();
    const currentWorkout = findWorkout(workoutPlanStates.CurrentWorkoutId, workoutPlan);

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


    return (
        <FormExercise
            exercise={exercise}
            onExerciseChange={handleInputExerciseChange}
            onSetChange={handleInputSetChange}
            onFormSubmit={handleSubmitForm}
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




