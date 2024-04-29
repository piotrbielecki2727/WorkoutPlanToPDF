import { FormControl, FormErrorMessage, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react"
import React, { useState } from "react"
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { FaSave } from "react-icons/fa";
import { Errors } from "../../../Types";
import { CustomButton } from "../../CustomComponents/CustomButton";
import { RootState } from "../../../State/store";
import { updateWorkoutPlan } from "../../../State/WorkoutPlan/workoutPlanSlice";
import { updateWorkoutPlanStates } from "../../../State/WorkoutPlan/workoutPlanStatesSlice";
import { updateExercise } from "../../../State/WorkoutPlan/exerciseSlice";
import { updateWorkout } from "../../../State/WorkoutPlan/workoutSlice";
import { findWorkout } from "../../../Utils/CurrentWorkoutUtils/findWorkout";
import { useWorkoutPlanSelector } from "../../../Hooks/useWorkoutPlanSelector";
import { useWorkoutPlanStatesSelector } from "../../../Hooks/useWorkoutPlanStatesSelector";

interface Props extends PropsFromRedux {
    onCloseModal: () => void;

};



export const FormAddExerciseToWorkout: React.FC<Props> = ({ onCloseModal, exercise, updateExercise, workout, updateWorkout }) => {
    const dispatch = useDispatch();
    const workoutPlan = useWorkoutPlanSelector();
    const workoutPlanStates = useWorkoutPlanStatesSelector();
    const currentWorkout = findWorkout(workoutPlanStates.CurrentWorkoutId, workoutPlan);

    const [errors, setErrors] = useState<Errors>({
        NameError: '',
        PersonError: '',
        AuthorError: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateExercise({ ...exercise, [name]: value });

    }


    const handleSubmitForm = () => {
        console.log(exercise);
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
    
        dispatch(updateExercise(exercise));
        onCloseModal();
    }


    return (
        <form onSubmit={handleSubmitForm}>
            <FormControl>
                <FormLabel>Exercise: </FormLabel>
                <Input name="Name" required type='text' value={exercise.Name} onChange={handleInputChange} />

            </FormControl>

            <FormControl >
                <FormLabel>Muscle: </FormLabel>
                <Input name="Muscle" required type='text' value={exercise.Muscle} onChange={handleInputChange} />

            </FormControl>
            {/*<FormControl isInvalid={!!errors.AuthorError}>
                <FormLabel>Sets: </FormLabel>
                <NumberInput min={1} defaultValue={1}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>

            <FormControl isInvalid={!!errors.AuthorError}>
                <FormLabel>Reps: </FormLabel>
                <NumberInput defaultValue={5} min={1} max={150}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>

            <FormControl isInvalid={!!errors.AuthorError}>
                <FormLabel>Weight: </FormLabel>
                <NumberInput defaultValue={0} min={0} >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>
 */}


            <CustomButton onClick={handleSubmitForm} className="ButtonStyle" size="lg" leftIcon={FaSave} buttonText="create workout"></CustomButton>


        </form>

    )
}

const mapStateToProps = (state: RootState) => ({
    exercise: state.exercise.exercise,
    workout: state.workout.workout
});

const mapDispatchToProps = {
    updateExercise,
    updateWorkout
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(FormAddExerciseToWorkout);




