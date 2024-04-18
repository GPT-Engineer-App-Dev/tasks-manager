
import { VStack, Box, Text } from '@chakra-ui/react';

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <VStack w="200px" h="100vh" p={4} bg="gray.100">
      <Box>
        {categories.map((category) => (
  <Box
    key={category.id}
    onClick={() => onSelectCategory(category.id)}
    bg={category.id === selectedCategory ? 'blue.100' : 'transparent'}
    p={2}
    cursor="pointer"
  >
    <Text>{category.name}</Text>
  </Box>
))}  
      </Box>
    </VStack>
  );
};

export default Sidebar;
