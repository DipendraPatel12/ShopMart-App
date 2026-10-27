import useAuth from './useAuth';

const useSkipOnboarding = navigation => {
  const { completeOnboarding } = useAuth();

  const handleSkip = async () => {
    try {
      await completeOnboarding();
      navigation.navigate('Login');
    } catch (error) {
      console.log('Failed to save onboarding:', error);
    }
  };

  return handleSkip;
};

export default useSkipOnboarding;
