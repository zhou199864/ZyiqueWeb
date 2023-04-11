import jsonwebtoken from 'jsonwebtoken'
const secret = 'zyique';

export default class JWT {
    public static generate(value: any, expires = '30 days'): string {
        try {
            return jsonwebtoken.sign(value, secret, { expiresIn: expires });
        } catch (e) {
            console.error('jwt sign error.');
            return '';
        }
    }

    public static verify(token: string): boolean {
        try {
            jsonwebtoken.verify(token, secret);
            return true;
        } catch (e) {
            console.error('jwt verify error.');
            return false;
        }
    }

}