

// import css file 
import styles from "./animaNoit.css";
const BellIcon = () => {
  return (
    <div className={styles.bellIcon} tabIndex="0">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="50px"
        height="30px"
        viewBox="0 0 50 30"
        xmlSpace="preserve"
      >
        <g className={styles.bellIconGroup}>
          <path
            className={styles.bellIconBall}
            id="ball"
            fillRule="evenodd"
            strokeWidth="1.5"
            clipRule="evenodd"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            d="M28.7,25 c0,1.9-1.7,3.5-3.7,3.5s-3.7-1.6-3.7-3.5s1.7-3.5,3.7-3.5S28.7,23,28.7,25z"
          />
          <path
            className={styles.bellIconShell}
            id="shell"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#FFFFFF"
            stroke="currentColor"
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M35.9,21.8c-1.2-0.7-4.1-3-3.4-8.7c0.1-1,0.1-2.1,0-3.1h0c-0.3-4.1-3.9-7.2-8.1-6.9c-3.7,0.3-6.6,3.2-6.9,6.9h0 
            c-0.1,1-0.1,2.1,0,3.1c0.6,5.7-2.2,8-3.4,8.7c-0.4,0.2-0.6,0.6-0.6,1v1.8c0,0.2,0.2,0.4,0.4,0.4h22.2c0.2,0,0.4-0.2,0.4-0.4v-1.8 
            C36.5,22.4,36.3,22,35.9,21.8L35.9,21.8z"
          />
        </g>
      </svg>
      <div className={styles.notificationAmount}>
        <span>1</span>
      </div>
    </div>
  );
};

export default BellIcon;
