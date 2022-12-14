export type User = {
    id:String,
    name:String,
    imageUri:String,
    status:String,
}

export type Message = {
    id:String,
    content:String,
    createdAt:String,
    user:User,
}

export type ChatRoom = {
    id:String,
    users:User[]
    lastMessage: Message
}