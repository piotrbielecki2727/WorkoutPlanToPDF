import { Box, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import React, { useState } from "react"
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { Errors, WorkoutPlanStatesTypes } from "../../Types"
import { CustomButton } from "../CustomComponents/CustomButton";
import { FaSave } from "react-icons/fa";
import { ValidateWorkoutPlanForm } from "../../Utils/SideBarContentUtils/ValidateWorkoutPlanForm";
import { updateWorkoutPlan } from "../../State/WorkoutPlan/workoutPlanSlice";
import { RootState } from "../../State/store";
import { updateWorkoutPlanStates } from "../../State/WorkoutPlan/workoutPlanStatesSlice";

interface Props extends PropsFromRedux {
    onCloseModal: () => void;

};



export const NewWorkoutPlanForm: React.FC<Props> = ({ workoutPlan, updateWorkoutPlan, onCloseModal, workoutPlanStates, updateWorkoutPlanStates }) => {
    const dispatch = useDispatch();

    const [errors, setErrors] = useState<Errors>({
        NameError: '',
        PersonError: '',
        AuthorError: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateWorkoutPlan({ ...workoutPlan, [name]: value });

    }


    const handleSubmitForm = () => {
        console.log(workoutPlan);
        const validationErrors = ValidateWorkoutPlanForm(workoutPlan);
        if (validationErrors) {
            setErrors(validationErrors);
        } else {
            setErrors({ NameError: '', PersonError: '', AuthorError: '' });
            const updatedWorkoutPlanStates: WorkoutPlanStatesTypes = {
                ...workoutPlanStates,
                isWorkoutPlanCreated: true,
            }
            dispatch(updateWorkoutPlan(workoutPlan));
            dispatch(updateWorkoutPlanStates(updatedWorkoutPlanStates));
            onCloseModal();

        }
    };

    return (
        <>



            <form onSubmit={handleSubmitForm}>
                <Box mt={2} py={5}>
                    <FormControl isInvalid={!!errors.NameError}>
                        <FormLabel>Workout plan name: </FormLabel>
                        <Input mb={3} name="Name" required type='text' value={workoutPlan.Name} onChange={handleInputChange} />
                        <FormErrorMessage>{errors.NameError}</FormErrorMessage>

                    </FormControl>

                    <FormControl isInvalid={!!errors.PersonError}>
                        <FormLabel>Person full name: </FormLabel>
                        <Input mb={3} name="Person" required type='text' value={workoutPlan.Person} onChange={handleInputChange} />
                        <FormErrorMessage>{errors.PersonError}</FormErrorMessage>

                    </FormControl>

                    <FormControl isInvalid={!!errors.AuthorError}>
                        <FormLabel>Author: </FormLabel>
                        <Input name="Author" required type='text' value={workoutPlan.Author} onChange={handleInputChange} />
                        <FormErrorMessage>{errors.AuthorError}</FormErrorMessage>

                    </FormControl>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <CustomButton mt={2} mb={5} onClick={handleSubmitForm} className="ButtonStyle" size="lg" leftIcon={FaSave} buttonText="Create workout plan"></CustomButton>

                </Box>




            </form >

        </>
    )
}

const mapStateToProps = (state: RootState) => ({
    workoutPlan: state.workoutPlan.workoutPlan,
    workoutPlanStates: state.workoutPlanStates.workoutPlanStates,
});

const mapDispatchToProps = {
    updateWorkoutPlan,
    updateWorkoutPlanStates
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(NewWorkoutPlanForm);