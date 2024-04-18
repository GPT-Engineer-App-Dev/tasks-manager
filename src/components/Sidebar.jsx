
import { VStack, Box, Text } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <VStack w="200px" h="100vh" p={4} bg="gray.100">
      <Box>
        <Text fontSize="xl" fontWeight="bold">Sidebar</Text>  
      </Box>
    </VStack>
  );
};

export default Sidebar;
