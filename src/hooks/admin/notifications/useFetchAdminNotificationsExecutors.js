import {API_ADMIN_NOTIFICATIONS_EXECUTORS} from "../../../config/apiConfig";
import useFetchAuthQuery from "../../common/useFetchAuthQuery";

export const DK_ADMIN_NOTIFICATIONS_EXECUTORS = "admin.notifications.executors";

const useFetchAdminNotificationsExecutors = (params) => {
	return useFetchAuthQuery(DK_ADMIN_NOTIFICATIONS_EXECUTORS, API_ADMIN_NOTIFICATIONS_EXECUTORS, params);
}

export default useFetchAdminNotificationsExecutors;