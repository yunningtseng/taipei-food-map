import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

type CardProps = {
  shopNumber: number;
  isCardOpen: boolean;
};

type ShopImgProps = {
  isSmallSize: boolean;
};

type TypeProps = {
  type: string;
};

const StyledShopItemContainer = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'shopNumber' && prop !== 'isCardOpen',
})<CardProps>(({ theme, shopNumber, isCardOpen }) => ({
  display: 'flex',
  cursor: 'pointer',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.grey[300]}`,

  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },

  [theme.breakpoints.down('lg')]: {
    width: shopNumber === 1 ? '100%' : '50%',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },

  [theme.breakpoints.down('sm')]: {
    ...(isCardOpen && {
      '&:hover': {
        backgroundColor: '#fff',
        cursor: 'default',
      },
    }),
  },
}));

const StyledShopItem = styled('div')(({ theme }) => ({
  minWidth: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(1),
}));

const StyledShopImg = styled('img', {
  shouldForwardProp: (prop) => prop !== 'isSmallSize',
})<ShopImgProps>(({ theme, isSmallSize }) => ({
  width: '9rem',
  height: '8rem',
  margin: theme.spacing(0.5),
  borderRadius: '0.5rem',
  overflow: 'hidden',
  objectFit: 'cover',
  objectPosition: 'center',

  ...(isSmallSize && {
    width: '8rem',
    height: '7rem',
  }),

  [theme.breakpoints.down('sm')]: {
    width: '7.5rem',
    height: '7rem',
  },
}));

const StyledNoShopImg = styled('div')({
  minWidth: '9rem',
  minHeight: '8rem',
});

const StyledShopName = styled(CardHeader, {
  shouldForwardProp: (prop) => prop !== 'type',
})<TypeProps>(({ theme, type }) => ({
  padding: theme.spacing(0.5, 1, 0, 1),
  width: '100%',

  '& .MuiCardHeader-title': {
    ...(type === 'map'
      ? theme.typography.subtitle2
      : theme.typography.subtitle1),
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    textOverflow: 'ellipsis',
  },

  '& .MuiCardHeader-content': {
    width: '100%',
  },

  [theme.breakpoints.down('sm')]: {
    '& .MuiCardHeader-title': {
      ...theme.typography.subtitle2,
    },
  },
}));

const StyledMenu = styled(Menu)({
  '& .MuiList-root': {
    padding: 0,
  },
});

const StyledMenuItem = styled(MenuItem)({
  minHeight: '2rem',
  color: '#263238',
});

const StyledMenuLink = styled(Link)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  color: '#263238',
});

const StyledShopContentContainer = styled(CardContent, {
  shouldForwardProp: (prop) => prop !== 'type',
})<TypeProps>(({ theme, type }) => ({
  padding: type === 'map' ? theme.spacing(0, 1) : theme.spacing(1),
  color: '#70757a',

  '&:last-child': {
    paddingBottom: 0,
  },
}));

const StyledShopContent = styled('div')(({ theme }) => ({
  ...theme.typography.subtitle2,
  width: '100%',
}));

const StyledDescriptionContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  gap: theme.spacing(2),
  padding: theme.spacing(1, 1, 0, 1),
}));

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
    {
      marginBottom: theme.spacing(0.5),
    },

  [`& .${tooltipClasses.tooltip}`]: {
    ...theme.typography.caption,
  },
}));

const StyledDescription = styled('div')(({ theme }) => ({
  ...theme.typography.subtitle2,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
}));

export {
  StyledDescription,
  StyledDescriptionContainer,
  StyledMenu,
  StyledMenuItem,
  StyledMenuLink,
  StyledNoShopImg,
  StyledShopContent,
  StyledShopContentContainer,
  StyledShopImg,
  StyledShopItem,
  StyledShopItemContainer,
  StyledShopName,
  StyledTooltip,
};
