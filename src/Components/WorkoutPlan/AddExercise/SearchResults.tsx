import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { FC, useEffect, useState } from "react"
import { getExercises } from "../../../Api/getExercises";
import { getAllExercisesURL, getBodyPartsURL } from "./ApiUrls";
import { filterDataByBodyPart } from "../../../Utils/CurrentWorkoutUtils/filterDataByBodyPart";
import { filterDataByBodyPartAndName } from "../../../Utils/CurrentWorkoutUtils/filterDataByBodyPartAndName";
import { filterData } from "../../../Utils/CurrentWorkoutUtils/filterData";

interface Props {
    choosedBodyPart: string,
    searchValue: string,
}



export const SearchResults: FC<Props> = ({ choosedBodyPart, searchValue }) => {

    const [searchResults, setSearchResults] = useState<any[]>([])

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const exercisesData = await getExercises(getAllExercisesURL);
                if (exercisesData) {
                    const data = filterData(exercisesData, choosedBodyPart, searchValue)
                    setSearchResults(data);
                }
                else {
                    console.log('error while fetching the data')
                }

            }
            catch (error) {
                console.error(error);
            }
        }

        fetchExercises()

    }, [choosedBodyPart, searchValue]);



    return (
        <Box border='1px solid #B8B6B6' borderTop={0} borderRadius='0px 0px 5px 5px' px={4} py={2} >
            <UnorderedList>
                {searchResults.map((exercise, index) => (
                    <ListItem key={index}>
                        <Text>{exercise.name}</Text>
                    </ListItem>
                ))}

            </UnorderedList>
        </Box>
    )
}