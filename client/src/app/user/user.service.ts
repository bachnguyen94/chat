export class UsersService {
// `currentUser` contains the current user
    currentUser: Subject<User> = new BehaviorSubject<User>(null);
    public setCurrentUser(newUser: User): void {
        this.currentUser.next(newUser);
    }
}
