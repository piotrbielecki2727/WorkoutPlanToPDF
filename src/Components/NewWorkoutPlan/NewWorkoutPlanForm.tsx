import React, { useState } from "react"
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { Errors, WorkoutPlan, WorkoutPlanStatesTypes } from "../../Types"
import { ValidateWorkoutPlanForm } from "../../Utils/SideBarContentUtils/ValidateWorkoutPlanForm";
import { updateWorkoutPlan } from "../../State/WorkoutPlan/workoutPlanSlice";
import { RootState } from "../../State/store";
import { updateWorkoutPlanStates } from "../../State/WorkoutPlan/workoutPlanStatesSlice";
import { DisplayNewWorkoutPlanForm } from "./DisplayNewWorkoutPlanForm";

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

    const [workoutPlanData, setWorkoutPlanData] = useState<WorkoutPlan>({
        Name: '',
        Person: '',
        Author: '',
        Workouts: []
    });


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setWorkoutPlanData({ ...workoutPlanData, [name]: value });
    }

    const handleSubmitForm = () => {
        console.log(workoutPlanData);
        const validationErrors = ValidateWorkoutPlanForm(workoutPlanData);
        if (validationErrors) {
            setErrors(validationErrors);
        } else {
            setErrors({ NameError: '', PersonError: '', AuthorError: '' });
            const updatedWorkoutPlanStates: WorkoutPlanStatesTypes = {
                ...workoutPlanStates,
                isWorkoutPlanCreated: true,
            }
            dispatch(updateWorkoutPlan(workoutPlanData));
            dispatch(updateWorkoutPlanStates(updatedWorkoutPlanStates));
            onCloseModal();

        }
    };

    return (
        <>
            <DisplayNewWorkoutPlanForm
                workoutPlanData={workoutPlanData}
                onInputChange={handleInputChange}
                onFormSubmit={handleSubmitForm}
                validationErrors={errors} />


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