import jsonwebtoken from 'jsonwebtoken';

export const sign = (payload, secretOrPrivateKey, options) => {
    const promise = new Promise((resolve, reject) => {
        jsonwebtoken.sign(payload, secretOrPrivateKey, options, (error, token) => {
            if (!error) {
                return resolve(token)
            };
            reject(error);
        });
    });
    return promise;
};

export const verify = (token, secretOrPublicKey, options) => {
    const promise = new Promise((resolve, reject) => {
        jsonwebtoken.verify(token, secretOrPublicKey, options, (error, decodedToken) => {
            if (!error) {
                return resolve(decodedToken);
            }
            reject(error);
        });
    });
    return promise;
};