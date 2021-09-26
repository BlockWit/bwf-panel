import {API_ADMIN_NOTIFICATIONS_EXEC_STATES} from "../../../config/apiConfig";
import useFetchAuthQuery from "../../common/useFetchAuthQuery";

export const DK_ADMIN_NOTIFICATIONS_EXEC_STATES = "admin.notifications.exec_states";

const useFetchAdminNotificationsExecStates = (params) => {
	return useFetchAuthQuery(DK_ADMIN_NOTIFICATIONS_EXEC_STATES, API_ADMIN_NOTIFICATIONS_EXEC_STATES, params);
}

export default useFetchAdminNotificationsExecStates;