// third party
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();
