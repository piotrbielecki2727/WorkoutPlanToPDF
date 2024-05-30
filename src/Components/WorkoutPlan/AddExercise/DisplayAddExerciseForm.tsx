import React, { FC, useEffect, useState } from 'react';
import { ChoosedExercise, Exercise, ExerciseErrors } from '../../../Types';
import { FormControl, FormLabel, Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormErrorMessage, Box, SimpleGrid, Checkbox, CheckboxGroup, Stack, Button, Menu, MenuButton, MenuItem, MenuList, Grid, GridItem, Text } from '@chakra-ui/react';
import { CustomButton } from '../../CustomComponents/CustomButton';
import { FaPlus } from 'react-icons/fa';
import { BodyPartFiltering } from './BodyPartFiltering';
import { SearchResults } from './SearchResults';
import { capitalizeFirstLetter } from '../../../Utils/CurrentWorkoutUtils/capitalizeFirstLetter';


interface Props {
    exercise: Exercise;
    onSetChange: (name: string, valueAsNumber: number) => void;
    onFormSubmit: () => void;
    validationErrors: ExerciseErrors,
    choosedExercise: ChoosedExercise | undefined,
    setChoosedExercise: React.Dispatch<React.SetStateAction<ChoosedExercise | undefined>>;
    editingExerciseId?: number,
    editedData?: Exercise;
}

export const DisplayAddExerciseForm: FC<Props> = ({ editedData, editingExerciseId, choosedExercise, setChoosedExercise, validationErrors, onFormSubmit, exercise, onSetChange }) => {

    const [choosedBodyPart, setChoosedBodyPart] = useState<string>('');
    const [apiData, setApiData] = useState<any[]>([]);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');


    return (
        <>
            <form>
                <FormControl py={2} isInvalid={!!validationErrors.NameError}>
                    <FormLabel>Search for exercise: </FormLabel>
                    <BodyPartFiltering apiData={apiData} choosedBodyPart={choosedBodyPart} setChoosedBodyPart={setChoosedBodyPart} />
                    <Input
                        onFocus={() => setIsFocused(true)}
                        placeholder='Type to search...'
                        border='1px solid #b8b6b6'
                        borderRadius='10px 10px 0px 0px'
                        name="Name"
                        required
                        type='text'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        minLength={5}
                    />
                    <SearchResults
                        choosedExercise={choosedExercise}
                        setChoosedExercise={setChoosedExercise}
                        apiData={apiData}
                        setApiData={setApiData}
                        choosedBodyPart={choosedBodyPart}
                        searchValue={searchValue}
                        isFocused={isFocused}
                        setIsFocused={setIsFocused}
                    />
                    {!editedData && choosedExercise && (
                        <>
                            <Text py={2}>Choosed Exercise:</Text>
                            <Box px={4} py={2} borderRadius={5} border='1px solid #b8b6b6'>
                                {capitalizeFirstLetter(choosedExercise.exerciseName)}
                            </Box>
                            <Text py={2}>Target muscle:</Text>
                            <Box px={4} py={2} borderRadius={5} border='1px solid #b8b6b6'>
                                {capitalizeFirstLetter(choosedExercise.bodyPart)}
                            </Box>
                        </>
                    )}
                    {editedData && (
                        <>
                            <Text py={2}>Choosed Exercise:</Text>
                            <Box px={4} py={2} borderRadius={5} border='1px solid #b8b6b6'>
                                {capitalizeFirstLetter(choosedExercise ? choosedExercise.exerciseName : editedData.Name)}
                            </Box>
                            <Text py={2}>Target muscle:</Text>
                            <Box px={4} py={2} borderRadius={5} border='1px solid #b8b6b6'>
                                {capitalizeFirstLetter(choosedExercise ? choosedExercise.bodyPart : editedData.Muscle)}
                            </Box>
                        </>
                    )}
                    <FormErrorMessage>{validationErrors.NameError}</FormErrorMessage>
                </FormControl>

                <FormControl py={2} isInvalid={!!validationErrors.SetsError}>
                    <FormLabel>Sets: </FormLabel>
                    <NumberInput
                        min={1}
                        defaultValue={1}
                        name="Sets"
                        onChange={(valueAsString, valueAsNumber) => onSetChange('Sets', valueAsNumber)}
                        value={exercise.Sets.Sets}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormErrorMessage>{validationErrors.SetsError}</FormErrorMessage>
                </FormControl>

                <FormControl py={2} isInvalid={!!validationErrors.RepsError}>
                    <FormLabel>Reps: </FormLabel>
                    <NumberInput
                        defaultValue={5}
                        min={1}
                        max={150}
                        name="Reps"
                        onChange={(valueAsString, valueAsNumber) => onSetChange('Reps', valueAsNumber)}
                        value={exercise.Sets.Reps}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormErrorMessage>{validationErrors.RepsError}</FormErrorMessage>
                </FormControl>

                <FormControl py={2}>
                    <FormLabel>Weight: </FormLabel>
                    <NumberInput
                        defaultValue={0}
                        min={0}
                        name="Weight"
                        onChange={(valueAsString, valueAsNumber) => onSetChange('Weight', valueAsNumber)}
                        value={exercise.Sets.Weight}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>

                <FormControl py={2}>
                    <FormLabel>Rest: </FormLabel>
                    <NumberInput
                        defaultValue={3}
                        min={1}
                        name="Rest"
                        onChange={(valueAsString, valueAsNumber) => onSetChange('Rest', valueAsNumber)}
                        value={exercise.Sets.Rest}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>

                <Box display='flex' justifyContent='center' alignItems='center' py={2}>
                    <CustomButton onClick={onFormSubmit} leftIcon={editedData ? FaEdit : FaPlus} buttonText={editedData ? "Edit exercise" : "Add new exercise"} />
                </Box>
            </form>
        </>
    );
}

