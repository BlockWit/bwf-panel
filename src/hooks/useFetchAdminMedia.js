import {API_ADMIN_MEDIA} from "../config/apiConfig";
import useFetchAuthQuery from "./common/useFetchAuthQuery";

export const DK_ADMIN_MEDIA = "admin.media";

const useFetchAdminMedia = (params) => {
	return useFetchAuthQuery(DK_ADMIN_MEDIA, API_ADMIN_MEDIA, params);
}

export default useFetchAdminMedia;