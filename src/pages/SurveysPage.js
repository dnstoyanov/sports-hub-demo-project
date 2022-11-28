import { Box } from '@mui/material';
import { PersonalPageLayout } from '../components/layout/PersonalPageLayout';
import { MySurveys } from '../components/MySurveys/MySurveys';
import { AccountMenu } from '../components/UI/AccountMenu/AccountMenu';

function SurveysPage() {
  return (
    <PersonalPageLayout>
      <Box width={850} sx={{ margin: '50px auto 50px 30px' }}>
        <AccountMenu />
        <MySurveys />
      </Box>
    </PersonalPageLayout>
  );
}

export default SurveysPage;
