import useAuth from './useAuth';
import { ROUTES } from '../constants';

const useSkipOnboarding = navigation => {
  const { completeOnboarding } = useAuth();

  const handleSkip = async () => {
    try {
      await completeOnboarding();
      navigation.navigate(ROUTES.LOGIN);
    } catch {
    }
  };

  return handleSkip;
};

export default useSkipOnboarding;
