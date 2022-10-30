
export interface ListInt {
    id:number
    nickName:string
    role:RoleInt[]
    userName:string
}

interface RoleInt{
    role:number
    roleName:string
}

interface SelectDataInt{
    role:number
    nickName:string
}

interface RoleListInt{
    authority:number[]
    roleID:number
    roleName:string
}

export class InitData{
    selectData:SelectDataInt = {
        nickName:"",
        role:0
    }
    list:ListInt[] = []
    roleList:RoleListInt[]=[]
}