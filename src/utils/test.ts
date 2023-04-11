import JWT from "./jwt";

(async () => {

    const token = JWT.generate({ username: 'zyique', password: 'zyique' });
    console.log(token);
})();