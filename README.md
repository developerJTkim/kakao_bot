# kakao_bot

## 환경
- Amazon EC2 Linux Ubuntu 16.04.7 LTS
- Node v14.16.1
- npm 7.10.0
- apache2

## 설치
```bash
sudo apt-get update
# sudo apt-get install nodejs 시 낮은버전이 설치되어짐
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g npm
```

## 라이브러리 설치&셋팅
```bash
npm init -y
npm i -g express
npm i -g nodemon
```

> <b>nodemon</b>은 <b>node monitor</b>의 약자로, 
노드가 실행하는 파일이 속한 디렉터리를 감시하고 있다가 파일이 수정되면 자동으로 노드 애플리케이션을 재시작하는 확장 모듈입니다.
이 확장 모듈을 이용하면 개발 중인 노드 애플리케이션의 소스 코드를 수정할 때마다 매번 노드 명령어를 통해 새로 시작할 필요가 없으므로 매우 편리합니다.
https://www.npmjs.com/package/nodemon
> 

## 실행
```bash
nodemon app.js
```
