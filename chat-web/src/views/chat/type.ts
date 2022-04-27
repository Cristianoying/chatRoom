export interface MesageType {
  id: string;
  time: string;
  message: string;
  messageType: string;
  read: boolean;
}

export interface Friend {
  name: string;
  nickName: string;
}

export interface Massage {
  id: string;
  friend: Friend;
  messageList: MesageType;
}