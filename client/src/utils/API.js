import axios from "axios";

export default { 
    sendMessage: (emailObj) => {
        return axios.post("api/sendMessage/contact", emailObj);
      }
};