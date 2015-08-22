# STORE
chat:
  connected: true || false
  'typed-users': [] # [nicknames] without me

  channels: [ # на сервере раз в минуту вытягиваем ченнелы, все кто обновился - эмитим по списку юзеров
    {
      type: 'channel' || 'person'
      id: 'channel_id' || 'user_id'
      current: true || false
      unread_messages: count # як месседжи приходять, та ми не курент = інкрементуємо // як стаємо курент - обнуляємо
      users: [...ids]
    }
  ]

  messages: [
    {
      channel_id: channel_id
      user_id: string
      date: '2015-08-13 23:17:07' # стандартный mysql формат
      content_type: 'text' || 'image' || 'location'
      content: string || object
    }
  ]
  
  
users: [ # база обычно неполная, так что на компонентах если встречаем айди юзера, которого у нас нет - запрашиваем о нем данные, выводя пустышку
  {
    user_id
    nickname
    online: true || false
  }
]


# ACTIONS
actionFromSocket [
  'messages added': (messages = [...messages]) ->
    type: 'message added'
    message: message

  'typed-users changed': (ids) -> # server-throttle: 500ms
    'type': 'typed-users changed'
    'typed-users': {channel_id: ids, channel_id2: ids}

  'online-users changed': (onlineUsersStatuses = [user_id, user_id2]) -> # server-throttle: 2000ms /  # остальных сбрасываем

  'channels changed': (channels) -> # server-throttle: 1m

  'connect': () -> type: 'chat connecting', connected: true # после коннекта эмитим инишиал сообщения с стартовыми данными
  'disconnect': () -> type: 'chat connecting', connected: false # сбрасываем юзер-статусы на дисконнекте
]

toServer [
  ###
    - версия fast - только сообщения
    - версия full - если общая проверка раз в минуту показала что есть измененные ровы в ченнелах или юзерах
  ###
  'i am reconnect, is it something new messages for me?': ({channels: {channel_id: last_message_id}, users: {user_id: last_message_id}}) ->
    # определяет есть ли сообщения или изменения в каналах / юзерах - эмитит в соответствующие ветки
    
  'i am typing': () -> addToTypingIfNotExist && setTimer
  
  'i send the message': (message = {}) -> 
  
  'connect': () -> onlineUsers.push(socket.user_id) + emit
  'disconnect': () -> onlineUsers.remove(socket.user_id) + emit
] 



###
  на будущее: раз в сутки посылать запрос на обновление данных (user)      
###


