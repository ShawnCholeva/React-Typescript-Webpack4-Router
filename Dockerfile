FROM compulim/nanoserver-node

RUN npm install -g serve

CMD serve -s dist

EXPOSE 5000

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build:prod