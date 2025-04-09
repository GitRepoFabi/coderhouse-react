import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center
} from '@chakra-ui/react'
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { CartWidget } from '../CartWidget';

//Datos falsos para luego cambiarlo por alguna API:
const FAKE_CATEGORIES = [
  {
    id: '1',
    label: 'Tecnología'
  },
  {
    id: '2',
    label: 'Electrodomésticos'
  },
  {
    id: '3',
    label: 'PC'
  },
  {
    id: '4',
    label: 'Hogar'
  },
  {
    id: '5',
    label: 'Herramientas'
  }
]

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Info Store</Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Categorías
            </MenuButton>
            <MenuList>
              {FAKE_CATEGORIES.map((cat) => {
                return <MenuItem key={cat.id}>{cat.label}</MenuItem>;
              })}
            </MenuList>
          </Menu>
          <Flex alignItems={'center'}>
          <CartWidget/>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}