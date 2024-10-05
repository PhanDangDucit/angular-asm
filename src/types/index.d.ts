export module UserService {
    type User = {
        username: string;
        password: string;
    }

    type UserList = Array<User>;
}