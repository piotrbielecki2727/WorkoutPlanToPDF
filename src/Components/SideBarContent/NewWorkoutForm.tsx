import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import React, { useState } from "react"
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { WorkoutErrors, Workout } from "../../Types"
import { CustomButton } from "../CustomComponents/CustomButton";
import { FaSave } from "react-icons/fa";
import { updateWorkoutPlan } from "../../State/WorkoutPlan/workoutPlanSlice";
import { RootState } from "../../State/store";
import { updateWorkoutPlanStates } from "../../State/WorkoutPlan/workoutPlanStatesSlice";

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

            let newId = 1;
            if (workoutPlan.Workouts.length > 0) {
                const lastId = workoutPlan.Workouts[workoutPlan.Workouts.length - 1].Id;
                if (lastId !== null && typeof lastId === 'number') {
                    newId = lastId + 1;
                }
            }

            const newWorkout: Workout = {
                Id: newId,
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
        <form>
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