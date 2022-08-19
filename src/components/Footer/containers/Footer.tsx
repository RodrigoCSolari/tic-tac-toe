import { Box, Spacer, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <>
      <Spacer mt="56px" />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg="#5e8c0188"
        css={{ backdropFilter: "blur(1px)" }}
        fontSize="sm"
        position="absolute"
        w="100%"
        h="56px"
        bottom={0}
        left="auto"
      >
        <Text>
          &copy; {new Date().getFullYear()} tic-tac-toe powered by 🧀. All
          Rights Reserved.
        </Text>
      </Box>
    </>
  );
}
