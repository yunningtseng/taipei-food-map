import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Hits } from 'react-instantsearch';
import { useFetchShopPhoto } from '../../hooks/useFetchShopPhoto';
import useShopInfoStore from '../../store/useShopInfoStore';
import { ShopHit } from '../../types/shop';
import {
  StyledShop,
  StyledShopImg,
  StyledShopList,
  StyledShopListContainer,
  StyledShopName,
} from './styles/ShopList.styles';

type HitProps = {
  hit: ShopHit;
};

type PhotoComponentProps = {
  hit: ShopHit;
  index: number;
};

const PhotoComponent = ({ hit, index }: PhotoComponentProps) => {
  const savedImgUrl = hit.imgUrls[index.toString()];
  const hasImgUrl = savedImgUrl !== undefined;

  const { fetchedUrl, isLoading } = useFetchShopPhoto(
    hasImgUrl ? '' : hit.photoNames[index],
    hit.id,
    index
  );
  const imgUrl = hasImgUrl ? savedImgUrl : fetchedUrl;

  if (!hasImgUrl && isLoading) {
    return 'Loading...';
  }

  return <StyledShopImg src={imgUrl} alt='place'></StyledShopImg>;
};

const HitComponent = ({ hit }: HitProps) => {
  const setSelectedShop = useShopInfoStore((state) => state.setSelectedShop);
  const setHoveredShop = useShopInfoStore((state) => state.setHoveredShop);

  const handleShopSelection = () => {
    setSelectedShop({
      id: hit.id,
      name: hit.displayName.text,
      description: hit.formattedAddress,
      longitude: hit.location.longitude,
      latitude: hit.location.latitude,
    });
  };

  const handleShopMouseEnter = () => {
    setHoveredShop({
      id: hit.id,
      name: hit.displayName.text,
      description: hit.formattedAddress,
      longitude: hit.location.longitude,
      latitude: hit.location.latitude,
    });
  };

  const handleShopMouseLeave = () => {
    setHoveredShop(null);
  };

  return (
    <StyledShopList
      onClick={handleShopSelection}
      onMouseEnter={handleShopMouseEnter}
      onMouseLeave={handleShopMouseLeave}
    >
      <PhotoComponent hit={hit} index={0} />

      <StyledShop>
        <StyledShopName>{hit.displayName.text}</StyledShopName>
        <Typography>{hit.formattedAddress}</Typography>

        <Box display='flex' alignItems='center'>
          <Typography>評分：</Typography>
          <Typography>{hit.rating}</Typography>
        </Box>

        <Box display='flex' alignItems='center'>
          <Typography>評論數：</Typography>
          <Typography>{`${hit.userRatingCount} 則留言`}</Typography>
        </Box>

        {hit.editorialSummary && (
          <Box>
            <Typography>{hit.editorialSummary.text}</Typography>
          </Box>
        )}

        <Link
          target='_blank'
          href={hit.googleMapsUri}
          underline='none'
          display='flex'
        >
          <Typography variant='body2' mr={1}>
            查看 Google Map
          </Typography>
          <OpenInNewIcon fontSize='small' />
        </Link>
      </StyledShop>
    </StyledShopList>
  );
};

// TODO infinite scroll
const ShopList = () => {
  return (
    <StyledShopListContainer>
      <Box minWidth={275} m={1}>
        <Hits hitComponent={HitComponent} />
      </Box>
    </StyledShopListContainer>
  );
};

export default ShopList;
