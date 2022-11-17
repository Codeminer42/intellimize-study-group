import styled from 'styled-components';
import LocationIcon from './LocationIcon';

type WineLocationsProps = {
  locationInCellar: string;
  winery: string;
};

const WineLocations = ({ locationInCellar, winery }: WineLocationsProps) => {
  return (
    <LocationsWrapper>
      <Locations>
        <LocationIcon />
        {locationInCellar}
      </Locations>
      <Locations>
        <LocationIcon />
        {winery}
      </Locations>
    </LocationsWrapper>
  );
};

const LocationsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 30px 60px;
`;

const Locations = styled.a`
  display: flex;
  align-items: center;

  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 18px;
`;

export default WineLocations;
