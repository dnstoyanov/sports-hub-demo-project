import { Link, Typography, Box } from '@mui/material';

export default function LinksGroups(props) {
  return (
    <Box>
      <Typography variant='h2' sx={{ paddingBottom: '29px' }}>
        {props.name}
      </Typography>
      {props.links.map((link, index) => (
        <Typography variant='h3' sx={{ paddingBottom: '14px' }} key={index}>
          <Link href={link.url} underline='none' sx={{ color: '#7F7B7B' }}>
            {link.text}
          </Link>
        </Typography>
      ))}
    </Box>
  );
}
