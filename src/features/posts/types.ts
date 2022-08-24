export enum EStatus {
    FULLFILED = "fullFiled",
    PENDING = "pending",
    REJECTED = "rejected",
    IDLE = "idle",
}
export type TPicturesData = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}
export interface IPostsState {
    status: EStatus
    error: string | null
    data: TPicturesData[]
}
