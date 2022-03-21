import socketio from 'socket.io-client'

class ExchangeMsg {
  _action: string = ''
  _payload: object = {}
  _target: string = 'all'
  constructor(action: string, payload: object = {}, target: string = 'all') {
    this._action = action
    this._payload = payload
    this._target = target
  }

  /**
   * toJsonString
   */
  public toJsonString() {
    const data = {
      action: this._action,
      target: this._target,
      payload: this._payload
    }
    return JSON.stringify(data)
  }
}

class Socket {
  private static _sockets: Socket
  // Socket 连接实例
  private static _ws: SocketIOClient.Socket
  // Socket 连接是否建立
  private static _isOn: boolean = false
  private serverAddress: string = ''
  public get id(): string {
    return Socket._ws.id
  }
  constructor(serverAddress: string) {
    this.serverAddress = serverAddress
    this.Connect()
  }

  /**
   * getInstance
   * 
   * 单例模式创建实例
   */
  public getInstance() {
    if (!Socket._sockets) {
      Socket._sockets = new Socket(this.serverAddress)
    }
    return Socket._sockets
  }
  /**
   * Connect
   * 
   * 初始化 Socket 连接
   */
  private async Connect() {
    const serverAddress: string = this.serverAddress;
    // 关闭之前的 Socket 连接
    this.reset()
    // 开启新的 Socket 连接
    console.log(`建立socket连接: ${serverAddress}`)
    try {
      Socket._ws = socketio.connect(serverAddress, {
        transports: ['websocket']
      })
      Socket._isOn = true
      Socket._ws.on('connect', () => {
        console.log(`与${serverAddress}建立socket连接成功`)
      })
      Socket._ws.on('disconnect', () => {
        console.log(`与${serverAddress}建立socket断开连接`)
      })
    } catch (error) {
      console.log(`建立socket连接失败，原因：${error}`)
    }
  }

  /**
   * reset
   * 
   * 关闭 Socket 连接
   */
  public reset() {
    if (Socket._ws != null) {
      Socket._ws.close()
      Socket._isOn = false
    }
  }
  /**
   * send
   * 
   * 发送独立事件消息
   */
  public emit(event: string, ...args: any[]) {
    if (Socket._ws != null && Socket._isOn) {
      Socket._ws.emit(event, ...args)
    }
  }

  /**
   * exchange
   * 
   * exchange事件消息
   */
  public exchange(exchangeMsg: ExchangeMsg) {
    Socket._ws.emit('exchange', exchangeMsg.toJsonString())
  }

  /**
   * onMessage
   * 
   * 监听服务端发送的独立事件消息
   * @param e event name
   * @param callback event callback
   */
  public onMessageReceived(e: string, callback: Function) {
    Socket._ws.on(e, callback)
  }

  /**
   * onExchangeMsg
   */
  public onExchangeMsgReceived() {
    Socket._ws.on('exchange', (msg: string) => {
      console.log(`exchange message: ${msg}`)
      this._listeners.forEach((callback: Function) => {
        callback(msg)
      })
    })
  }

  private _listeners: Array<Function> = []

  /**
   * addListener
   */
  public addListener(callback: Function) {
    const index = this._listeners.indexOf(callback)
    if (index === -1) {
      this._listeners[this._listeners.length] = callback
    }
  }

  /**
   * removeListener
   */
  public removeListener(callback: Function) {
    this._listeners.forEach((listener, index) => {
      if (listener === callback) {
        this._listeners.splice(index, 1)
      }
    })
  }
}


export { Socket, ExchangeMsg }