import {API_ADMIN_NOTIFICATIONS} from "../../../config/apiConfig";
import useFetchAuthQuery from "../../common/useFetchAuthQuery";

export const DK_ADMIN_NOTIFICATIONS = "admin.notifications";

const useFetchAdminNotifications = (params) => {
	return useFetchAuthQuery(DK_ADMIN_NOTIFICATIONS, API_ADMIN_NOTIFICATIONS, params);
}

export default useFetchAdminNotifications;