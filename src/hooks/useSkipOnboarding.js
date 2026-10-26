
import { useDispatch } from 'react-redux';
import { finishOnboarding } from '../redux/slices/authSlice';

const useSkipOnboarding = navigation => {
    const dispatch = useDispatch();

    const handleSkip = async () => {
        try {
            await dispatch(finishOnboarding()).unwrap();
            navigation.navigate('Login');
        } catch (error) {
            console.log('Failed to save onboarding:', error);
        }
    };

    return handleSkip;
};

export default useSkipOnboarding;
