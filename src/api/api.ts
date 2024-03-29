const HOST = process.env.REACT_APP_API_BASE_URL + "/api/";

const AUTH = "auth";
const USER = "user";
const DIARY = "diary";
const PAGE = "page";
const COMMENT = "comment";

interface ApiInterface {
  auth: {
    regist: () => string;
    verifyEmail: () => string;
    login: () => string;
  };
  user: {
    getUser: (email: string) => string;
    checkDuplication: (email: string) => string;
    modifyProfile: () => string;
    withdrawUser: () => string;
    findUserId: () => string;
    findUserPassword: () => string;
  };
  diary: {
    getList: () => string;
    createDiary: () => string;
    joinDiary: (invCode: string) => string;
    getDiary: () => string;
    setDiary: (diaryId: number) => string;
    updateDiary: (diaryId: number) => string;
    refuseInvitation: (diaryId: number) => string;
    acceptInvitation: (diaryId: number) => string;
    searchMember: (char: string, diaryId: number) => string;
    // withdrawDiary: () => string; // 나가기? 삭제?
  };
  page: {
    createPage: () => string;
    searchPage: () => string;
    modifyPage: () => string;
    deletePage: () => string;
  };
  comment: {
    createComment: () => string;
    searchComment: () => string;
    modifyComment: () => string;
    deleteComment: () => string;
  };
}

const api: ApiInterface = {
  auth: {
    regist: () => HOST + AUTH + "/register",
    verifyEmail: () => HOST + AUTH + "/verify",
    login: () => HOST + AUTH + "/login",
  },
  user: {
    getUser: (email: string) => HOST + USER + "/search?" + email,
    checkDuplication: (email) => HOST + USER + "/email?" + email,
    modifyProfile: () => HOST + USER,
    withdrawUser: () => HOST + USER,
    findUserId: () => HOST + USER + "/find",
    findUserPassword: () => HOST + USER + "/find",
  },
  diary: {
    getList: () => HOST + DIARY + "/list",
    createDiary: () => HOST + DIARY,
    joinDiary: (invCode) => HOST + DIARY + "/join/" + invCode,
    getDiary: () => HOST + DIARY + "/list",
    setDiary: (diaryId) => HOST + DIARY + "/" + "set/" + diaryId,
    updateDiary: (diaryId) => HOST + DIARY + "/" + diaryId,
    refuseInvitation: (diaryId) => HOST + DIARY + "refuse/" + diaryId,
    acceptInvitation: (diaryId) => HOST + DIARY + "accept/" + diaryId,
    searchMember: (char, diaryId) => HOST + DIARY + "/search/" + diaryId + "?userName=" + char,
    // withdrawDiary: () => HOST + DIARY,
  },
  page: {
    createPage: () => HOST + PAGE,
    searchPage: () => HOST + PAGE,
    modifyPage: () => HOST + PAGE,
    deletePage: () => HOST + PAGE,
  },
  comment: {
    createComment: () => HOST + COMMENT,
    searchComment: () => HOST + COMMENT,
    modifyComment: () => HOST + COMMENT,
    deleteComment: () => HOST + COMMENT,
  },
};

export default api;
