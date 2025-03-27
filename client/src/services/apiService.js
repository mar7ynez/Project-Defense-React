const host = 'http://localhost:3030';

const requester = async (method, url, data) => {
    const options = {
        method,
        headers: {},
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = localStorage.getItem('userData');

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {
        const response = await fetch(`${host}/${url}`, options);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        if (response.status === 204) {
            return response;
        }
        const json = await response.json();

        return json;

    } catch (error) {
        alert(error);
    }
};

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const remove = requester.bind(null, 'DELETE');