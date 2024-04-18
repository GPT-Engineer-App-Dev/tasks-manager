
import { VStack, Box, Text } from '@chakra-ui/react';

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <VStack w="250px" h="100vh" p={6} bg="gray.50" borderRight="1px" borderColor="gray.200">
      <Box>
        {categories.map((category) => (
  <Box
    key={category.id}
    onClick={() => onSelectCategory(category.id)}
    bg={category.id === selectedCategory ? 'blue.100' : 'transparent'}
    p={2}
    cursor="pointer"
  >
    <Text fontWeight="bold">{category.name}</Text>
  </Box>
))}  
      </Box>
    </VStack>
  );
};

export default Sidebar;
