/**
 * Middleware that makes sure that current user is authenticated:
 *
 * - attach current user to request if she/he is authenticated
 * - return a 401 HTTP response otherwise.
 *
 * Middleware inspired from Reddice. @see https://github.com/Remchi/reddice/blob/master/server/middlewares/authenticate.js
 *
 * @type {Express~req}
 * @type {Express~res}
 *
 * @param  {Express~req} req
 * @param  {Express~res} res
 * @param  {Function}    next
 */
export default (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    let token;

    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }

    if (token) {
        // @todo: retrieve current user from JWT
        if (false === /please/i.test(token)) {
            res.status(404).json({
                'errorCode': 404,
                'errorMessage': 'User not found from token'
            });
        }

        const user = {
            id: 1,
            username: 'John Doe',
            email: 'john.doe@gmail.com',
            isAdmin: false,
            avatar: null
        };
        // @todo: retrieve his counter-part in DB storage and return 404 if not found
        req.currentUser = user;
        next();
    } else {
        // @todo: isolate error codes and messages in a dedicated JS module
        res.status(401).json({
            'errorCode': 401,
            'errorMessage': 'Unauthorized. Authentication required.'
        });
    }
};
