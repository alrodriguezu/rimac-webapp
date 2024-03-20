import ReactLoading, { LoadingProps } from "react-loading";
import "./loading.scss";

export const Loading = (props: LoadingProps) => (
  <div className="loading">
    <ReactLoading type="spin" {...props} />
  </div>
);
