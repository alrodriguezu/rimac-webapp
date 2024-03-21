import { IState } from 'core/store/reducers';
import { useSelector } from 'react-redux';

const useAuth = () => {
    const { name } = useSelector((state: IState) => state.user);
    return { name };

};

export default useAuth;
