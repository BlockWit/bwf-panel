import {API_ADMIN_NOTIFICATIONS_TYPES} from "../../../config/apiConfig";
import useFetchAuthQuery from "../../common/useFetchAuthQuery";

export const DK_ADMIN_NOTIFICATIONS_TYPES = "admin.notifications.types";

const useFetchAdminNotificationsTypes = (params) => {
	return useFetchAuthQuery(DK_ADMIN_NOTIFICATIONS_TYPES, API_ADMIN_NOTIFICATIONS_TYPES, params);
}

export default useFetchAdminNotificationsTypes;