import { useEffect } from "react";
import { getExercises } from "../Api/getExercises";
import { getAllExercisesURL } from "../Components/WorkoutPlan/AddExercise/ApiUrls";
import { FetchedExercise } from "../Types";

export const useFetchExercises = (setApiData: React.Dispatch<React.SetStateAction<FetchedExercise[]>>) => {

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const exercisesData = await getExercises(getAllExercisesURL);
                if (exercisesData) {
                    setApiData(exercisesData);
                } else {
                    console.log('Error while fetching the data');
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchExercises();
    }, [setApiData]);
}