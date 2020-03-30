import React, { useContext } from 'react'
import { Text, View } from 'react-native'
// import { useTheme } from '../../utils/ThemeContext'
import CountryContext from '../../context/country/countryContext';
import { ScrollContainer, ScreenSubtitle, Card, Indicator } from '../../components';

import styled from 'styled-components/native';
const IndicatorContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const Home = ({ navigation }) => {
  // const theme = useTheme();
  const countryContext = useContext(CountryContext);
  const { selectedCountry } = countryContext;

  // if (selectedCountry === null) {
  //   navigation.navigate('SelectCountry');
  // }

  return (
    <ScrollContainer>
      <ScreenSubtitle>March 25 2020</ScreenSubtitle>

      <Card title="Colombian News" icon="settings">
        <IndicatorContainer>
          <Indicator name="Confirmed" number={466836} />
          <Indicator name="Recovered" number={113225} />
          <Indicator name="Deaths" number={21105} />
        </IndicatorContainer>
      </Card>

      <Card title="Colombian News" icon="settings">
        <Text style={{color: 'white'}}>{JSON.stringify(selectedCountry)}</Text>
      </Card>

      <Card title="Colombian News" icon="settings">
        <Text style={{color: 'white'}}>{JSON.stringify(selectedCountry)}</Text>
      </Card>

      <Card title="Colombian News" icon="settings">
        <Text style={{color: 'white'}}>{JSON.stringify(selectedCountry)}</Text>
      </Card>

      <Card title="Colombian News" icon="settings">
        <Text style={{color: 'white'}}>{JSON.stringify(selectedCountry)}</Text>
      </Card>
    </ScrollContainer>
  )
}

export default Home
