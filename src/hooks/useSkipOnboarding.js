import useAuth from './useAuth';

const useSkipOnboarding = navigation => {
  const { completeOnboarding } = useAuth();

  const handleSkip = async () => {
    try {
      await completeOnboarding();
      navigation.navigate('Login');
    } catch {
    }
  };

  return handleSkip;
};

export default useSkipOnboarding;
