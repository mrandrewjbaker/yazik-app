import { ReactNode, useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';

import styles from './RouterContainer.module.scss';
import { select_SideMenu } from '../SideMenu/SideMenu.slice';

interface IRouterContainerProps {
  children?: ReactNode;
}

export const RouterContainer = (props: IRouterContainerProps) => {
  const SideMenuState = useAppSelector(select_SideMenu)
  const [SideMenuOpened, setSideMenuOpened] = useState<boolean>(SideMenuState.value.SideMenuOpened)

  useEffect(() => {
    setSideMenuOpened(SideMenuState.value.SideMenuOpened)
  }, [SideMenuState.value.SideMenuOpened])

  return (
    <div className={`${styles.RouterContainer} ${SideMenuOpened ? styles.RouterContainer_SideMenuOpened : ''}`}>
      {
        props.children
      }
    </div>
  )
}