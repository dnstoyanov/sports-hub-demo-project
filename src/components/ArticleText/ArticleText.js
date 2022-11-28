import { Typography, Box } from '@mui/material';

export function ArticleText() {
  return (
    <Box
      sx={{
        marginTop: '42px',
        marginBottom: '100px',
        width: '813px',
      }}
    >
      <Typography sx={{ paddingBottom: '20px' }}>
        TOKYO — Major League Baseball begins its 2019 season on Wednesday in Japan with the first of
        two games between the Oakland Athletics and the{' '}
        <span style={{ color: '#D72130' }}>Seattle Mariners</span>. NBA which equipe is the best?
        But when the teams take the field at the Tokyo Dome, don’t say they’re playing on foreign
        soil.
      </Typography>
      <Typography sx={{ paddingBottom: '20px' }}>
        That’s because 12 tons of clay, silt and sand mixtures have been shipped by boat from the
        United States to make the batter’s box, pitcher’s mound, base pits and bullpens feel like
        home. The dirt swap was news to the veteran Seattle pitcher Mike Leake, who nonetheless gave
        his stomp of approval after starting the first of two exhibition games each club played
        against teams from{' '}
        <span style={{ color: '#D72130' }}>Japan’s Nippon Professional Baseball</span> as a tuneup.
      </Typography>
      <Typography sx={{ paddingBottom: '20px' }}>
        “Oh, you mean we weren’t pitching on the same mound the Japanese teams use during their
        season?” Leake said Sunday. “It felt like the same mound that we pitch on in the States. The
        only thing I would say is that maybe they put a little too much water at first, so some of
        the clay stuck to my spikes in the first inning, but that happens at home, too. After that,
        it was perfect.”
      </Typography>
    </Box>
  );
}
