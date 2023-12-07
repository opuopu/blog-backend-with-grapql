import { Secret } from "jsonwebtoken";
import jwt from 'jsonwebtoken';

class JwtHelper {
    token: string;
    secret?: Secret;

    constructor(token: string, secret?: Secret) {
        this.token = token;
        this.secret = secret;
    }

    verifyToken(): any {
        const verify = jwt.verify(this.token, this.secret as Secret);
        return verify;
    }
}
export default JwtHelper