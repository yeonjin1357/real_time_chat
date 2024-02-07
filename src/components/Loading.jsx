import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes.loading_wrap}>
      <div className={classes.loading_bg}></div>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loading;
