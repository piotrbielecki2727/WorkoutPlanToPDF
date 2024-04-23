import { FormControl, FormErrorMessage, FormLabel, Input, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { Errors } from "../Types"
import { CustomButton } from "./CustomButton";
import { FaSave } from "react-icons/fa";
import { ValidateWorkoutPlanForm } from "../Utils/ValidateWorkoutPlanForm";
import { updateWorkoutPlan } from "../State/WorkoutPlan/workoutPlanSlice";
import { RootState } from "../State/store";
import { StateFromReducersMapObject } from "@reduxjs/toolkit";

interface Props extends PropsFromRedux {
    onCloseModal: () => void;
    setIsWorkoutPlanCreated: React.Dispatch<React.SetStateAction<boolean>>;
    isWorkoutPlanCreated: boolean;
};




export const WorkoutPlanForm: React.FC<Props> = ({isWorkoutPlanCreated, setIsWorkoutPlanCreated, workoutPlan, updateWorkoutPlan, onCloseModal }) => {
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
            dispatch(updateWorkoutPlan(workoutPlan))
            setIsWorkoutPlanCreated(true);
            onCloseModal();

        }
    };

    return (
        <form onSubmit={handleSubmitForm}>
            <FormControl isInvalid={!!errors.NameError}>
                <FormLabel>Workout plan name: </FormLabel>
                <Input name="Name" required type='text' value={workoutPlan.Name} onChange={handleInputChange} />
                <FormErrorMessage>{errors.NameError}</FormErrorMessage>

            </FormControl>

            <FormControl isInvalid={!!errors.PersonError}>
                <FormLabel>Person full name: </FormLabel>
                <Input name="Person" required type='text' value={workoutPlan.Person} onChange={handleInputChange} />
                <FormErrorMessage>{errors.PersonError}</FormErrorMessage>

            </FormControl>

            <FormControl isInvalid={!!errors.AuthorError}>
                <FormLabel>Author: </FormLabel>
                <Input name="Author" required type='text' value={workoutPlan.Author} onChange={handleInputChange} />
                <FormErrorMessage>{errors.AuthorError}</FormErrorMessage>

            </FormControl>

            <CustomButton onClick={handleSubmitForm} className="ButtonStyle" size="lg" leftIcon={FaSave} buttonText="create workout"></CustomButton>


        </form>

    )
}

const mapStateToProps = (state: RootState) => ({
    workoutPlan: state.workoutPlan.workoutPlan,
});

const mapDispatchToProps = {
    updateWorkoutPlan,
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(WorkoutPlanForm);