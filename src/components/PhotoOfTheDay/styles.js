export const styles = {
  triangle: {
    width: 170,
    height: 120,
    backgroundColor: 'primary.main',
    clipPath: 'polygon(100% 50%, 0 0%, 0 100%)',
    position: 'absolute',
    top: '-20px',
    left: '-10px',
    zIndex: -1,
  },
  trinagleTitle: {
    width: '60px',
    fontSize: '16px',
    position: 'absolute',
    top: '5px',
  },
  image: {
    position: 'relative',
    zIndex: -2,
    width: '100%',
  },
  imageGradient: {
    lineHeight: 0,
    background:
      'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(134,134,134,0) 50%, rgba(255,255,255,0) 100%)',
  },
  imageContainer: {
    width: '600px',
    padding: '30px',
    position: 'absolute',
    bottom: 0,
  },
};
