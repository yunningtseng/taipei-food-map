import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

type Props = {
  isSmallSize: boolean;
};

const StyledShopListWrapper = styled('div')({
  display: 'flex',
  height: 'calc(100% - 6rem)',
  overflow: 'hidden',
  overflowY: 'auto',
  border: '1px solid #ccc',
  borderRadius: '0.5rem',
});

const StyledShopIListContainer = styled('div')(({ theme }) => ({
  maxWidth: '26rem',

  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
}));

const StyledShopItemContainer = styled(Card)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(1),
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
    minWidth: '8rem',
    minHeight: '7rem',
  }),

  [theme.breakpoints.down('md')]: {
    minWidth: '12rem',
    minHeight: '9rem',

    ...(isSmallSize && {
      minWidth: '8rem',
      minHeight: '7rem',
    }),
  },
}));

const StyledNoShopImg = styled('div')({
  width: '9rem',
  height: '8rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledShopItem = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const StyledShopName = styled(CardHeader)(({ theme }) => ({
  padding: theme.spacing(1),

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
}));

const StyledShopContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(1),

  '&:last-child': {
    paddingBottom: 0,
  },
}));

const StyledShopDescription = styled('div')(({ theme }) => ({
  ...theme.typography.body2,
  [theme.breakpoints.down('lg')]: {
    width: '80%',
  },
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
  StyledNoShopImg,
  StyledShopContent,
  StyledShopDescription,
  StyledShopIListContainer,
  StyledShopImg,
  StyledShopItem,
  StyledShopItemContainer,
  StyledShopListWrapper,
  StyledShopName,
  StyledTooltip,
};
