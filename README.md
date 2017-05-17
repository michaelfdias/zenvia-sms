# zenvia-sms
Módulo de integração SMS com a [Zenvia](http://zenvia.com.br).

## Instalação
```
npm i zenvia-sms
```

## Como usar

### Para envio de um único SMS:
``` js
const Zenvia = require('zenvia-sms');

const auth = new Zenvia.Auth('username', 'password');

const sms = new Zenvia.Sms();
sms
  .to(5511966669999)
  .message('Olá Mundo!');

const sender = new Zenvia.Sender(auth);
sender
  .single(sms)
  .send()
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
```

### Para envio de vários SMSs simultaneamente:
``` js
const Zenvia = require('zenvia-sms');

const auth = new Zenvia.Auth('username', 'password');

const sms1 = new Zenvia.Sms();
sms1
  .to(5511966669999)
  .message('Olá Mundo!');

const sms2 = new Zenvia.Sms();
sms2
  .to(5511933338888)
  .message('Olá Mundo!');

const sender = new Zenvia.Sender(auth);
sender
  .multi([sms1, sms2])
  .send()
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
```