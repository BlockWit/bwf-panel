import {API_PROFILE} from "../config/apiConfig";
import useFetchAuthQuery from "./common/useFetchAuthQuery";

export const DK_PROFILE = "profile";

const useFetchProfile = () => {
	return useFetchAuthQuery(DK_PROFILE, API_PROFILE);
}

export default useFetchProfile;