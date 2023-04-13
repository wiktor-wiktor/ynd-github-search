import React from 'react'

import styles from './repository-card.module.scss'

interface RepositoryCardProps {

};

export const RepositoryCard = ({}: RepositoryCardProps) => {
  return (
    <div className={ styles.repositoryCard }>
      <mark>RepositoryCard</mark>
    </div>
  );
}
