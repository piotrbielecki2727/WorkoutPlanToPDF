import React, { FC, useState } from "react"
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { Errors, WorkoutPlan, WorkoutPlanStatesTypes } from "../../../Types";
import { ValidateWorkoutPlanForm } from "../../../Utils/SideBarContentUtils/ValidateWorkoutPlanForm";
import { DisplayWorkoutPlanForm } from "./DisplayWorkoutPlanForm";
import { RootState } from "../../../State/store";
import { updateWorkoutPlan } from "../../../State/WorkoutPlan/workoutPlanSlice";
import { updateWorkoutPlanStates } from "../../../State/WorkoutPlan/workoutPlanStatesSlice";



interface Props extends PropsFromRedux {
    onCloseModal: () => void;
    isEditing: boolean,
    workoutPlan: WorkoutPlan;
};



export const WorkoutPlanForm: FC<Props> = ({ isEditing, workoutPlan, updateWorkoutPlan, onCloseModal, workoutPlanStates, updateWorkoutPlanStates }) => {
    const dispatch = useDispatch();


    const [errors, setErrors] = useState<Errors>({
        NameError: '',
        PersonError: '',
        AuthorError: '',
    });



    const [editedData, setEditedData] = useState<WorkoutPlan>({
        ...workoutPlan
    });

    const [workoutPlanData, setWorkoutPlanData] = useState<WorkoutPlan>(editedData);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newData = { ...workoutPlanData, [name]: value };
        setWorkoutPlanData(newData);
        if (isEditing) {
            setEditedData(newData);
        }
    }



    const handleSubmitForm = () => {
        const formData = isEditing ? editedData : workoutPlanData;
        const validationErrors = ValidateWorkoutPlanForm(formData);
        if (validationErrors) {
            setErrors(validationErrors);
        } else {
            setErrors({ NameError: '', PersonError: '', AuthorError: '' });
            const updatedWorkoutPlanStates: WorkoutPlanStatesTypes = {
                ...workoutPlanStates,
                isWorkoutPlanCreated: true,
            }
            dispatch(updateWorkoutPlan(formData));
            dispatch(updateWorkoutPlanStates(updatedWorkoutPlanStates));
            onCloseModal();

        }
    };

    return (
        <>
            <DisplayWorkoutPlanForm
                workoutPlanData={workoutPlanData}
                onInputChange={handleInputChange}
                onFormSubmit={handleSubmitForm}
                validationErrors={errors}
                isEditing={isEditing}
                editedData={editedData}
            />

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
export default connector(WorkoutPlanForm);