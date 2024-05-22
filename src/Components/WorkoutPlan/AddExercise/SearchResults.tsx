import { Box, List, ListItem, Select, Text, UnorderedList } from "@chakra-ui/react"
import { FC, useEffect, useRef, useState } from "react"
import { getExercises } from "../../../Api/getExercises";
import { getAllExercisesURL } from "./ApiUrls";
import { filterData } from "../../../Utils/CurrentWorkoutUtils/filterData";
import React from "react";
import { ChoosedExercise, FetchedExercise } from "../../../Types";
import { capitalizeFirstLetter } from "../../../Utils/CurrentWorkoutUtils/capitalizeFirstLetter";
import useClickOutside from "../../../Hooks/useClickOutside";
import { useFetchExercises } from "../../../Hooks/useFetchExercises";
import { useFilterData } from "../../../Hooks/useFilterData";





interface Props {
    choosedBodyPart: string,
    searchValue: string,
    apiData: FetchedExercise[],
    setApiData: React.Dispatch<React.SetStateAction<FetchedExercise[]>>
    choosedExercise: ChoosedExercise | undefined,
    setChoosedExercise: React.Dispatch<React.SetStateAction<ChoosedExercise | undefined>>;
    isFocused: boolean,
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;


}



export const SearchResults: FC<Props> = ({ isFocused, setIsFocused, choosedExercise, setChoosedExercise, apiData, setApiData, choosedBodyPart, searchValue }) => {

    const [searchResults, setSearchResults] = useState<FetchedExercise[]>([])
    const boxRef = useRef<HTMLDivElement>(null);

    useFetchExercises(setApiData);

    useFilterData(apiData, choosedBodyPart, searchValue, setSearchResults);


    const handleClickOnSearch = (choosedValue: ChoosedExercise) => {
        setIsFocused(false);
        setChoosedExercise(choosedValue);
    }

    useClickOutside(boxRef, () => setIsFocused(false), isFocused);


    return (
        isFocused ? (
            <Box ref={boxRef} tabIndex={0} onBlur={() => setIsFocused(false)} border='1px solid #B8B6B6' borderTop={0} borderRadius='0px 0px 5px 5px' px={4} py={2} overflowY="auto" maxHeight="300px">
                <List>
                    {searchResults.map((exercise, index) => (
                        <ListItem key={index} onClick={() => handleClickOnSearch({ id: exercise.id.toString(), exerciseName: exercise.name, bodyPart: exercise.bodyPart })}>
                            <Text>{capitalizeFirstLetter(exercise.name)}</Text>
                        </ListItem>
                    ))}
                </List>
            </Box>
        ) : (null)

    )
}