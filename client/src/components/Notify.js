import { toast } from "react-toastify";

const Notify = (message, type) => {
  switch (type) {
    case "err":
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case "success":
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case "info":
      toast.info(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    default:
      break;
  }
};

export default Notify;
