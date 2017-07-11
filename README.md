

## POKEMOM API - MULTIPLATAFORMA
Link API - https://pokeapi.co/api/v2/
*Consumir Informações Diversas relacionadas a POKEMOM.


## Exemplo Codigo

public getPokemon(): Promise<any> {  
    return new Promise((resolve, reject) => {
        this.platform.ready().then((readySource) => {
            this.storage.executeSql("SELECT * FROM pokemon", []).then((data) => {
                let pokemon = [];
                if(data.rows.length > 0) {
                    for(let i = 0; i < data.rows.length; i++) {
                        pokemon.push({
                            id: data.rows.item(i).id,
                            name: data.rows.item(i).name,
                            url: data.rows.item(i).url
                        });
                    }
                }
                resolve(pokemon);
            }, (error) => {
                reject(error);
            });
        });
    });
}

## Estrutura do Projeto

node_modules - Contém todos os pacotes npm listados no arquivo package.json.

platforms - Este local é utilizado para o build do aplicativo para plataformas como Android e iOS. Dentro desta pasta você irá achar uma pasta para a plataforma que você estiver gerando. Para adicionar uma plataforma, como por exemplo o android, simplesmente execute no terminal ionic platform add android, e uma pasta android será inserida.

plugins - Aqui é onde os plugins do cordova são armazenados quando instalados. Estes plugins habilitam que o seu aplicativo tenha funcionalidades nativas, tais como câmera, geolocalização, bluetooth, etc.

resources - Aqui são armazenados o ícone e a tela de splash do aplicativo.

src - Aqui contém todo o código fonte do seu aplicativo.

www - Todo o código fonte desenvolvido na pasta src é empacotado utilizando webpack.

config.xml - Aqui contém algumas configurações do aplicativo, tais como, nome, nome do pacote, versão, tudo isto será utilizado para instalar o aplicativo no celular.

package.json - Aqui é onde estão listados todos os pacotes npm salvos do seu projeto.

tsconfig.json - Aqui estão todas as configurações para compilar um projeto TypeScript.

tslint.json - Aqui estão as regras do lint.


### PRE- REQUISITOS - Instalação
* NODEJS - https://nodejs.org 
* IONIC FRAMEWORK + AngularJs + TypeScripts - https://ionicframework.com/docs/ projects.
* BUILD NPM - https://www.npmjs.com
* SQLITE - https://www.npmjs.com/package/cordova-plugin-sqlite

## COMANDOS CMD - Instalação

$ sudo npm install -g ionic@version cordova
$ ionic start myBlank blank
$ ionic info
$ ionic -v
$ ionic serve
*O comando start oferece três tipos de templates com código boilerplate.

#Informações de Instalação

global packages:

    @ionic/cli-utils : 1.4.0
    Cordova CLI      : 7.0.1
    Ionic CLI        : 3.4.0

local packages:

    @ionic/app-scripts              : 1.3.7
    @ionic/cli-plugin-cordova       : 1.4.0
    @ionic/cli-plugin-ionic-angular : 1.3.1
    Cordova Platforms               : none
    Cordova-sqlite-storage
    Ionic Framework                 : ionic-angular 3.5.0

System:

    Node       : v7.10.0
    OS         : Windows 10
    Xcode      : not installed
    ios-deploy : 4.2.1
    ios-sim    : not installed
    npm        : 4.2.0
