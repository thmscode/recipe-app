import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const NavigationLinks = () => {
  return (
    <>
      <Flex
        hideBelow={'md'}
        alignItems={'center'}
        ml={6}
      >
        <Menu>
          <MenuButton
            fontWeight={400}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg={'transparent'}
            fontSize={'lg'}
            _hover={{ bg: 'transparent', textDecor: 'underline' }}
            _active={{ bg: 'transparent', textDecor: 'underline' }}
          >
            Browse
          </MenuButton>
          <MenuList>
            <MenuItem
              as={'a'}
              href={'/categories'}
              fontWeight={500}
              _focus={{ color: 'white', bg: 'redwood.200' }}
              _hover={{ color: 'white', bg: 'redwood.200' }}
            >
              Meals By Category
            </MenuItem>
            <MenuItem
              as={'a'}
              href={'/countries'}
              fontWeight={500}
              _focus={{ color: 'white', bg: 'redwood.200' }}
              _hover={{ color: 'white', bg: 'redwood.200' }}
            >
              Meals By Country
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            fontWeight={400}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg={'transparent'}
            fontSize={'lg'}
            _hover={{ bg: 'transparent', textDecor: 'underline' }}
            _active={{ bg: 'transparent', textDecor: 'underline' }}
          >
            Random
          </MenuButton>
          <MenuList>
            <MenuItem
              as={'a'}
              href={'/random_meal'}
              fontWeight={500}
              _focus={{ color: 'white', bg: 'redwood.200' }}
              _hover={{ color: 'white', bg: 'redwood.200' }}
            >
              Meal Recipe
            </MenuItem>
            <MenuItem
              as={'a'}
              href={'/random_drink'}
              fontWeight={500}
              _hover={{ color: 'white', bg: 'redwood.200' }}
            >
              Drink Recipe
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
}

export default NavigationLinks;