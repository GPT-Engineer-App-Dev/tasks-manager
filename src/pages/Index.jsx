import { useState } from "react";
import { VStack, Input, Button, Checkbox, Text, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: todos.length + 1, text: newTodo, isCompleted: false }]);
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
    <VStack spacing={4} align="stretch" w="100%" maxW="400px" m="auto">
      <Input placeholder="Add a new todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <Button leftIcon={<FaPlus />} onClick={handleAddTodo}>
        Add Todo
      </Button>
      {todos.map((todo) => (
        <Checkbox key={todo.id} isChecked={todo.isCompleted} onChange={() => handleToggleTodo(todo.id)}>
          <Text textDecoration={todo.isCompleted ? "line-through" : "none"}>{todo.text}</Text>
          <IconButton icon={<FaTrash />} colorScheme="red" variant="ghost" size="sm" onClick={() => handleDeleteTodo(todo.id)} />
        </Checkbox>
      ))}
    </VStack>
  );
};

export default Index;
