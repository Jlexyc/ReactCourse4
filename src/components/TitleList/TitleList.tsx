import React from 'react';
import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectTitles, selectAreTitlesLoading } from '../../rdx/imdb/selectors';

import { Title } from '../Title/Title';

import './TitleList.css';

interface TitleListProps {
  onTitleSettingsClicked: (id: string) => void;
}

export const TitleList = ({ onTitleSettingsClicked }: TitleListProps) => {
  const titles = useSelector(selectTitles);
  const isLoading = useSelector(selectAreTitlesLoading);

  if (isLoading) {
    return (
      <div className="titleLoading">
        <CircularProgress color="secondary" />
      </div>
    );
  }
  return (
    <div className="titleList">
      {titles.map((t) => (<Title key={t.id} title={t} onSettingsClick={onTitleSettingsClicked} />))}
    </div>
  );
};
