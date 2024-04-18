import { useState } from "react";
import { VStack, Input, Button, Checkbox, Text, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
const Index = () => {
  const [categories, setCategories] = useState([{ id: 1, name: 'Default' }]);
const [selectedCategory, setSelectedCategory] = useState(1);
const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: todos.length + 1, text: newTodo, isCompleted: false, categoryId: selectedCategory }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
  };

  return (
    <Flex>
      <Sidebar 
  categories={categories}
  selectedCategory={selectedCategory}
  onSelectCategory={setSelectedCategory}
/>
      <VStack spacing={4} align='stretch' w='100%' maxW='400px' m='auto'>
      <Input placeholder="Add a new category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
      <Button leftIcon={<FaPlus />} onClick={() => {
        if (newCategory.trim() !== "") {
          setCategories([...categories, { id: categories.length + 1, name: newCategory }]);
          setNewCategory("");
        }
      }}>
        Add Category
      </Button>
      <Input placeholder="Add a new todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <Button leftIcon={<FaPlus />} onClick={handleAddTodo}>
        Add Todo
      </Button>
      {todos
  .filter((todo) => todo.categoryId === selectedCategory)
  .map((todo) => (
        <Checkbox key={todo.id} isChecked={todo.isCompleted} onChange={() => handleToggleTodo(todo.id)}>
          <Text textDecoration={todo.isCompleted ? "line-through" : "none"}>{todo.text}</Text>
          <IconButton icon={<FaTrash />} colorScheme="red" variant="ghost" size="sm" onClick={() => handleDeleteTodo(todo.id)} />
        </Checkbox>
      ))}
      </VStack>
    </Flex>
  );
};

export default Index;
