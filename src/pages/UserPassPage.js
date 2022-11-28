import { Box } from '@mui/material';
import { PersonalPageLayout } from '../components/layout/PersonalPageLayout';
import { AccountMenu } from '../components/UI/AccountMenu/AccountMenu';
import { ChangePasswordForm } from '../components/UI/ChangePasswordForm/ChangePasswordForm';

function UserPage() {
  return (
    <PersonalPageLayout>
      <Box width={850} sx={{ margin: '50px auto 50px 30px' }}>
        <AccountMenu />
        <ChangePasswordForm />
      </Box>
    </PersonalPageLayout>
  );
}

export default UserPage;
