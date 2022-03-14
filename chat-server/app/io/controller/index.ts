import ChatController from "./chat";
declare module 'egg' {
  interface CustomController {
    chat: ChatController;
  }
}