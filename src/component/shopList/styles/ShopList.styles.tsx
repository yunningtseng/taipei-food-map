import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import MenuItem from '@mui/material/MenuItem';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

type Props = {
  isSmallSize: boolean;
};

const StyledShopListWrapper = styled('div')(({ theme }) => ({
  maxWidth: '26rem',
  display: 'flex',
  overflow: 'hidden',
  overflowY: 'auto',
  border: '1px solid #ccc',
  borderRadius: '0.5rem',

  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
    height: '100%',
  },
}));

const StyledShopIListContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
}));

const StyledShopItemContainer = styled(Card)(({ theme }) => ({
  display: 'flex',
  paddingBottom: theme.spacing(1),
  cursor: 'pointer',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.grey[300]}`,

  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },

  [theme.breakpoints.down('lg')]: {
    width: '50%',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const StyledShopImg = styled('img', {
  shouldForwardProp: (prop) => prop !== 'isSmallSize',
})<Props>(({ theme, isSmallSize }) => ({
  width: '9rem',
  height: '8rem',
  margin: theme.spacing(1),
  backgroundColor: '#ccc',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  objectFit: 'cover',
  objectPosition: 'center',

  ...(isSmallSize && {
    width: '8rem',
    height: '7rem',
  }),

  [theme.breakpoints.down('sm')]: {
    maxWidth: '7rem',
    maxHeight: '6rem',
  },
}));

const StyledNoShopImg = styled('div')(({ theme }) => ({
  minWidth: '9rem',
  minHeight: '8rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(1),

  [theme.breakpoints.down('sm')]: {
    minWidth: '7rem',
    minHeight: '6rem',
  },
}));

const StyledShopItem = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const StyledShopName = styled(CardHeader)(({ theme }) => ({
  padding: theme.spacing(1, 1, 0, 1),

  '& .MuiCardHeader-title': {
    ...theme.typography.subtitle1,
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    textOverflow: 'ellipsis',
  },

  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
  },

  [theme.breakpoints.down('sm')]: {
    '& .MuiCardHeader-title': {
      ...theme.typography.subtitle2,
    },
  },
}));

// FIXME
const StyledShopMenuIcon = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const StyledMenuItem = styled(MenuItem)({
  minHeight: '2rem',
});

const StyledShopContentContainer = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(1),
  color: '#70757a',

  '&:last-child': {
    paddingBottom: 0,
  },
}));

const StyledShopContent = styled('div')(({ theme }) => ({
  ...theme.typography.subtitle2,
  width: '100%',
}));

const StyledShopDescription = styled('div')(({ theme }) => ({
  ...theme.typography.subtitle2,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
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

export {
  StyledShopListWrapper,
  StyledShopIListContainer,
  StyledShopItemContainer,
  StyledShopImg,
  StyledNoShopImg,
  StyledShopItem,
  StyledShopName,
  StyledShopMenuIcon,
  StyledMenuItem,
  StyledShopContentContainer,
  StyledShopContent,
  StyledShopDescription,
  StyledTooltip,
};
