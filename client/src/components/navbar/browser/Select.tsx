import { Button, MenuButton } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Select: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MenuButton
      fontWeight={400}
      as={Button}
      rightIcon={<ChevronDownIcon />}
      bg={"transparent"}
      fontSize={"lg"}
      _hover={{ bg: "transparent", textDecor: "underline" }}
      _active={{ bg: "transparent", textDecor: "underline" }}
    >
      {children}
    </MenuButton>
  );
};

export default Select;
