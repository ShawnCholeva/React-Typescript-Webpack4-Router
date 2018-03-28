FROM stefanscherer/node-windows

RUN npm install -g serve

EXPOSE 5000

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build:prod

CMD serve -p 5000 -s dist