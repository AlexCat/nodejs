My Node.js templates


/////////////// NODEMON (при изменении файлов перезапускает программу) ///////////////
npm i nodemon -g // установка
nodemon app.js // запускаем в папке с проектом 

/////////////// ПОЛЕЗНЫЕ ПЛАГИНЫ ///////////////

//node
node --inspect-brk app.js // запускаем в дебаге с ChromedevTools

// nodemon
npm i nodemon -g // установка
nodemon app.js // запускаем в папке с проектом 
nodemon --inspect-brk app.js // запускаем в дебаге с ChromedevTools с рестартом
nodemon app.js -e js,hbs // теперь наблюдаем за изменениями js и hbs. Без пробелов между js и hbs

// yargs
npm yargs --save // хорошо парсит командуню строку (объект yargs.argv)