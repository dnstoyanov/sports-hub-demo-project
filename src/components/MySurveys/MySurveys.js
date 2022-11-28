import React from 'react';
import { Box } from '@mui/material';
import { styles } from './styles';
import { SortSurveys } from './SortSurveys';
import SurveysState from './SurveysState';
import { SurveyList } from './SurveysList';

export const MySurveys = () => {
  return (
    <>
      <Box sx={styles.mainComponent}>
        <SurveysState />
        <SortSurveys />
        <SurveyList />
      </Box>
    </>
  );
};
