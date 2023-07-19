import {useState, useEffect} from 'react';

export function useAuth() {
    const [user, setUser] = useState();
    return [user, setUser];
}