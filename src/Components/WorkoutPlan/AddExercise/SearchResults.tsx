import { Box, List, ListItem, Select, Text, UnorderedList } from "@chakra-ui/react"
import { FC, useEffect, useState } from "react"
import { getExercises } from "../../../Api/getExercises";
import { getAllExercisesURL } from "./ApiUrls";
import { filterData } from "../../../Utils/CurrentWorkoutUtils/filterData";
import React from "react";
import { ChoosedExercise, Exercise } from "../../../Types";





interface Props {
    choosedBodyPart: string,
    searchValue: string,
    apiData: any,
    setApiData: any,
    choosedExercise: ChoosedExercise | undefined,
    setChoosedExercise: React.Dispatch<React.SetStateAction<ChoosedExercise | undefined>>;
    isFocused: boolean,
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;


}



export const SearchResults: FC<Props> = ({ isFocused, setIsFocused, choosedExercise, setChoosedExercise, apiData, setApiData, choosedBodyPart, searchValue }) => {

    const [searchResults, setSearchResults] = useState<any[]>([])


    useEffect(() => {
        const fetchAndFilterExercises = async () => {
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
        fetchAndFilterExercises();
    }, []);

    useEffect(() => {
        if (apiData.length > 0) {
            const filteredData = filterData(apiData, choosedBodyPart, searchValue);
            setSearchResults(filteredData);
        }
    }, [apiData, choosedBodyPart, searchValue]);


    const handleClickOnSearch = (choosedValue: ChoosedExercise) => {
        setIsFocused(false);
        setChoosedExercise(choosedValue);
    }



    return (
        isFocused ? (
            <Box border='1px solid #B8B6B6' borderTop={0} borderRadius='0px 0px 5px 5px' px={4} py={2} overflowY="auto" maxHeight="300px">
                <List>
                    {searchResults.map((exercise, index) => (
                        <ListItem key={index} onClick={() => handleClickOnSearch({ id: exercise.id, exerciseName: exercise.name, bodyPart: exercise.bodyPart })}>
                            <Text>{exercise.name}</Text>
                        </ListItem>
                    ))}
                </List>
            </Box>
        ) : (null)

    )
}