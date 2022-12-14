import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { useWalletSelector } from "../../../contexts/WalletSelectorContext";
import { YellowButton } from "../../../shared/components/YellowButton";

export function ButtonConnectWallet() {
  const walletSelector = useWalletSelector();

  const handleOnClick = async () => {
    if (walletSelector.selector.isSignedIn() && walletSelector.wallet) {
      walletSelector.wallet.signOut();
    } else {
      walletSelector.modal.show();
    }
  };
  return (
    <>
      {walletSelector.selector.isSignedIn() ? (
        <Menu>
          <MenuButton
            colorScheme="yellow"
            bgColor="yellowCheddar"
            border="1px solid #3334"
            as={Button}
            borderRadius="full"
            rightIcon={<ChevronDownIcon />}
          >
            {walletSelector.accountId}
          </MenuButton>
          <MenuList
            minWidth="auto"
            p="0"
            borderRadius="full"
            bg="yellowCheddar"
          >
            <Button
              onClick={handleOnClick}
              colorScheme="yellow"
              borderRadius="full"
              bg="yellowCheddar"
              _focus={{
                boxShadow: "0 0 0 0 #0000",
              }}
            >
              Disconnect
            </Button>
          </MenuList>
        </Menu>
      ) : (
        <YellowButton onClick={handleOnClick}>Connect</YellowButton>
      )}
    </>
  );
}
