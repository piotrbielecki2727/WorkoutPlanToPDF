import React, { FC } from 'react'
import { ChoosedExercise, Exercise } from '../../../Types'
import { Box, FormErrorMessage, Text } from '@chakra-ui/react';
import { capitalizeFirstLetter } from '../../../Utils/CurrentWorkoutUtils/capitalizeFirstLetter';


interface Props {
    editedData?: Exercise;
    choosedExercise?: ChoosedExercise;
    error?: string;
}

export const DisplayChoosedExercise: FC<Props> = ({ editedData, choosedExercise, error }) => {

    const exerciseName = choosedExercise ? choosedExercise.exerciseName : editedData?.Name;
    const bodyPart = choosedExercise ? choosedExercise.bodyPart : editedData?.Muscle;

    if (!exerciseName || !bodyPart) return null;


    return (
        <>
            <Box>
                <Text py={2}>Choosed Exercise:</Text>
                <Box px={4} py={2} borderRadius={5} border='1px solid #b8b6b6'>
                    {capitalizeFirstLetter(exerciseName)}
                </Box>
                <FormErrorMessage>{error}</FormErrorMessage>
                <Text py={2}>Target muscle:</Text>
                <Box px={4} py={2} borderRadius={5} border='1px solid #b8b6b6'>
                    {capitalizeFirstLetter(bodyPart)}
                </Box>
            </Box>
        </>
    )
}