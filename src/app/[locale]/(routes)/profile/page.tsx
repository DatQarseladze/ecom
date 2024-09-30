// src/app/test/[id]/page.tsx

'use client';
import React from 'react';
import i18n, {useTranslation} from '@/src/i18n';
import { Button, Typography, Container } from '@mui/material';

const Profile: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Container>
      <h1>Profile page</h1>
      <Typography variant="h3" component="h3">
        {t('title')}
      </Typography>
      <Button onClick={() => i18n.changeLanguage('ge')}>
        Switch to Georgian
      </Button>
      <Button onClick={() => i18n.changeLanguage('en')}>
        Switch to English
      </Button>
    </Container>
  );
};

export default Profile;
