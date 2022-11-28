import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const hoverStyle = {
  border: 'none',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '#fff',
    boxShadow: '0px 7px 15px 2px #D2D2D2',
  },
};

export const CardArticle = ({ image, title, subTitle, boxShadow = false, sx = {} }) => {
  return (
    <Card sx={boxShadow ? { ...hoverStyle, ...sx } : sx}>
      <CardActionArea
        disableRipple
        sx={{ display: 'flex', padding: 1.5, alignItems: 'flex-start' }}
      >
        <CardMedia
          height={158}
          width={284}
          component='img'
          image={image}
          alt={title}
          sx={{ width: 284 }}
        />
        <CardContent sx={{ pl: 3, pr: 10, py: 0 }}>
          <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>{title}</Typography>
          <Typography sx={{ fontSize: '14px', mt: 2, fontWeight: '400', color: '#7F7B7B' }}>
            {subTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
