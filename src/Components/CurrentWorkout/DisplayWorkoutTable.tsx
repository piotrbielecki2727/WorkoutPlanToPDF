import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { CustomButton } from "../CustomComponents/CustomButton";
import { ManageTableRows } from "./ManageTableRows";


export const DisplayWorkoutTable = () => {
    const tableHeaders = ['Exercise no', 'Name', 'Primary muscle', 'Secondary muscle', 'Sets', 'Repetitions', 'Weight', 'Rest'];


    return (
        <Box px={5}>
            <TableContainer>
                <Table variant='striped' >
                    <Thead bg='black' >
                        {tableHeaders.map((tableHeader) => {
                            return <Th textAlign='center' bg='black' color='white'>{tableHeader}</Th>
                        })}
                        <Tr>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td textAlign='center'>1</Td>
                            <Td textAlign='center'>2</Td>
                            <Td textAlign='center'>3</Td>
                            <Td textAlign='center'><CustomButton buttonText="delete" bg="black" leftIcon={FaTrash} /></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'  >
                <ManageTableRows />
            </Box>
        </Box>
    )
}
