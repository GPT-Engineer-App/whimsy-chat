import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, IconButton, Avatar } from "@chakra-ui/react";
import { FaPaperPlane, FaMicrophone } from "react-icons/fa";
import { motion } from "framer-motion";

const ZooZoo = ({ typingSpeed }) => {
  const animation = {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.5 / typingSpeed,
      repeat: Infinity,
      repeatType: "loop",
    },
  };

  return (
    <motion.div animate={animation}>
      <Avatar src="https://images.unsplash.com/photo-1617289755070-3590b660a06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxab29ab28lMjBjaGFyYWN0ZXJ8ZW58MHx8fHwxNzE1ODUzMzM5fDA&ixlib=rb-4.0.3&q=80&w=1080" size="sm" />
    </motion.div>
  );
};

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typingSpeed, setTypingSpeed] = useState(1);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setTypingSpeed(value.length / 10 + 1);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, type: "text" }]);
      setInput("");
      setTypingSpeed(1);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="white" color="black">
      <VStack spacing={4} width="100%">
        <Box width="100%" height="70vh" overflowY="auto" border="1px solid black" borderRadius="md" p={4}>
          {messages.map((message, index) => (
            <Text key={index} alignSelf="flex-start" bg="gray.100" p={2} borderRadius="md" mb={2}>
              {message.text}
            </Text>
          ))}
        </Box>
        <HStack width="100%">
          <Input value={input} onChange={handleInputChange} placeholder="Type a message..." />
          <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSendMessage} />
          <IconButton aria-label="Voice Note" icon={<FaMicrophone />} />
        </HStack>
        <ZooZoo typingSpeed={typingSpeed} />
      </VStack>
    </Container>
  );
};

export default Index;
