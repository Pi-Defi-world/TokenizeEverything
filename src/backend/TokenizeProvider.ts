import { UserGlobalData } from "../store/dreamworldSlice";

class TokenizeProvider {
    async  signInWithPi(demo?:boolean):Promise<UserGlobalData & { isNewUser: boolean }> {
        try {
            throw Error("just a test");
        } catch (error) {
            throw error
        }
    }
}
const tokenizeProvider = new TokenizeProvider()
export default tokenizeProvider;