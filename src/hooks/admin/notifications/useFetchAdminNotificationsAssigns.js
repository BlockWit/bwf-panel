import {API_ADMIN_NOTIFICATIONS_ASSIGNS} from "../../../config/apiConfig";
import useFetchAuthQuery from "../../common/useFetchAuthQuery";

export const DK_ADMIN_NOTIFICATIONS_ASSIGNS = "admin.notifications.assigns";

const useFetchAdminNotificationsAssigns = (params) => {
	return useFetchAuthQuery(DK_ADMIN_NOTIFICATIONS_ASSIGNS, API_ADMIN_NOTIFICATIONS_ASSIGNS, params);
}

export default useFetchAdminNotificationsAssigns;