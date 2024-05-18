import { Menu, MenuButton, MenuList, Checkbox, Button } from "@chakra-ui/react"
import { FC } from "react";
import { FaFilter } from "react-icons/fa"


interface Props {
    choosedBodyPart: string,
    setChoosedBodyPart: React.Dispatch<React.SetStateAction<string>>;
    apiData: any,
}


export const BodyPartFiltering: FC<Props> = ({ apiData, choosedBodyPart, setChoosedBodyPart }) => {


    const uniqueBodyParts: string[] = Array.from(new Set<string>(apiData.map((data: { bodyPart: string; }) => data.bodyPart)));

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
                {uniqueBodyParts.map((bodyPart: string) => (
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