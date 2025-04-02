import { toast } from 'react-toastify';

const host = 'http://localhost:3030';

const requester = async (method, url, data) => {
    const options = {
        method,
        headers: {},
        credentials: 'include'
    }

    if (data) {
        if (data instanceof FormData) {
            options.body = data;
        } else {
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(data);
        }
    }

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {
        const response = await fetch(`${host}/${url}`, options);

        if (!response.ok) {
            const responseError = await response.json();

            throw new Error(responseError.message || `Response status: ${response.status}`);
        }

        if (response.status === 204) {
            return response;
        }
        const json = await response.json();

        return json;

    } catch (error) {
        toast.error(error.message);
    }
};

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const remove = requester.bind(null, 'DELETE');