import React from 'react';
import {
  Box,
  List,
  ListItem,
  Collapse,
  IconButton,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons';

const MultiLevelList = ({ data, onItemClick }) => {
  const renderCategories = (categories, level = 0) => {
    return Object.entries(categories).map(([category, subCategories], index) => (
      <NestedListItem key={`${category}-${index}`} category={category} subCategories={subCategories} level={level} />
    ));
  };

  const NestedListItem = ({ category, subCategories, level }) => {
    const { isOpen, onToggle } = useDisclosure();
    const hasSubCategories = typeof subCategories === 'object';

    return (
      <ListItem>
        <Box display="flex" alignItems="center">
          {hasSubCategories && (
            <IconButton
              icon={isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
              size="sm"
              onClick={onToggle}
              aria-label="Toggle"
              mr={2}
            />
          )}
          <Text ml={level * 4}>{category}</Text>
        </Box>
        {hasSubCategories && (
          <Collapse in={isOpen} animateOpacity>
            <List pl={6} mt={1}>
              {Array.isArray(subCategories)
                ? subCategories.map((item, index) => (
                    <ListItem key={`${item}-${index}`} onClick={() => onItemClick(item)}>
                      {item}
                    </ListItem>
                  ))
                : renderCategories(subCategories, level + 1)}
            </List>
          </Collapse>
        )}
      </ListItem>
    );
  };

  return (
    <Box p={4}>
      <List spacing={3}>
        {data.data.categories && renderCategories(data.data.categories)}
        {data.data.types && data.data.types.map((type, index) => (
          <ListItem key={index} onClick={() => onItemClick(type)}>
            {type}
          </ListItem>
        ))}
        {data.data.classifications && data.data.classifications.map((classification, index) => (
          <ListItem key={index} onClick={() => onItemClick(classification)}>
            {classification}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MultiLevelList;
