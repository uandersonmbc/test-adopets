export const ACCESS_KEY = "@test-adopets-access_key";
export const USER = "@test-adopets-user";

export interface User {
    full_name: string,
    role: string,
    email: string,
    created_date: string,
    avatar: string | null

}

export const isAuthenticated = () => {
    return (localStorage.getItem(ACCESS_KEY) !== null);
}

export const getAccessKey = () => localStorage.getItem(ACCESS_KEY);
export const getUser = () => localStorage.getItem(USER);

export const setUser = (user: User) => {
    let u = JSON.stringify(user);
    localStorage.setItem(USER, u);
}

export const setAccessKey = (access_key: string) => {
    localStorage.setItem(ACCESS_KEY, access_key);
};

export const logout = () => {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(USER);

};
