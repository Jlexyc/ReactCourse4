import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TitleModel, TitleType } from '../../services/imdbTypes';
import { useThemeContext } from '../../hooks/useThemeContext';

import './Title.css';

interface TitleProps {
  title: TitleModel;
  onSettingsClick: (id: string) => void;
}

export const Title = ({ title, onSettingsClick }: TitleProps) => {
  const additionalInformation = React.useMemo(() => {
    switch (title.titleType) {
      case TitleType.TV_MOVIE:
      case TitleType.MOVIE:
        return title.runningTimeInMinutes;
      case TitleType.TV_SERIES:
        return title.numberOfEpisodes;
      default:
        return 'N/A';
    }
  }, [title]);

  const theme = useThemeContext();

  const onSettingsClickCallback = React.useCallback(() => {
    const parts = title.id.split('/');
    const titleId = parts[parts.length - 2];
    onSettingsClick(titleId);
  }, [title.id]);

  return (
    <Card sx={{ width: 345, height: 550, margin: '10px' }}>
      <CardHeader
        action={(
          <IconButton onClick={onSettingsClickCallback} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        )}
        style={{
          height: '100px',
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'row',
          backgroundColor: theme === 'light' ? blueGrey[100] : blueGrey[500],
        }}
        title={title.title}
        subheader={title.year}
      />
      <CardMedia
        component="img"
        height="350"
        image={title.image?.url}
        alt={title.id}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">{additionalInformation}</Typography>
      </CardContent>
    </Card>
  );
};
