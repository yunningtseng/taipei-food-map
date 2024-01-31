import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const StyledShopListContainer = styled('div')({
  display: 'flex',
  // FIXME 修正高度
  height: 'calc(100% - 7rem)',
  marginTop: '2rem',
  overflow: 'hidden',
  overflowY: 'auto',
  border: '1px solid #ccc',
  borderRadius: '0.5rem',
});

const StyledShopContainer = styled(Card)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(1),
  cursor: 'pointer',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.grey[300]}`,

  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));

const StyledShopImg = styled('img')(({ theme }) => ({
  width: '8rem',
  height: '8rem',
  margin: theme.spacing(1),
  backgroundColor: '#ccc',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  objectFit: 'cover',
  objectPosition: 'center',
}));

const StyledNoShopImg = styled('div')({
  width: '9rem',
  height: '8rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledShop = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const StyledShopName = styled(CardHeader)(({ theme }) => ({
  padding: theme.spacing(1),

  '& .MuiCardHeader-title': {
    ...theme.typography.subtitle1,
    width: '12rem',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    textOverflow: 'ellipsis',
  },
}));

const StyledShopContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(1),

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
