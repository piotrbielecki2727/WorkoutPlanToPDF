import { Box, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import React, { FC, useState } from "react"
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { WorkoutErrors, Workout } from "../../Types"
import { CustomButton } from "../CustomComponents/CustomButton";
import { FaSave } from "react-icons/fa";
import { updateWorkoutPlan } from "../../State/WorkoutPlan/workoutPlanSlice";
import { RootState } from "../../State/store";
import { updateWorkoutPlanStates } from "../../State/WorkoutPlan/workoutPlanStatesSlice";

interface Props extends PropsFromRedux {
    onCloseModal: () => void;
    isEditing?: boolean,
    ActualWorkoutName?: string | undefined,
    ActualWorkoutId?: number | null,

};

export const WorkoutForm: FC<Props> = ({ ActualWorkoutName, ActualWorkoutId, isEditing, onCloseModal, workoutPlan, workoutPlanStates, updateWorkoutPlanStates }) => {
    const dispatch = useDispatch();

    const [workoutName, setWorkoutName] = useState('');
    const [editedWorkoutName, setEditedWorkoutName] = useState(ActualWorkoutName);

    const [errors, setErrors] = useState<WorkoutErrors>({
        NameError: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(editedWorkoutName);
        setWorkoutName(event.target.value);
        if (isEditing) {
            setEditedWorkoutName(event.target.value);
        }
    }


    const handleSubmitForm = () => {
        const formData = isEditing ? editedWorkoutName ?? '' : workoutName;
    
        if (formData.length < 1) {
            setErrors({ NameError: 'Workout name cannot be empty' })
            return;
        } else if (formData.length > 30) {
            setErrors({ NameError: 'Workout name cannot be longer than 30 characters' })
            return;
        }
    
        setErrors({ NameError: '' });
    
        if (isEditing && ActualWorkoutId != null) {
            const updatedWorkouts = workoutPlan.Workouts.map(workout => {
                if (workout.Id === ActualWorkoutId) {
                    return { ...workout, Name: formData };
                }
                return workout;
            });
    
            dispatch(updateWorkoutPlan({
                ...workoutPlan,
                Workouts: updatedWorkouts,
            }));
        } else {
            let id = 1;
            if (workoutPlan.Workouts.length > 0) {
                const lastId = workoutPlan.Workouts[workoutPlan.Workouts.length - 1].Id;
                if (typeof lastId === 'number') {
                    id = lastId + 1;
                }
            }
    
            const newWorkout: Workout = {
                Id: id,
                Name: formData,
                Exercises: [],
            };
    
            dispatch(updateWorkoutPlan({
                ...workoutPlan,
                Workouts: [...workoutPlan.Workouts, newWorkout],
            }));
    
            dispatch(updateWorkoutPlanStates({ ...workoutPlanStates, doWorkoutsExist: true }));
        }
    
        onCloseModal();
    };

    return (
        <form >
            <Box py={3} >

                <FormControl isInvalid={!!errors.NameError}>

                    <FormLabel>Workout name: </FormLabel>
                    <Input name="Name" required type='text' value={isEditing ? editedWorkoutName : workoutName} onChange={handleInputChange} />
                    <FormErrorMessage>{errors.NameError}</FormErrorMessage>

                </FormControl>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <CustomButton onClick={handleSubmitForm} mt={5} size="lg" fontSize={16} leftIcon={FaSave} buttonText="Create new workout"></CustomButton>
                </Box>
            </Box>

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
export default connector(WorkoutForm);