# FridgeManager-API

## 実行環境

- node.js : 11.1.0
- npm : 6.8.0
- docker : 18.09.2
- mysql : 8.0.15 for osx10.14 on x86_64 (Homebrew)

## Nodeモジュールインストール

> $ npm install

## サーバ実行

> $ npm start

## dockerでmysqlを実行

> $ docker pull mysql:5.7  
> $ docker run --name db -e MYSQL_ROOT_PASSWORD=pass -p 33306:3306 mysql:5.7

## mysqlを内部から操作

> $ docker ps  
> $ docker exec -it <コンテナID> bash  
> $ mysql -u root -p

## 参考

- [dockerでDBサーバを立てる](https://qiita.com/wataling/items/ce7a29df86f1ce3ef6a3)  
	(mysql:5.7)
