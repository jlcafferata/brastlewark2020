import React from 'react';
import {useSelector} from 'react-redux';
import GnomeCard from './GnomeCard';
import Spinner from '../commons/Spinner';

const GnomeListContainer = ({population = []}) => {
  const {loading = true} = useSelector((state) => state.gnomeData) || {};

  const content = population.map((gnome) => {
    return gnome.display ? <GnomeCard gnome={gnome} key={gnome.id} /> : null;
  });

  return (
    <>
      {loading ? (
        <Spinner className="big-middle-screen" />
      ) : (
        <div className="gnome-list">{content}</div>
      )}
    </>
  );
};

export default GnomeListContainer;
