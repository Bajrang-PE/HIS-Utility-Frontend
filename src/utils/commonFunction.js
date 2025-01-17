import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//FUNCTION TO MANAGE GLOBAL ALERTS
export const ToastAlert = (message, type) => {
  toast(message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    type: type
  });
}

//FUNCTION TO TRANSFORM DATA ACCORDING TO DROPDOWN - TWO COLUMNS
export const DrpDataValLab = (data, col1, col2, isJson) => {
  if (isJson) {
    const result = data?.map((item) => ({
      value: item?.jsonData?.[col1] || "", // Access nested `json` object for `col1`
      label: item?.jsonData?.[col2] || "", // Access nested `json` object for `col2`
    }));
    return result;
  } else {
    const result = data?.map((item) =>
      ({ value: item[col1], label: item[col2] })
    )
    return result
  }
}

//FUNCTION TO TRANSFORM DATA ACCORDING TO DROPDOWN - THREE COLUMNS
export const ThreeColDrpData = (data, col1, col2, col3) => {
  const result = data?.map((item) =>
    ({ value: item[col1], label: item[col2], filterID: item[col3] })
  )
  return result
}