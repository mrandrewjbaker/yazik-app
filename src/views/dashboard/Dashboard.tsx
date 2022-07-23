import { useAppSelector } from '../../app/hooks';
import styles from './dashboard.module.scss';

export const Dashboard: React.FC = () => {

  return (
    <div className={styles.Dashboard}>
      <h1>Dashboard</h1>
      <ul className={styles.Dashboard_continueOptionBlocks}>
        <li className={styles.Dashboard_continueOptionBlock}>Continue [last active learning language]</li>
        <li className={styles.Dashboard_continueOptionBlock}>Pick a Language</li>
      </ul>
    </div>
  );
}