import { create } from "zustand";



type loginType = {

    userToken: string,
    userEmail:string
    setUserToken: (token:string,email:string) => void,
    logout: () => void
}


export const useLoginStore = create<loginType>((set) => ({
    userToken:"",
    userEmail:"",
    setUserToken:(token,email)=> set({userToken:token,userEmail:email}),
    logout:() => set({userToken:"",userEmail:""})
}))