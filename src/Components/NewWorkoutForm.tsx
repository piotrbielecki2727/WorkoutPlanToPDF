import { FormControl, FormErrorMessage, FormLabel, Input, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { WorkoutErrors, WorkoutPlan, Workout } from "../Types"
import { CustomButton } from "./CustomButton";
import { FaSave } from "react-icons/fa";
import { updateWorkoutPlan } from "../State/WorkoutPlan/workoutPlanSlice";
import { RootState } from "../State/store";
import workoutPlanStatesSlice, { updateWorkoutPlanStates } from "../State/WorkoutPlan/workoutPlanStatesSlice";

interface Props extends PropsFromRedux {
    onCloseModal: () => void;

};



export const NewWorkoutForm: React.FC<Props> = ({ onCloseModal, workoutPlan, workoutPlanStates, updateWorkoutPlanStates }) => {
    const dispatch = useDispatch();
    const [workoutName, setWorkoutName] = useState('');

    const [errors, setErrors] = useState<WorkoutErrors>({
        NameError: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWorkoutName(event.target.value);
    };

    const handleSubmitForm = () => {
        if (workoutName.length < 1) {
            setErrors({ NameError: 'Workout name cannot be empty' })
            return;
        }
        else {
            setErrors({ NameError: '' })

            const newWorkout: Workout = {
                Name: workoutName,
                Exercises: [],
            };

            dispatch(updateWorkoutPlan({
                ...workoutPlan,
                Workouts: [...workoutPlan.Workouts, newWorkout],
            }));

            dispatch(updateWorkoutPlanStates({ ...workoutPlanStates, doWorkoutsExist: true }))

            onCloseModal();
        }

    };




    return (
        <form onSubmit={handleSubmitForm}>
            <FormControl isInvalid={!!errors.NameError}>
                <FormLabel>Workout name: </FormLabel>
                <Input name="Name" required type='text' value={workoutName} onChange={handleInputChange} />
                <FormErrorMessage>{errors.NameError}</FormErrorMessage>

            </FormControl>

            <CustomButton onClick={handleSubmitForm} className="ButtonStyle" size="lg" leftIcon={FaSave} buttonText="create workout"></CustomButton>


        </form>

    )
}

const mapStateToProps = (state: RootState) => ({
    workoutPlan: state.workoutPlan.workoutPlan,
    workoutPlanStates: state.workoutPlanStates.workoutPlanStates,

});

const mapDispatchToProps = {
    updateWorkoutPlan,
    updateWorkoutPlanStates,
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(NewWorkoutForm);