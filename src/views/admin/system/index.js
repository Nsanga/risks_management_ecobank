import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import Card from 'components/card/Card'
import React from 'react'
import Entitynew from './Component/Entitynew'

const System = () => {
  return (
    <div>
      <Card mt="100px">
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            <Tab>ENTITY</Tab>
            <Tab>PROFIL</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Entitynew />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </div>
  )
}

export default System
