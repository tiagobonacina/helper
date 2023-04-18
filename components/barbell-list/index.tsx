import { Text, IconButton, Flex, Box } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

interface BarbellListProps {
  barbells: { [key: string]: number };
  onHandleClick: (key: string, operation?: string) => void;
}

const BarbellList: FC<BarbellListProps> = ({ barbells, onHandleClick }) => {
  return (
    <>
      {Object.entries(barbells)
        .sort(([a], [b]) => Number(a) - Number(b))
        .map(([key, value]) => (
          <Flex key={key} w={200} align="center">
            <Text p={1} flex={1}>
              {key}:
            </Text>
            <Box p={1} flex={2}>
              {value}
            </Box>
            <IconButton
              flex={1}
              onClick={() => onHandleClick(key)}
              aria-label="add"
              icon={<AddIcon />}
              mr={1}
            />
            <IconButton
              flex={1}
              onClick={() => onHandleClick(key, 'sub')}
              aria-label="minus"
              icon={<MinusIcon />}
              isDisabled={value === 0}
            />
          </Flex>
        ))}
    </>
  );
};

export default BarbellList;
