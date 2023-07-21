import {useState, useEffect} from 'react';


window.user = undefined;

export function useAuth() {
    const [user, _setUser] = useState(window.user);

    const setUser = (u) => {
        window.user = u;
        _setUser(u);
    };

    return [user, setUser];
}