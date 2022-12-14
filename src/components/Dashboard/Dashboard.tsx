import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import {
  TextField,
  Button,
  Box,
} from '@mui/material';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { imdbFindTitleThunk } from '../../rdx/imdb/thunks';
import { useThemeContext } from '../../hooks/useThemeContext';

import { TitleList } from '../TitleList/TitleList';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryString = searchParams.get('q');
  const themeContext = useThemeContext();
  const [searchValue, setSearchValue] = React.useState<string>('');

  console.log('themeContext: ', themeContext);
  const onTextInputChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }, []);

  React.useEffect(() => {
    if (queryString?.length) {
      dispatch(imdbFindTitleThunk(queryString));
    }
  }, [queryString]);

  const onTitleSettingsClicked = React.useCallback((id: string) => {
    navigate(`/credits/${id}`);
  }, [navigate]);

  const findTitle = React.useCallback(() => {
    setSearchParams(`q:${searchValue}`);
    dispatch(imdbFindTitleThunk(searchValue));
  }, [searchValue]);

  return (
    <Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        p: '10px',
        width: '400px',
        justifyContent: 'space-between',
        backgroundColor: themeContext === 'light' ? '#FFFFFF' : '#0F0F0F',
      }}
      >
        <TextField
          id="standard-basic"
          label="Search String"
          variant="standard"
          onChange={onTextInputChange}
          sx={{
            width: '250px',
          }}
        />
        <Button onClick={findTitle} variant="contained">Search</Button>
      </Box>
      <br />
      <br />
      <TitleList onTitleSettingsClicked={onTitleSettingsClicked} />
    </Box>
  );
};
