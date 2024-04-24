# Use uma imagem oficial do Node.js como base
FROM node:14

# Defina o diretório de trabalho no container
WORKDIR /usr/src/app

# Copie os arquivos do projeto para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie apenas os arquivos necessários
COPY package*.json ./
COPY src/ ./src/

# Expõe a porta que a aplicação usará
EXPOSE 3002

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:dev"]
