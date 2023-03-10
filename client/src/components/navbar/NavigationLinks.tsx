import {
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const NavigationLinks = () => {
  return (
    <HStack spacing={6} ml={8}>
      <Button
        as={'a'}
        color={'black'}
        fontWeight={500}
        variant={'link'}
        href={'/'}
        fontSize={'lg'}>
        Recipes
      </Button>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bg={'transparent'}
          fontSize={'lg'}
          _hover={{ bg: 'transparent', textDecor: 'underline' }}
          _active={{ bg: 'transparent', textDecor: 'underline' }}>
          Random
        </MenuButton>
        <MenuList>
          <MenuItem
            as={'a'}
            href={'random_meal'}
            fontWeight={500}
            _focus={{ color: 'white', bg: 'redwood.200' }}
            _hover={{ color: 'white', bg: 'redwood.200' }}>
            Meal Recipe
          </MenuItem>
          <MenuItem
            as={'a'}
            href={'random_drink'}
            fontWeight={500}
            _hover={{ color: 'white', bg: 'redwood.200' }}>
            Drink Recipe
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}

export default NavigationLinks;