# AppReactNode

Небольшой пример приложения для хакатона [WebWeekend](https://vk.com/webweekend), который пройдет 25-26 мая в Петрозаводске.

> Стек: React, NodeJS, MongoDB

## Развертывание проекта

### Установить [MongoDB](https://ru.wikipedia.org/wiki/MongoDB)

**Linux**

```bash
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod start
```

Подробнее: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

**Windows**

Центр загрузок: https://www.mongodb.com/download-center/community

Подробнее: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

### Установить [Node.js](https://ru.wikipedia.org/wiki/Node.js)

**Linux**

```bash
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -sL https://deb.nodesource.com/setup_10.x | bash -
apt-get install -y nodejs
```

Подробнее: https://github.com/nodesource/distributions/blob/master/README.md

**Windows**

Центр загрузок: https://nodejs.org/en/#download

Подробнее: https://nodejs.org/en/download/package-manager/#windows

### Установить [npm-зависимости](https://habr.com/ru/post/243335/)

1. Открыть терминал
2. Перейти в корень проекта
3. Выполнить `npm install`
4. `cd client`
5. [повторить шаг 3]

### Установить расширение [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ru) для Chrome

Официальный магазин расширений: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ru

### Запуск проекта

1. Открыть терминал
2. Перейти в корень проекта
3. Выполнить `npm run dev`
4. Открыть в браузере http://localhost:3000
