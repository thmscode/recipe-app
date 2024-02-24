import { MenuItem } from "@chakra-ui/react";

const Option: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <MenuItem
      as={"a"}
      href={href}
      fontWeight={500}
      _focus={{ color: "white", bg: "redwood.200" }}
      _hover={{ color: "white", bg: "redwood.200" }}
    >
      {children}
    </MenuItem>
  );
};

export default Option;
