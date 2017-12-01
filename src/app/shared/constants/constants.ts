export const BACKEND_PATH = 'http://192.168.56.1:3000';
import * as io from 'socket.io-client';

export const Socket: SocketIOClient.Socket = io(BACKEND_PATH);

export const ERROR_MESSAGES = {
  name: {
    required: 'Nhập họ tên'
  },
  mail: {
    required: 'Nhập email'
  },
  password: {
    required: 'Nhập mật khẩu'
  },
  confirm_password: {
    required: 'Nhập lại mật khẩu'
  }
}

export const DEFAULT_AVATAR_PATH = '/assets/imgs/default_avatar.png';
