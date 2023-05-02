export const BASE_URL_API = "https://nineint-api.herokuapp.com/";

// Authentication
export const POST_AUTH_LOGIN = BASE_URL_API + "admin/login";
export const GET_PROFILE = BASE_URL_API + "users/profile";

// Users
export const GET_USERS = BASE_URL_API + "users/";

// Tryout
export const GET_TRYOUT = BASE_URL_API + "tryouts/";
export const POST_TRYOUT = GET_TRYOUT;
export const POST_CREATE_TRYOUT = BASE_URL_API + "tryouts/create";
export const DELETE_TRYOUT = BASE_URL_API + "tryouts/delete/";

// Bank Soal
export const GET_BANKSOAL = BASE_URL_API + "banksoal/";
export const POST_BANKSOAL = GET_BANKSOAL;
export const POST_CREATE_BANKSOAL = BASE_URL_API + "banksoal/create";
export const DELETE_BANKSOAL = BASE_URL_API + "banksoal/delete/";
