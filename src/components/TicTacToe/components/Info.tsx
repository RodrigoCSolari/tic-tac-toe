import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useWalletSelector } from "../../../contexts/WalletSelectorContext";
import { PurpleButton } from "../../../shared/components/PurpleButton";
import { YellowButton } from "../../../shared/components/YellowButton";

export default function Info() {
  const walletSelector = useWalletSelector();

  const handleOnClick = async () => {
    if (walletSelector.selector.isSignedIn() && walletSelector.wallet) {
      walletSelector.wallet.signOut();
    } else {
      walletSelector.modal.show();
    }
  };
  return (
    <Accordion defaultIndex={walletSelector.selector.isSignedIn() ? [0] : []}>
      <Box flex="1" p="8px 16px" bg="#fffc" borderRadius="8px 8px 0 0">
        <Flex flexDirection="column">
          <Text as="h2" textAlign="center" fontSize="1.2em" fontWeight="700">
            Cheddar TicTacToe
          </Text>
          {walletSelector.selector.isSignedIn() ? (
            <Flex
              flexDirection="column"
              rowGap={2}
              bg="#eee"
              borderRadius="8px"
              justifyContent="center"
              alignItems="center"
              p="12px 16px"
            >
              <Text>
                Connected as{" "}
                <Badge borderRadius="full" p="2px 5px" colorScheme="purple">
                  {walletSelector.accountId?.slice(0, 14) + "..."}
                </Badge>
              </Text>
              <YellowButton
                onClick={handleOnClick}
                colorScheme="yellow"
                borderRadius="full"
                bg="yellowCheddar"
                _focus={{
                  boxShadow: "0 0 0 0 #0000",
                }}
              >
                Disconnect
              </YellowButton>
            </Flex>
          ) : (
            <Flex
              bg="#eee"
              borderRadius="8px"
              justifyContent="space-between"
              alignItems="center"
              p="12px 16px"
            >
              <Text>Connect with NEAR account</Text>
              <YellowButton onClick={handleOnClick}>Connect</YellowButton>
            </Flex>
          )}
        </Flex>
      </Box>
      {walletSelector.selector.isSignedIn() && (
        <>
          <AccordionItem bg="#fffc">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="center">
                  <Text
                    as="h2"
                    textAlign="center"
                    fontSize="1.1em"
                    fontWeight="700"
                  >
                    Availble Players
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex
                bg="#eee"
                borderRadius="8px"
                justifyContent="center"
                alignItems="center"
                p="12px 16px"
              >
                <Text>No Players Availble. Be The First!</Text>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem bg="#fffc">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="center">
                  <Text
                    as="h2"
                    textAlign="center"
                    fontSize="1.1em"
                    fontWeight="700"
                  >
                    Join Waiting List
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              bg="#eee"
              borderRadius="8px"
              justifyContent="space-between"
              alignItems="center"
              m="12px 16px"
            >
              <FormControl mb="10px">
                <Flex justifyContent="center" alignItems="center">
                  <FormLabel textAlign="right" w="100px">
                    My&nbsp;Bid:
                  </FormLabel>
                  <Input type="text" w="100px" mr="10px" bg="white" />
                  <Text w="100px">NEAR</Text>
                </Flex>
              </FormControl>
              <FormControl mb="10px">
                <Flex justifyContent="center" alignItems="center">
                  <FormLabel textAlign="right" w="100px">
                    Cheddar&nbsp;Bid:
                  </FormLabel>
                  <Input type="text" w="100px" mr="10px" bg="white" />
                  <Text w="100px">CHEDDAR</Text>
                </Flex>
              </FormControl>
              <Flex justifyContent="center">
                <PurpleButton>Join Waiting List</PurpleButton>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </>
      )}

      <AccordionItem bg="#fffc" borderRadius="0 0 8px 8px">
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="center">
              <Text
                as="h2"
                textAlign="center"
                fontSize="1.1em"
                fontWeight="700"
              >
                How to Play / Rules
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          pb={4}
          bg="#eee"
          borderRadius="8px"
          justifyContent="space-between"
          alignItems="center"
          m="12px 16px"
        >
          How to play: Click a checkbox "double jump" on the top of the board
          before every double jump. Shift key makes the same trick. Set a bid
          and join waiting list or select an available player to start the game.
          The winner takes the pot. Invite a friend to get a 10% referral bonus
          from his rewards. Hold shift button (or check a checkbox) to perform a
          double jump. Release a shift button before a final move. If you spent
          more than an hour, your opponent may stop the game and get the reward.
          Service fee is 10%, referral reward is half of the service fee.
          Various game stats are storing onchain. General Game Rules (source)
          Capturing is mandatory. Double capturing is not mandatory. Uncrowned
          pieces (men) move one step diagonally forwards, and capture an
          opponent's piece. Men can jump only forwards. Multiple enemy pieces
          can be captured in a single turn provided this is done by successive
          jumps made by a single piece. Kings acquires additional powers
          including the ability to move backwards and capture backwards.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}