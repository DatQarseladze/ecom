'use client';
import { Button, Typography, Container } from '@mui/material';
import i18n, { useTranslation } from '@/src/i18n';
import {
  GithubSignInButton,
  GoogleSignInButton,
} from '../../components/authButtons';
import { useEffect } from 'react';

const Page = () => {
  const { t } = useTranslation();

  useEffect(() => {});
  return (
    <Container>
      <GoogleSignInButton />
      <GithubSignInButton />

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

export default Page;
