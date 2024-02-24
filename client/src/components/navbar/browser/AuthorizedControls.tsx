import { Button, Flex, Menu, MenuList } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { Navigate } from "react-router-dom";
import Select from "./Select";
import Option from "./Option";

const AuthorizedControls = () => {
  const handleLogout = (): void => {
    signOut(auth)
      .then(() => <Navigate to="/" />)
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Flex hideBelow={"md"} alignItems={"center"}>
        <Menu>
          <Select>My Account</Select>
          <MenuList>
            <Option href="/favourites">View Favourites</Option>
          </MenuList>
        </Menu>
        <Button
          as={"a"}
          color={"white"}
          fontWeight={400}
          href={"/"}
          bg={"redwood.400"}
          fontSize={"lg"}
          _hover={{ bg: "redwood.200" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Flex>
    </>
  );
};

export default AuthorizedControls;
