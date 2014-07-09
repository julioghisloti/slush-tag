#Gerador de projeto básico usando HTML5 Boilerplate, Compass, tinyPNG, Uglify e CSS Minify 

### Gulpjs + Slush for the win O/


## O que é?
Podemos dizer que o Slush é o Yeoman para o Gulp. Mas o que isso faz? Bom, ele básicamente acaba com aquela parada de copiar os arquivos base (Boilerplate, Gulp file… Ou até mesmo um framework back fuck zik@ como o Codeigniter ou Zend) que serão utilizados em um determinado projeto. CHEGA DE CTRL C, CTRL V!

Até aqui você já percebeu que o Slush não é algo revolucionário super foda como uma maquina de coca, mas já da uma "ajudada". Antes de tudo, seria bem legal ler a documentação do Slush (http://slushjs.github.io/) e o post GENIAL do DIOGO MORETTI (http://diogo.nu/slush-o-novo-yeoman/) para entender melhor...


## Como eu uso isso?
Primeiro de tudo, você deve instalar o Gulp na sua maquina

	$ npm install gulp -g
	
Após isso, iremos instalar o Slush

	$ npm install slush -g

Até aqui ok, Certo? Blz. Então vamos clonar esse repositorio e cirar um link para chamar essa slush na nossa maquina (como foi mostrado no post do Giogo)

	$ git clone https://github.com/julioghisloti/slush-tag.git && cd slush-tag
	$ npm link .
	
PRONTO! Já está tudo certo. Agora, quando for fazer um projeto que irá usar essas dependências, é só criar uma pasta e chamar essa Slush. Veja:
	
	$ mkdir projeto && cd projeto
	$ slush tag
	
Mágico!