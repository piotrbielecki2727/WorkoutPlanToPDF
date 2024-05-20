import React, { FC, useState } from 'react';
import { ChoosedExercise, Exercise, ExerciseErrors } from '../../../Types';
import { FormControl, FormLabel, Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormErrorMessage, Box, SimpleGrid, Checkbox, CheckboxGroup, Stack, Button, Menu, MenuButton, MenuItem, MenuList, Grid, GridItem, Text } from '@chakra-ui/react';
import { CustomButton } from '../../CustomComponents/CustomButton';
import { FaPlus } from 'react-icons/fa';
import { BodyPartFiltering } from './BodyPartFiltering';
import { SearchResults } from './SearchResults';

interface Props {
    exercise: Exercise;
    onSetChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFormSubmit: () => void;
    validationErrors: ExerciseErrors,
    choosedExercise: ChoosedExercise | undefined,
    setChoosedExercise: React.Dispatch<React.SetStateAction<ChoosedExercise | undefined>>;
}

export const DisplayAddExerciseForm: FC<Props> = ({ choosedExercise, setChoosedExercise, validationErrors, onFormSubmit, exercise, onSetChange }) => {

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
                    <Input onFocus={() => setIsFocused(true)} placeholder='Type to search...' border='1px solid #b8b6b6' borderRadius='10px 10px 0px 0px' name="Name" required type='text' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} minLength={5} />
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
                    {choosedExercise &&
                        <> <Text py={2}>Choosed Exercise:</Text> <Box px={4} py={2} borderRadius={5} border='1px solid #b8b6b6'>{choosedExercise.exerciseName}</Box>
                            <Text py={2}>Target muscle:</Text> <Box px={4} py={2} borderRadius={5} border='1px solid #b8b6b6'>{choosedExercise.bodyPart}{choosedExercise.id}</Box>
                        </>}


                    <FormErrorMessage>{validationErrors.NameError}</FormErrorMessage>
                </FormControl>

                <FormControl py={2} >
                    <FormLabel>Sets: </FormLabel>
                    <NumberInput min={1} defaultValue={1}>
                        <NumberInputField name="Sets" onChange={onSetChange} value={exercise.Sets.Sets} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>


                <FormControl py={2} >
                    <FormLabel>Reps: </FormLabel>
                    <NumberInput defaultValue={5} min={1} max={150}>
                        <NumberInputField name="Reps" onChange={onSetChange} value={exercise.Sets.Reps} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>

                <FormControl py={2} >
                    <FormLabel>Weight: </FormLabel>
                    <NumberInput defaultValue={0} min={0} >
                        <NumberInputField name="Weight" onChange={onSetChange} value={exercise.Sets.Weight} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>

                <FormControl py={2} >
                    <FormLabel>Rest: </FormLabel>
                    <NumberInput defaultValue={3} min={1} >
                        <NumberInputField name="Rest" onChange={onSetChange} value={exercise.Sets.Rest} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>

                <Box display='flex' justifyContent='center' alignItems='center' py={2} >
                    <CustomButton onClick={onFormSubmit} leftIcon={FaPlus} buttonText="Add new exercise"></CustomButton>
                </Box>


            </form >
        </>
    );
}

