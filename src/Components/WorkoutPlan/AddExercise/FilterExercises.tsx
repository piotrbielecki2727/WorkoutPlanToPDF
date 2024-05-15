import { Menu, MenuButton, MenuList, CheckboxGroup, Checkbox, Text, Button, MenuItemOption, MenuOptionGroup } from "@chakra-ui/react"
import { FC, useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa"
import { getExercises } from "../../../Api/getExercises";
import { getBodyPartsURL } from "./ApiUrls";
import { namesToUpperCase } from "../../../Utils/CurrentWorkoutUtils/namesToUpperCase";


interface Props {
    choosedBodyPart: string,
    setChoosedBodyPart: React.Dispatch<React.SetStateAction<string>>;
}


export const FilterExercises: FC<Props> = ({ choosedBodyPart, setChoosedBodyPart }) => {

    const [bodyParts, setBodyParts] = useState<string[]>([])

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const exercisesData = await getExercises(getBodyPartsURL);
                if (exercisesData) {
                    const formattedBodyParts = namesToUpperCase(exercisesData)
                    setBodyParts(formattedBodyParts);
                    console.log("pobralenm")
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

    }, []);


    const onCheck = (bodyPart: string) => {

        if (choosedBodyPart !== bodyPart) {
            setChoosedBodyPart(bodyPart);
        }
        else if (choosedBodyPart === bodyPart) {
            setChoosedBodyPart('')
        }
    };



    return (
        <Menu closeOnSelect={false}>
            <MenuButton bg='gray.300' mb={3} fontWeight={100} as={Button} leftIcon={<FaFilter />}>
                Filter by muscle
            </MenuButton >
            <MenuList display='flex' flexDirection='column'>
                {bodyParts.map((bodyPart) => (
                    <Checkbox
                        key={bodyPart}
                        isChecked={choosedBodyPart === bodyPart}
                        onChange={() => onCheck(bodyPart)}
                    >
                        {bodyPart}
                    </Checkbox>
                ))}
            </MenuList>
        </Menu >
    )

}