# Usa uma imagem Node.js como base com pnpm
FROM node:21.7.3

# Instala o pnpm globalmente
RUN npm install -g pnpm

# Cria e define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo package.json e o pnpm-lock.yaml para o diretório de trabalho
COPY package.json pnpm-lock.yaml ./

# Instala as dependências usando pnpm
RUN pnpm install

# Copia todos os arquivos da aplicação para o diretório de trabalho
COPY . .

# Expõe a porta 3000 (ou a porta que sua aplicação Nest.js está configurada para usar)
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["pnpm", "start:prod"]
