import { Flex, Menu, MenuList } from "@chakra-ui/react";
import Select from "./Select";
import Option from "./Option";

const Navigation = () => {
  return (
    <>
      <Flex hideBelow={"md"} alignItems={"center"} ml={6}>
        <Menu>
          <Select>Browse</Select>
          <MenuList>
            <Option href="/categories">Meals By Category</Option>
            <Option href="/countries">Meals By Country</Option>
          </MenuList>
        </Menu>
        <Menu>
          <Select>Random</Select>
          <MenuList>
            <Option href="/random_meal">Meal Recipe</Option>
            <Option href="/random_drink">Drink Recipe</Option>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export default Navigation;
