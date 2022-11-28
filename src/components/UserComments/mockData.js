import avatarIvan from '../../assets/user_comments/ivan.jpg';
import avatarTom from '../../assets/user_comments/tom.webp';
import avatarJenna from '../../assets/user_comments/jenna.jpg';
import avatarMikka from '../../assets/user_comments/mikka.jpg';

export const userComments = [
  {
    id: 1,
    name: 'Ivan Baloh',
    avatar: avatarIvan,
    userComment:
      'According to this survey, about 95% of the people which take a part in some surveys said, that they do not want to participate in any surveys. They believe that the surveys are not good, because they do not believe in them anyway. They also said that they actually are NOT a part of this survey, but they are in this survey jut to say that they do not take a part in any surveys.',
    commentDate: new Date().toDateString(),
    likes: 12,
    disliked: 2,
    edited: true,
  },
  {
    id: 2,
    name: 'Tom Chanter',
    avatar: avatarTom,
    userComment:
      'According to this survey, about 95% of the people which take a part in some surveys said, that they do not want to participate in any surveys. They believe that the surveys are not good, because they do not believe in them anyway. They also said that they actually are NOT a part of this survey, but they are in this survey jut to say that they do not take a part in any surveys.',
    commentDate: new Date().toDateString(),
    likes: 22,
    dislikes: 15,
  },
  {
    id: 3,
    name: 'Jenna Hudges',
    avatar: avatarJenna,
    userComment:
      'According to this survey, about 95% of the people which take a part in some surveys said, that they do not want to participate in any surveys. They believe that the surveys are not good, because they do not believe in them anyway. They also said that they actually are NOT a part of this survey, but they are in this survey jut to say that they do not take a part in any surveys.',
    commentDate: new Date().toDateString(),
    likes: 145,
    dislikes: 3,
  },
  {
    id: 4,
    name: 'Mikka Song',
    avatar: avatarMikka,
    userComment:
      'According to this survey, about 95% of the people which take a part in some surveys said, that they do not want to participate in any surveys. They believe that the surveys are not good, because they do not believe in them anyway. They also said that they actually are NOT a part of this survey, but they are in this survey jut to say that they do not take a part in any surveys.',
    commentDate: new Date().toDateString(),
    likes: 34,
    dislike: 1,
  },
];
