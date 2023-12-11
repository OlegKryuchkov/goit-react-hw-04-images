import styles from './Button.module.css';

const LoadMoreButton = ({ onButtonClick }) => {
  return (
    <div className={styles.BtnContainer}>
      <button
        className={styles.ButtonLoader}
        type="button"
        onClick={onButtonClick}
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreButton;
