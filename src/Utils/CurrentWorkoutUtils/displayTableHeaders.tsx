import { Th } from "@chakra-ui/react";


export const displayTableHeaders = () => {
    const tableHeaders = ['Exercise no', 'Name', 'Primary muscle', 'Sets', 'Repetitions', 'Weight', 'Rest', 'Action'];
    return tableHeaders.map((tableHeader) => {
        return (
            <>
                <Th p={4} fontSize={16} borderRight='1px solid #363636' fontFamily='Righteous' fontWeight='100' textAlign='center' bg='black' color='white'>{tableHeader}</Th>
            </>
        )
    })
}