import { useEffect } from "react";
import { filterData } from "../Utils/CurrentWorkoutUtils/filterData";
import { FetchedExercise } from "../Types";


export const useFilterData = (apiData: FetchedExercise[], choosedBodyPart: string, searchValue: string, setSearchResults: React.Dispatch<React.SetStateAction<FetchedExercise[]>>) => {
    useEffect(() => {
        if (apiData.length > 0) {
            const filteredData = filterData(apiData, choosedBodyPart, searchValue);
            setSearchResults(filteredData);
        }
    }, [apiData, choosedBodyPart, searchValue]);
}