# Usa uma imagem Node.js como base
FROM node:21
# Cria e define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo package.json e o yarn.lock para o diretório de trabalho
COPY package.json yarn.lock ./

# Instala as dependências
RUN npm install

# Copia todos os arquivos da aplicação para o diretório de trabalho
COPY . .

# Expõe a porta 3000 (ou a porta que sua aplicação Nest.js está configurada para usar)
EXPOSE 3001

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["yarn", "start:prod"]
