import React from 'react';
import { Box, Button, Typography, Avatar } from '@mui/material';
import { styles } from './styles';
import { userComments } from './mockData';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

export const UserComment = () => {
  return (
    <Box>
      {userComments.map(comment => (
        <Box key={comment.id}>
          <Box sx={styles.avatarAndNameWrapper}>
            <Box sx={styles.commenterAvatar}>
              <Avatar
                alt={`${comment.name}`}
                src={comment.avatar}
                sx={{ width: '35', height: '35' }}
              />
            </Box>
            <Box>
              <Box>
                <Typography sx={{ fontSize: '16px', fontWeight: '700', paddingTop: '5px' }}>
                  {comment.name}
                </Typography>
              </Box>
              <Box>
                <Typography
                  component={'span'}
                  sx={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#979797',
                    display: 'inline',
                  }}
                >
                  {comment.commentDate}
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#D4D9E2',
                      display: 'inline',
                    }}
                  >
                    {comment.edited === true ? ' Edited' : ' Original post'}
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.userCommentBox}>
            <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>
              {comment.userComment}
            </Typography>
          </Box>

          <Box sx={styles.userLikesDislikesBox}>
            <Box sx={styles.likeAndDislike}>
              <ThumbUpOffAltIcon sx={styles.icon} />
              <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#7F8899' }}>
                {comment.likes}
              </Typography>
              <ThumbDownOffAltIcon sx={styles.icon} />
              <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#7F8899' }}>
                {comment.dislikes}
              </Typography>
            </Box>
            <Box sx={styles.modifyComment}>
              <Button
                variant='text'
                sx={{
                  color: '#7F8899',
                  marginRight: '10px',
                  '&:hover': { color: 'black', background: '#FFFFFF' },
                }}
                disableRipple
              >
                Edit
              </Button>
              <Button
                variant='text'
                sx={{
                  color: '#7F8899',
                  marginRight: '10px',
                  '&:hover': { color: 'black', background: '#FFFFFF' },
                }}
                disableRipple
              >
                Comment
              </Button>
              <Button
                variant='text'
                sx={{
                  color: '#7F8899',
                  marginRight: '10px',
                  '&:hover': { color: 'black', background: '#FFFFFF' },
                }}
                disableRipple
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
