import { Box, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import React, { FC, useState } from "react"
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { FaPlus, FaSave } from "react-icons/fa";
import { updateWorkoutPlan } from "../../../State/WorkoutPlan/workoutPlanSlice";
import { updateWorkoutPlanStates } from "../../../State/WorkoutPlan/workoutPlanStatesSlice";
import { RootState } from "../../../State/store";
import { CustomButton } from "../../CustomComponents/CustomButton";
import { validateWorkoutName } from "../../../Utils/WorkoutsUtils/validateWorkoutName";
import { editWorkoutName } from "../../../Utils/WorkoutsUtils/editWorkoutName";
import { createNewWorkout } from "../../../Utils/WorkoutsUtils/createNewWorkout";
import { checkIfWorkoutAlreadyExist } from "../../../Utils/WorkoutsUtils/checkIfWorkoutAlreadyExist";

interface Props extends PropsFromRedux {
    onCloseModal: () => void;
    isEditing?: boolean,
    ActualWorkoutName?: string | undefined,
    ActualWorkoutId?: number,

};

export const WorkoutForm: FC<Props> = ({ ActualWorkoutName, ActualWorkoutId, isEditing, onCloseModal, workoutPlan, workoutPlanStates, updateWorkoutPlanStates }) => {
    const dispatch = useDispatch();
    const [workoutName, setWorkoutName] = useState('');
    const [editedWorkoutName, setEditedWorkoutName] = useState(ActualWorkoutName);

    const [errors, setErrors] = useState({
        NameError: ''
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWorkoutName(event.target.value);
        if (isEditing) {
            setEditedWorkoutName(event.target.value);
        }
    }


    const handleSubmitForm = () => {
        const formData = isEditing ? editedWorkoutName ?? '' : workoutName;
        const validationErrors = validateWorkoutName(formData);
        if (validationErrors) {
            setErrors(validationErrors)
        }
        else {
            setErrors({ NameError: '' });
            if (formData !== ActualWorkoutName || formData.length !== 0) {
                const isWorkoutUnique = checkIfWorkoutAlreadyExist(workoutPlan, formData);
                if (isWorkoutUnique) {
                    setErrors(isWorkoutUnique);
                }
                else {
                    if (isEditing && ActualWorkoutId != null) {
                        editWorkoutName(workoutPlan, ActualWorkoutId, formData, dispatch, updateWorkoutPlan)
                    }
                    else {
                        createNewWorkout(workoutPlan, workoutPlanStates, formData, dispatch, updateWorkoutPlan, updateWorkoutPlanStates)
                    }
                    onCloseModal();
                }
            }
        }
    };
    

    return (
        <form >
            <Box py={3} >
                <FormControl isInvalid={!!errors.NameError}>
                    <FormLabel>Workout name: </FormLabel>
                    <Input border='1px solid #b8b6b6' name="Name" required type='text' value={isEditing ? editedWorkoutName : workoutName} onChange={handleInputChange} />
                    <FormErrorMessage>{errors.NameError}</FormErrorMessage>

                </FormControl>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <CustomButton onClick={handleSubmitForm} mt={5} size="lg" fontSize={16} leftIcon={isEditing ? FaSave : FaPlus} buttonText={isEditing ? "Edit workout name" : "Create workout"}></CustomButton>
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