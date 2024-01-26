import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const StyledShopListContainer = styled('div')({
  display: 'flex',
  // FIXME 修正高度
  height: 'calc(100% - 2.5rem)',
  overflow: 'hidden',
  overflowY: 'auto',
  border: '1px solid #ccc',
});

const StyledShopContainer = styled(Card)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(2),
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));

const StyledShopImg = styled('img')(({ theme }) => ({
  width: '9rem',
  height: '8rem',
  margin: theme.spacing(2),
  backgroundColor: '#ccc',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  objectFit: 'cover',
  objectPosition: 'center',
}));

const StyledNoShopImg = styled('div')(({ theme }) => ({
  width: '9rem',
  height: '8rem',
  margin: theme.spacing(2),
}));

const StyledShop = styled('div')(({ theme }) => ({
  width: '20rem',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: theme.spacing(2),
}));

const StyledShopName = styled(CardHeader)(({ theme }) => ({
  padding: theme.spacing(1, 2),

  '& .MuiCardHeader-title': {
    ...theme.typography.subtitle1,
    width: '16rem',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    textOverflow: 'ellipsis',
  },
}));

const StyledShopContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(1, 2, 1, 2),

  '&:last-child': {
    paddingBottom: 0,
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
  StyledShop,
  StyledShopContainer,
  StyledShopContent,
  StyledShopImg,
  StyledNoShopImg,
  StyledShopListContainer,
  StyledShopName,
  StyledTooltip,
};
